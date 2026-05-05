// Firebase is initialized in firebase-config.js
// The 'db' instance is globally available from that file

// State
let currentVenueId = null;
let currentVenueData = null;
let editingIndex = null;
let currentAdminSort = 'recent';

/**
 * Initialize Admin Panel
 */
async function initAdmin() {
    // Task 2: Fix the Admin Dashboard
    currentVenueId = sessionStorage.getItem('currentVendorId');

    if (!currentVenueId) {
        window.location.href = 'index.html';
        return;
    }

    // Real-time listener for the venue
    db.collection('venues').doc(currentVenueId).onSnapshot(doc => {
        if (!doc.exists) {
            sessionStorage.removeItem('currentVendorId');
            window.location.href = 'index.html';
            return;
        }
        currentVenueData = { id: doc.id, ...doc.data() };
        updateUI();
    }, err => {
        console.error("Firestore Error:", err);
        showToast("Error syncing data", true);
    });
}

/**
 * UI Updates
 */
function updateUI() {
    if (!currentVenueData) return;

    // Header Info
    document.getElementById('admin-venue-name').innerText = currentVenueData.name;
    document.getElementById('venue-title').innerText = currentVenueData.name;
    document.getElementById('venue-category').innerText = currentVenueData.category;
    document.getElementById('venue-logo').src = currentVenueData.image || 'logos/miu-logo.png';

    // Force Busy Toggle
    const toggle = document.getElementById('force-busy-toggle');
    toggle.checked = currentVenueData.isForceBusy === true;

    // Menu Count
    const menu = currentVenueData.menu || [];
    const countEl = document.getElementById('item-count');
    if (countEl) countEl.innerText = `${menu.length} Items`;

    // Menu List (Sorted)
    renderMenuList(getSortedAdminMenu());
}

/**
 * Sorting Helper
 */
function getSortedAdminMenu() {
    if (!currentVenueData || !currentVenueData.menu) return [];
    const menu = [...currentVenueData.menu];
    
    if (currentAdminSort === 'name-asc') return menu.sort((a, b) => a.name.localeCompare(b.name));
    if (currentAdminSort === 'price-asc') return menu.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (currentAdminSort === 'price-desc') return menu.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    
    // Default: 'recent' (reverse Firestore append order)
    return menu.reverse();
}

/**
 * Render Menu List
 */
function renderMenuList(menu) {
    const list = document.getElementById('menu-items-list');
    if (!list) return;

    if (menu.length === 0) {
        list.innerHTML = `<div class="py-10 text-center text-gray-400">No items in menu. Add your first one!</div>`;
        return;
    }

    list.innerHTML = menu.map((item, index) => `
        <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition group">
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center font-bold text-gray-400 border border-gray-100 dark:border-gray-700">
                    ${index + 1}
                </div>
                <div>
                    <h4 class="font-bold text-gray-800 dark:text-white">${item.name}</h4>
                    <p class="text-xs text-gray-500 uppercase font-semibold tracking-wider">${item.cat || 'Other'} • LE ${item.price}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="editMenuItem(${index})" class="p-2 text-gray-400 hover:text-blue-500 transition opacity-0 group-hover:opacity-100">
                    <i data-lucide="edit-3" class="w-5 h-5"></i>
                </button>
                <button onclick="deleteItem('${item.id}', '${item.name.replace(/'/g, "\\'")}')" class="p-2 text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100">
                    <i data-lucide="trash-2" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) lucide.createIcons();
}

/**
 * Event Handlers
 */

// Sort Change
document.getElementById('adminMenuSort').addEventListener('change', (e) => {
    currentAdminSort = e.target.value;
    renderMenuList(getSortedAdminMenu());
});

// Toggle Force Busy
document.getElementById('force-busy-toggle').addEventListener('change', async (e) => {
    const isForced = e.target.checked;
    try {
        await db.collection('venues').doc(currentVenueId).update({
            isForceBusy: isForced
        });
        showToast(isForced ? "Venue forced to BUSY state" : "Force state cleared");
    } catch (err) {
        console.error("Update failed:", err);
        showToast("Failed to update status", true);
    }
});

// Add Menu Item
document.getElementById('add-menu-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const price = document.getElementById('item-price').value;
    const cat = document.getElementById('item-category').value;

    try {
        let updatedMenu = [...(currentVenueData.menu || [])];
        
        if (editingIndex !== null) {
            // Update existing item
            const item = updatedMenu[editingIndex];
            updatedMenu[editingIndex] = { ...item, name, price, cat };
        } else {
            // Add new item
            const newItem = {
                id: Date.now().toString(),
                name,
                price,
                cat,
                reactions: { fire: 0, thumb: 0 }
            };
            updatedMenu.push(newItem);
        }

        await db.collection('venues').doc(currentVenueId).update({
            menu: updatedMenu
        });
        
        showToast(editingIndex !== null ? `"${name}" updated!` : `"${name}" added to menu!`);
        cancelEdit();
    } catch (err) {
        console.error("Save failed:", err);
        showToast("Failed to save item", true);
    }
});

/**
 * Delete Menu Item
 */
async function deleteItem(id, name) {
    const confirmed = await CustomDialog.show({
        title: "Delete Item?",
        message: `Are you sure you want to remove "${name}" from your menu?`,
        confirmText: "Delete",
        cancelText: "Cancel"
    });

    if (confirmed) {
        const updatedMenu = (currentVenueData.menu || []).filter(item => item.id !== id);
        try {
            await db.collection('venues').doc(currentVenueId).update({ menu: updatedMenu });
            showToast(`"${name}" removed from menu.`);
        } catch (err) {
            console.error("Delete failed:", err);
            showToast("Error deleting item", true);
        }
    }
}
/**
 * Edit Menu Item
 */
function editMenuItem(index) {
    const item = currentVenueData.menu[index];
    editingIndex = index;
    
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-price').value = item.price;
    document.getElementById('item-category').value = item.cat || 'Other';
    
    const btn = document.querySelector('#add-menu-form button[type="submit"]');
    btn.innerText = "Update Item";
    btn.classList.add('bg-blue-600');
    btn.classList.remove('miu-bg-red');

    if (!document.getElementById('cancel-edit-btn')) {
        const cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancel-edit-btn';
        cancelBtn.type = 'button';
        cancelBtn.innerText = "Cancel Edit";
        cancelBtn.className = "w-full mt-2 bg-gray-500 text-white py-4 rounded-2xl font-bold hover:opacity-90 transition";
        cancelBtn.onclick = cancelEdit;
        btn.parentNode.appendChild(cancelBtn);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEdit() {
    editingIndex = null;
    document.getElementById('add-menu-form').reset();
    const btn = document.querySelector('#add-menu-form button[type="submit"]');
    btn.innerText = "Add to Menu";
    btn.classList.remove('bg-blue-600');
    btn.classList.add('miu-bg-red');
    
    const cancelBtn = document.getElementById('cancel-edit-btn');
    if (cancelBtn) cancelBtn.remove();
}

/**
 * Helpers
 */
function showAccessDenied() {
    document.getElementById('access-denied').classList.remove('hidden');
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.innerText = msg;
    toast.style.backgroundColor = isError ? '#ef4444' : '#111827';
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}


/**
 * Theme Manager (Synced with index.html)
 */
const themeManager = {
    isDark: false,
    toggle() {
        this.isDark = !this.isDark;
        document.body.classList.toggle('dark-theme', this.isDark);
        localStorage.setItem('miu_dark', this.isDark);
        
        const icon = document.getElementById('theme-icon-desktop');
        if (icon) {
            icon.setAttribute('data-lucide', this.isDark ? 'moon' : 'sun');
            if (window.lucide) lucide.createIcons();
        }
    },
    load() {
        this.isDark = localStorage.getItem('miu_dark') === 'true';
        document.body.classList.toggle('dark-theme', this.isDark);
        const icon = document.getElementById('theme-icon-desktop');
        if (icon) icon.setAttribute('data-lucide', this.isDark ? 'moon' : 'sun');
    }
};

/**
 * i18n Refactor (Synced with app.js)
 */
let currentLang = localStorage.getItem('miu_lang') || 'en';

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const val = translations[lang][key];
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else {
                el.textContent = val;
            }
        }
    });

    const langText = document.getElementById('langText');
    if (langText) {
        langText.innerText = lang.toUpperCase();
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('miu_lang', currentLang);
    applyTranslations(currentLang);
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast || !toastMsg || !toastIcon) return;
    
    toastMsg.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    if (isError) {
        toastIcon.classList.add('text-red-500');
        toastIcon.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5"></i>';
    } else {
        toastIcon.classList.add('text-green-500');
        toastIcon.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5"></i>';
    }
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}

// --- Vendor Settings Logic ---

function openSettingsModal() {
    const modal = document.getElementById('vendor-settings-modal');
    if (!modal) return;
    
    // Pre-fill inputs with current data
    document.getElementById('settings-logo-upload').value = "";
    document.getElementById('settings-logo-current').value = currentVenueData.image || '';
    document.getElementById('settings-password').value = currentVenueData.adminPassword || currentVenueData.adminCode || '';
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
    }, 10);
}

function closeSettingsModal() {
    const modal = document.getElementById('vendor-settings-modal');
    if (!modal) return;
    
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

async function saveSettings() {
    const logoFile = document.getElementById('settings-logo-upload').files[0];
    const currentLogo = document.getElementById('settings-logo-current').value;
    const newPassword = document.getElementById('settings-password').value.trim();
    
    if (!logoFile && !newPassword) {
        closeSettingsModal();
        return;
    }

    const updates = {};
    
    try {
        if (logoFile) {
            updates.image = await toBase64(logoFile);
        }
        
        if (newPassword) {
            updates.adminPassword = newPassword;
            updates.adminCode = newPassword; // Sync both for compatibility
        }

        await db.collection('venues').doc(currentVenueId).update(updates);
        
        if (newPassword) {
            await CustomDialog.show({
                type: 'alert',
                title: 'Security Updated',
                message: "Password updated successfully! Please use this new code next time you log in.",
                confirmText: "Understood"
            });
        } else {
            showToast("Settings updated successfully!");
        }
        
        closeSettingsModal();
    } catch (err) {
        console.error("Failed to update settings:", err);
        showToast("Error updating settings", true);
    }
}

const CustomDialog = {
    modal: null, title: null, message: null, confirmBtn: null, cancelBtn: null, resolvePromise: null,
    init() {
        this.modal = document.getElementById('custom-dialog');
        this.title = document.getElementById('dialog-title');
        this.message = document.getElementById('dialog-message');
        this.confirmBtn = document.getElementById('dialog-confirm-btn');
        this.cancelBtn = document.getElementById('dialog-cancel-btn');
        this.confirmBtn.onclick = () => this.close(true);
        this.cancelBtn.onclick = () => this.close(false);
    },
    show(options) {
        if (!this.modal) this.init();
        this.title.innerText = options.title || 'Are you sure?';
        this.message.innerText = options.message || '';
        this.confirmBtn.innerText = options.confirmText || 'Confirm';
        this.cancelBtn.innerText = options.cancelText || 'Cancel';
        if (options.type === 'alert') this.cancelBtn.classList.add('hidden');
        else this.cancelBtn.classList.remove('hidden');
        this.modal.classList.remove('hidden');
        this.modal.classList.add('flex');
        setTimeout(() => {
            this.modal.classList.remove('opacity-0');
            this.modal.querySelector('div').classList.remove('scale-95');
        }, 10);
        return new Promise((resolve) => { this.resolvePromise = resolve; });
    },
    close(result) {
        this.modal.classList.add('opacity-0');
        this.modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            this.modal.classList.add('hidden');
            this.modal.classList.remove('flex');
            if (this.resolvePromise) this.resolvePromise(result);
        }, 300);
    }
};

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    themeManager.load();
    applyTranslations(currentLang);
    initAdmin();
    if (window.lucide) lucide.createIcons();
});
