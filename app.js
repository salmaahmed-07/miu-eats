// Firebase is initialized in firebase-config.js
// The 'db' instance is globally available from that file

/**
 * State Management
 */
let currentState = {
    places: [], // Hydrated by Firestore onSnapshot
    currentPage: 'home',
    activeCategory: 'all',
    activeBuilding: '',
    selectedPlace: null,
    history: ['home'],
    currentMenuSort: 'name-asc'
};

let toastTimeout;
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast || !toastMsg) return;

    clearTimeout(toastTimeout);
    toastMsg.innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'bg-green-600', 'bg-red-600', 'bg-gray-900', 'bg-blue-600');
    toast.classList.add('translate-y-0', 'opacity-100');

    if (type === 'success') {
        toast.classList.add('bg-green-600');
        toastIcon.innerHTML = '<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
        toastTimeout = setTimeout(hideToast, 3000);
    } else if (type === 'error' || type === 'true') {
        toast.classList.add('bg-red-600');
        toastIcon.innerHTML = '<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>';
        toastTimeout = setTimeout(hideToast, 5000);
    } else if (type === 'loading') {
        toast.classList.add('bg-blue-600');
        toastIcon.innerHTML = '<svg class="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>';
    } else {
        toast.classList.add('bg-gray-900');
        toastIcon.innerHTML = '<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
        toastTimeout = setTimeout(hideToast, 3000);
    }
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
}

/**
 * Real-Time Hydration
 * Synchronizes local state with Firestore 'venues' collection
 * and calculates dynamic busyness based on recent votes.
 */
db.collection('venues').onSnapshot(async snapshot => {
    const venues = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const fortyFiveMinsAgo = new Date(Date.now() - 45 * 60 * 1000);

    // Calculate dynamic busyness for each venue
    const updatedPlaces = await Promise.all(venues.map(async venue => {
        try {
            const votesSnapshot = await db.collection('venues').doc(venue.id).collection('votes')
                .where('timestamp', '>', fortyFiveMinsAgo)
                .get();
            
            const recentVotes = votesSnapshot.size;
            // A venue is busy if it has 10+ recent votes or if admin forced it
            const isBusy = recentVotes >= 10 || venue.isForceBusy === true;
            
            return { ...venue, isBusy, recentVotes };
        } catch (err) {
            console.error(`Error fetching votes for ${venue.id}:`, err);
            return { ...venue, isBusy: venue.isForceBusy === true, recentVotes: 0 };
        }
    }));

    currentState.places = updatedPlaces;
    console.log(`Synced ${currentState.places.length} venues with dynamic busyness.`);
    
    // Essential: Update the UI once data is ready
    router.updateUI();
}, error => {
    console.error("Firestore Sync Error:", error);
    showError(`Sync Error: ${error.message}`);
});

/**
 * Router & Navigation
 */
const router = {
    scrollPositions: {},
    navigate(page, params = {}) {
        try {
            console.log(`Navigating to: ${page}`, params);
            
            if (currentState.currentPage) {
                this.scrollPositions[currentState.currentPage] = window.scrollY;
            }
            
            currentState.currentPage = page;
            if (page === 'detail') {
                currentState.selectedPlace = params.placeId;
            }

            if (currentState.history[currentState.history.length - 1] !== page) {
                currentState.history.push(page);
            }

            this.updateUI(false);
            
            const savedScroll = this.scrollPositions[page] || 0;
            window.scrollTo(0, savedScroll);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    },

    goHome() {
        currentState.activeCategory = 'all';
        currentState.activeBuilding = '';

        document.querySelectorAll('.filter-chip').forEach(chip => {
            if (chip.getAttribute('data-category') === 'all') chip.classList.add('active');
            else chip.classList.remove('active');
        });

        this.navigate('home');
    },

    back() {
        if (currentState.history.length > 1) {
            if (currentState.currentPage) {
                this.scrollPositions[currentState.currentPage] = window.scrollY;
            }
            currentState.history.pop();
            const prevPage = currentState.history[currentState.history.length - 1];
            currentState.currentPage = prevPage;
            this.updateUI(true);
            
            const savedScroll = this.scrollPositions[prevPage] || 0;
            window.scrollTo(0, savedScroll);
        } else {
            this.goHome();
        }
    },

    updateUI(isBack = false) {
        try {
            const activeSection = document.getElementById(`page-${currentState.currentPage}`);

            document.querySelectorAll('.page-section').forEach(section => {
                if (section !== activeSection) {
                    if (currentState.currentPage === 'detail' && section.id === 'page-home') {
                        section.style.display = 'block';
                        section.classList.add('page-stacked-bg');
                    } else if (isBack && section.id === 'page-detail') {
                        section.style.opacity = '0';
                        const content = section.querySelector('div');
                        if (content) content.classList.add('scale-95');
                        section.classList.add('pointer-events-none');
                        setTimeout(() => { 
                            section.style.display = 'none'; 
                            section.classList.remove('pointer-events-none');
                        }, 500);
                    } else if (section.style.display !== 'none' && !section.classList.contains('page-exit-down')) {
                        section.classList.remove('page-enter-left', 'page-enter-right');
                        const exitClass = isBack ? 'page-exit-right' : 'page-exit-left';
                        section.classList.add(exitClass);
                        setTimeout(() => { 
                            section.style.display = 'none'; 
                            section.classList.remove(exitClass); 
                        }, 400);
                    }
                }
            });

            if (activeSection) {
                const wasStacked = activeSection.classList.contains('page-stacked-bg');
                activeSection.style.display = 'block';
                activeSection.classList.remove('page-enter-left', 'page-enter-right', 'page-exit-left', 'page-exit-right', 'page-exit-down', 'page-stacked-bg');
                void activeSection.offsetWidth; // Trigger reflow
                
                if (currentState.currentPage === 'detail') {
                    activeSection.classList.remove('hidden');
                    activeSection.classList.add('flex');
                    document.body.style.overflow = 'hidden'; // Lock scroll
                    void activeSection.offsetWidth;
                    activeSection.classList.remove('pointer-events-none');
                    activeSection.style.opacity = '1';
                    const content = activeSection.querySelector('div');
                    if (content) content.classList.remove('scale-95');
                } else if (!wasStacked) {
                    document.body.style.overflow = ''; // Unlock scroll
                    const enterClass = isBack ? 'page-enter-left' : 'page-enter-right';
                    activeSection.classList.add(enterClass);
                } else {
                    document.body.style.overflow = '';
                }
            }

            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.getAttribute('data-page') === currentState.currentPage) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Specific page logic - now using currentState.places
            if (currentState.currentPage === 'home') {
                renderGrid('home-grid', filterData());
            } else if (currentState.currentPage === 'nearme') {
                renderGrid('nearme-grid', filterData());
            } else if (currentState.currentPage === 'detail') {
                renderDetail();
            }

            if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        } catch (error) {
            console.error('UI Update error:', error);
            showError(`UI Error: ${error.message}`);
        }
    }
};

/**
 * Theme Manager
 */
const themeManager = {
    isDark: false,
    toggle() {
        this.isDark = !this.isDark;
        document.body.classList.toggle('dark-theme', this.isDark);

        const iconDesktop = document.getElementById('theme-icon-desktop');
        const iconPopup = document.getElementById('theme-icon-popup');

        if (this.isDark) {
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'moon');
            if (iconPopup) iconPopup.setAttribute('data-lucide', 'sun');
        } else {
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'sun');
            if (iconPopup) iconPopup.setAttribute('data-lucide', 'moon');
        }
        if (window.lucide) lucide.createIcons();
    }
};

/**
 * Rendering Logic
 */
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; opacity: 0.6; animation: fadeIn 0.4s ease forwards;">
                <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <h3 style="margin-bottom: 8px;">No results found</h3>
                <p style="font-size: 14px;">Try adjusting your filters or search query.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map((place, index) => {
        const isOpen = checkIfOpen(place.openingHours);
        const staggerDelay = index * 0.05;
        const logoId = `skeleton-logo-${place.id}`;
        return `
            <div class="place-card wow-card" style="--delay: ${staggerDelay}" onclick="router.navigate('detail', { placeId: '${place.id}' })">
                <div class="logo-circle skeleton" id="${logoId}">
                    <img src="${place.image}" alt="${place.name}" class="place-img" 
                         onload="document.getElementById('${logoId}')?.classList.remove('skeleton')" 
                         onerror="this.src='logos/miu-logo.png'; document.getElementById('${logoId}')?.classList.remove('skeleton')">
                </div>
                <div class="place-content">
                    <div class="place-header">
                        <h3 class="place-title">${place.name}</h3>
                        <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open' : 'Closed'}</span>
                    </div>
                    <div class="place-info" style="margin-bottom: 4px;">
                        ${getBusynessIndicator(place)}
                    </div>
                    <div class="price-range" style="font-size: 12px;">${place.priceRange}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderDetail() {
    const place = currentState.places.find(p => p.id === currentState.selectedPlace);
    const container = document.getElementById('detail-content');
    if (!container) return;

    if (!place) {
        container.innerHTML = '<div style="padding: 40px; text-align: center;">Place not found.</div>';
        return;
    }

    const isOpen = checkIfOpen(place.openingHours);
    const menuCats = ['All', ...new Set(place.menu.map(m => m.cat || 'Other'))];

    container.innerHTML = `
        <div class="hero px-4 md:px-8 lg:px-12" style="text-align: left; padding-top: 0;">
            <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
                <div style="width: 100px; height: 100px; min-width: 100px; border-radius: 50%; background: #fdfdfd; border: 1px solid var(--nav-border); display: flex; align-items: center; justify-content: center; padding: 0; overflow: hidden;">
                    <img src="${place.image}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='logos/miu-logo.png'">
                </div>
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 4px; flex-wrap: wrap;">
                        <h1 style="font-size: 28px; margin: 0; line-height: 1.1;">${place.name}</h1>
                        ${((() => {
                            const lastVoted = localStorage.getItem(`lastVoted_${place.id}`);
                            const voteDisabled = lastVoted && (Date.now() - parseInt(lastVoted)) < 10 * 60 * 1000;
                            return voteDisabled 
                                ? `<button class="btn btn-primary" style="padding: 10px 28px; font-size: 15px; border-radius: 50px; background-color: var(--gray-medium); color: var(--text-color); border: 1px solid var(--gray-medium); opacity: 0.6; cursor: not-allowed;" disabled>Voted</button>`
                                : `<button id="vote-btn-${place.id}" class="btn btn-primary" style="padding: 10px 28px; font-size: 15px; border-radius: 50px;" onclick="openVoteModal('${place.id}')">Vote</button>`;
                        })())}
                    </div>
                    <div style="opacity: 0.9; margin-bottom: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                        <div style="font-weight: 600; font-size: 14px; color: var(--text-color); opacity: 0.7;">
                            ${place.category.toUpperCase()}
                        </div>
                        ${getBusynessIndicator(place)}
                        <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open now' : 'Closed'}</span>
                        <div class="price-range" style="font-size: 13px; opacity: 0.6;">${place.priceRange}</div>
                    </div>
                </div>
            </div>
            
            <div class="search-container" style="margin-bottom: 24px; max-width: 100%; margin-left:0;">
                <i data-lucide="search" class="search-icon"></i>
                <input type="text" class="main-search" placeholder="Search menu items..." oninput="handleMenuSearch(this.value)">
            </div>

            <div class="category-filters" id="menu-category-filters">
                ${menuCats.map(cat => `
                    <div class="filter-chip ${cat === 'All' ? 'active' : ''}" 
                         data-menu-cat="${cat}" 
                         onclick="filterMenuByCategory('${cat}')">${cat}</div>
                `).join('')}
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 32px; margin-bottom: 16px;">
                <h3 style="font-size: 22px; margin: 0; font-weight: 800;">Menu</h3>
                <div class="relative inline-block w-64 group">
                    <!-- Custom Trigger Button -->
                    <button onclick="toggleSortDropdown()" id="sort-dropdown-trigger" 
                        class="flex items-center justify-between w-full bg-white border border-gray-200 text-gray-700 py-3 px-6 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-bold text-sm cursor-pointer hover:border-red-300 transition-all duration-300">
                        <span id="sort-current-label">${
                            currentState.currentMenuSort === 'name-asc' ? 'A-Z (Name)' :
                            currentState.currentMenuSort === 'price-asc' ? 'Price: Low to High' :
                            currentState.currentMenuSort === 'price-desc' ? 'Price: High to Low' :
                            'Most Loved'
                        }</span>
                        <svg class="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Beautifully Rounded Dropdown List -->
                    <div id="sort-options-list" class="hidden absolute left-0 right-0 z-50 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div onclick="applyCustomSort('name-asc', 'A-Z (Name)')" class="px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors border-b border-gray-50 flex items-center justify-between">
                            A-Z (Name)
                            ${currentState.currentMenuSort === 'name-asc' ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}
                        </div>
                        <div onclick="applyCustomSort('price-asc', 'Price: Low to High')" class="px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors border-b border-gray-50 flex items-center justify-between">
                            Price: Low to High
                            ${currentState.currentMenuSort === 'price-asc' ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}
                        </div>
                        <div onclick="applyCustomSort('price-desc', 'Price: High to Low')" class="px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors border-b border-gray-50 flex items-center justify-between">
                            Price: High to Low
                            ${currentState.currentMenuSort === 'price-desc' ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}
                        </div>
                        <div onclick="applyCustomSort('loved', 'Most Loved')" class="px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors flex items-center justify-between">
                            Most Loved
                            ${currentState.currentMenuSort === 'loved' ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-items-list" style="margin-top: 8px;">
                ${((() => {
                    const sorted = getProcessedMenu(place.menu);
                    return sorted.map((item, index) => renderMenuItem(item, index)).join('');
                })())}
            </div>
        </div>
    `;
    if (window.lucide) lucide.createIcons();
}

function filterMenuByCategory(cat) {
    const place = currentState.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;

    document.querySelectorAll('#menu-category-filters .filter-chip').forEach(chip => {
        if (chip.getAttribute('data-menu-cat') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });

    const filtered = cat === 'All' ? [...place.menu] : place.menu.filter(m => m.cat === cat);
    const sorted = getProcessedMenu(filtered);
    
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = sorted.map((item, index) => renderMenuItem(item, index)).join('');
        if (window.lucide) lucide.createIcons();
    }
}

/**
 * Custom Dropdown Logic
 */
window.toggleSortDropdown = function() {
    const list = document.getElementById('sort-options-list');
    if (list) list.classList.toggle('hidden');
};

window.applyCustomSort = function(val, label) {
    currentState.currentMenuSort = val;
    applyMenuSort(val);
    // UI will re-render via applyMenuSort -> filterMenuByCategory -> renderDetail
};

// Global click handler to close dropdown
document.addEventListener('click', (e) => {
    const trigger = document.getElementById('sort-dropdown-trigger');
    const list = document.getElementById('sort-options-list');
    if (trigger && list && !trigger.contains(e.target) && !list.contains(e.target)) {
        list.classList.add('hidden');
    }
});

function applyMenuSort(sortBy) {
    currentState.currentMenuSort = sortBy;
    const catChip = document.querySelector('#menu-category-filters .filter-chip.active');
    const activeCat = catChip ? catChip.getAttribute('data-menu-cat') : 'All';
    filterMenuByCategory(activeCat);
}

function getProcessedMenu(items) {
    const hr = new Date().getHours();
    const pizzaUnavailable = hr >= 13 || hr < 7;
    const sortBy = currentState.currentMenuSort;

    return [...items].sort((a, b) => {
        // Business Rule: Pizza Availability
        const aDown = pizzaUnavailable && a.cat === 'Pizza' ? 1 : 0;
        const bDown = pizzaUnavailable && b.cat === 'Pizza' ? 1 : 0;
        if (aDown !== bDown) return aDown - bDown;

        // User Sort
        if (sortBy === 'price-asc') return parseFloat(a.price) - parseFloat(b.price);
        if (sortBy === 'price-desc') return parseFloat(b.price) - parseFloat(a.price);
        if (sortBy === 'loved') {
            const aLikes = (a.reactions?.fire || 0) + (a.reactions?.thumb || 0);
            const bLikes = (b.reactions?.fire || 0) + (b.reactions?.thumb || 0);
            return bLikes - aLikes;
        }
        return a.name.localeCompare(b.name);
    });
}

function renderMenuItem(item, index) {
    const currentHour = new Date().getHours();
    const isPizzaUnavailable = item.cat === 'Pizza' && (currentHour >= 13 || currentHour < 7);
    const place = currentState.places.find(p => p.id === currentState.selectedPlace) || {name: 'Unknown'};
    const delay = (index || 0) * 0.05;
    
    const safeName = item.name.replace(/'/g, "\\'");
    const safeCat = (item.cat || '').replace(/'/g, "\\'");
    const safePlace = place.name.replace(/'/g, "\\'");
    
    const fireCooldown = localStorage.getItem(`react_${item.id}_fire`);
    const thumbCooldown = localStorage.getItem(`react_${item.id}_thumb`);
    const isFireDisabled = fireCooldown && (Date.now() - parseInt(fireCooldown)) < 60 * 60 * 1000;
    const isThumbDisabled = thumbCooldown && (Date.now() - parseInt(thumbCooldown)) < 60 * 60 * 1000;

    return `
        <div class="menu-item wow-menu-item${isPizzaUnavailable ? ' item-unavailable' : ''}" style="--delay: ${delay}">
            <div class="menu-item-info">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <h4 style="margin:0; display:flex; align-items:center; gap:6px;">
                        ${item.name}
                        <i data-lucide="info" style="width:16px; height:16px; opacity:0.5; cursor:pointer;" onclick="openQuickPeekMobile(event, '${safeName}', '${item.price}', '${safePlace}', '${safeCat}')"></i>
                    </h4>
                    ${isPizzaUnavailable ? '<span class="badge-unavailable">Not Available</span>' : ''}
                </div>
                <div class="price-range">LE ${item.price}</div>
            </div>
            <div class="menu-item-actions">
                <div class="reactions">
                    <button class="reaction-btn ${isFireDisabled ? 'reaction-disabled' : ''}" onclick="react('${item.id}', 'fire', this, event)" ${isFireDisabled ? 'disabled' : ''}>
                        🔥 <span class="reaction-count" id="count-${item.id}-fire">${item.reactions.fire}</span>
                    </button>
                    <button class="reaction-btn ${isThumbDisabled ? 'reaction-disabled' : ''}" onclick="react('${item.id}', 'thumb', this, event)" ${isThumbDisabled ? 'disabled' : ''}>
                        👍 <span class="reaction-count" id="count-${item.id}-thumb">${item.reactions.thumb}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Helper Logic
 */
function checkIfOpen(hours) {
    if (!hours) return false;
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= hours.open && currentHour < hours.close;
}

function filterData() {
    let filtered = (currentState.places || []).filter(p => p.category !== 'supermarket' && !p.isHidden);
    if (currentState.activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentState.activeCategory);
    }
    if (currentState.activeBuilding) {
        filtered = filtered.filter(p => p.buildings && p.buildings.includes(currentState.activeBuilding));
    }
    return filtered;
}

function filterByCategory(cat) {
    currentState.activeCategory = cat;
    document.querySelectorAll('.filter-chip').forEach(chip => {
        if (chip.getAttribute('data-category') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });
    renderGrid('home-grid', filterData());
    if (window.lucide) lucide.createIcons();
}

function getBusynessIndicator(place) {
    if (!place) return '';
    
    const isBusy = place.isBusy;
    const isForced = place.isForceBusy === true;
    
    let text, cssClass;
    if (isBusy) {
        text = isForced ? 'Busy (Admin Force)' : 'Busy';
        cssClass = 'status-red';
    } else {
        // We could add a "yellow" state if votes are between 5-9, but following the "10+" rule:
        text = 'Safe to Go';
        cssClass = 'status-green';
    }
    
    return `
        <div class="busyness-indicator ${cssClass}">
            <div class="busyness-dot"></div>
            <span class="busyness-text">${text}</span>
        </div>
    `;
}

let currentVotePlaceId = null;

function openVoteModal(placeId) {
    const lastVoted = localStorage.getItem(`lastVoted_${placeId}`);
    if (lastVoted && (Date.now() - parseInt(lastVoted)) < 10 * 60 * 1000) {
        return;
    }
    currentVotePlaceId = placeId;
    const modal = document.getElementById('vote-modal');
    if (modal) {
        modal.classList.add('active');
        document.querySelectorAll('input[name="busyness-vote"]').forEach(r => r.checked = false);
    }
}

function closeVoteModal() {
    const modal = document.getElementById('vote-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    currentVotePlaceId = null;
}

/**
 * Cloud-Native Voting
 * Pushes votes to Firestore subcollections
 */
async function submitVote() {
    if (!currentVotePlaceId) return;
    const selected = document.querySelector('input[name="busyness-vote"]:checked');
    if (!selected) {
        alert("Please select an option.");
        return;
    }
    
    const voteType = selected.value; // 'busy' or 'not-busy'
    
    try {
        // Push to Firestore subcollection: venues/{placeId}/votes
        await db.collection('venues').doc(currentVotePlaceId).collection('votes').add({
            type: voteType,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(`✅ Vote submitted to cloud for ${currentVotePlaceId}`);
    } catch (error) {
        console.error("❌ Cloud vote failed:", error);
    }
    
    localStorage.setItem(`lastVoted_${currentVotePlaceId}`, Date.now().toString());
    const placeIdToUpdate = currentVotePlaceId;
    
    // Fallback local evaluation for immediate feedback
    evaluateBusyness(placeIdToUpdate);
    
    closeVoteModal();
    
    if (currentState.currentPage === 'detail' && currentState.selectedPlace === placeIdToUpdate) {
        renderDetail();
    }
    renderGrid('home-grid', filterData());
    if (window.lucide) lucide.createIcons();
}

function evaluateBusyness(placeId) {
    // Local evaluation remains for immediate responsive feedback
    const votes = JSON.parse(localStorage.getItem(`votes_${placeId}`) || '[]');
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    const recentBusyVotes = votes.filter(v => v.timestamp >= oneHourAgo && v.type === 'busy').length;
    
    const currentStatus = JSON.parse(localStorage.getItem(`placeStatus_${placeId}`) || 'null');
    let newStatus = null;
    
    if (recentBusyVotes >= 12) {
        newStatus = { status: 'red', timestamp: Date.now() };
    } else if (recentBusyVotes >= 8) {
        if (!currentStatus || currentStatus.status !== 'red' || (Date.now() - currentStatus.timestamp) >= 60 * 60 * 1000) {
            newStatus = { status: 'yellow', timestamp: Date.now() };
        }
    }
    
    if (newStatus) {
        localStorage.setItem(`placeStatus_${placeId}`, JSON.stringify(newStatus));
    }
}

// Safe Search Bar Login & Filtering
async function handleGlobalSearch(query, event) {
    if (event && event.type === 'keydown' && event.key !== 'Enter') return;
    if (event) event.preventDefault();
    
    const q = (query || '').toLowerCase().trim();
    if (!q) {
        // Reset search if empty
        const filtered = (currentState.places || []).filter(p => p.category !== 'supermarket');
        renderGrid('home-grid', filtered);
        return;
    }

    // 1. Super Admin Check
    if (q === 'miu-master-2026') {
        showToast('Welcome, Master!', 'success');
        sessionStorage.setItem('super-admin', 'true');
        setTimeout(() => window.location.href = 'super-admin.html', 800);
        return;
    }

    // 2. Vendor Login Check (Only on Enter or if it looks like a code)
    if (event && event.key === 'Enter') {
        try {
            console.log("🔑 Checking Firestore for Admin Auth...");
            // Task 4: Use .trim() and verify match
            const adminQuery = await db.collection('venues').where('adminPassword', '==', q).get();
            
            if (!adminQuery.empty) {
                const vendorDoc = adminQuery.docs[0];
                sessionStorage.setItem('currentVendorId', vendorDoc.id);
                showToast('Login successful! Redirecting...', 'success');
                setTimeout(() => window.location.href = 'admin.html', 1000);
                return;
            }

            // Fallback for legacy adminCode field
            const legacyQuery = await db.collection('venues').where('adminCode', '==', q).get();
            if (!legacyQuery.empty) {
                const vendorDoc = legacyQuery.docs[0];
                sessionStorage.setItem('currentVendorId', vendorDoc.id);
                showToast('Login successful!', 'success');
                setTimeout(() => window.location.href = 'admin.html', 1000);
                return;
            }
        } catch (err) {
            console.error("Auth check failed:", err);
        }
    }

    // 3. Normal Search Fallback (Filtering logic)
    console.log("🍔 Running standard food search for:", q);
    const filtered = (currentState.places || []).filter(p =>
        p.category !== 'supermarket' && (
            p.name.toLowerCase().includes(q) ||
            (p.category && p.category.toLowerCase().includes(q)) ||
            (p.menu || []).some(m => m.name.toLowerCase().includes(q))
        )
    );
    renderGrid('home-grid', filtered);
    if (window.lucide) lucide.createIcons();
}

function handleMenuSearch(query) {
    const q = (query || '').toLowerCase();
    const place = currentState.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;
    const filtered = (place.menu || []).filter(m => m.name.toLowerCase().includes(q));
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = filtered.map(item => renderMenuItem(item)).join('');
    }
}

function react(itemId, type, btnElement, event) {
    event.stopPropagation();
    if (!btnElement) return;
    
    const cooldownKey = `react_${itemId}_${type}`;
    const lastReacted = localStorage.getItem(cooldownKey);
    if (lastReacted && (Date.now() - parseInt(lastReacted)) < 60 * 60 * 1000) {
        btnElement.classList.add('shake-animation');
        setTimeout(() => btnElement.classList.remove('shake-animation'), 400);
        return;
    }
    
    const countSpan = document.getElementById(`count-${itemId}-${type}`);
    if (!countSpan) return;
    let count = parseInt(countSpan.innerText) || 0;
    count++;
    countSpan.innerText = count;
    
    localStorage.setItem(cooldownKey, Date.now().toString());
    btnElement.classList.add('reaction-disabled');
    btnElement.disabled = true;
    
    btnElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btnElement.style.transform = 'scale(1)';
    }, 200);
}

const DRINK_CATS = ['drinks', 'hot drinks', 'cold drinks', 'iced coffee', 'hot coffee',
    'frappe', 'smoothies', 'fresh juices', 'juice', 'milkshakes', 'ice coffee',
    'matcha', 'lemonattas', 'chillattas', 'bottles', 'coffee extras', 'flavors',
    'espresso capsules', 'house blend coffee', 'single origin coffee', 'hot / iced chocolate',
    'miscellaneous', 'tea', 'yogurt', 'mango mixes', 'diet mixes', 'vegetable juices'];

const SWEET_CATS = ['baked goods', 'special treats', 'doughnuts', 'danish', 'muffins',
    'cakes', 'brownies', 'tarts', 'croissants', 'desserts', 'zalabya',
    'chocolates', 'yogurt bowls', 'healthy & tasty', 'gluten free', 'snacks'];

function surpriseMe() {
    const s1 = document.getElementById('surprise-stage-1');
    const s2 = document.getElementById('surprise-stage-2');
    if (s1) s1.classList.remove('hidden');
    if (s2) s2.classList.add('hidden');
    
    const modal = document.getElementById('randomizerModal');
    if (modal) {
        const content = modal.querySelector('div');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Trigger animation
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            if (content) content.classList.remove('scale-95');
        }, 10);
    }
}

function surpriseBack() {
    const s1 = document.getElementById('surprise-stage-1');
    const s2 = document.getElementById('surprise-stage-2');
    if (s1) s1.classList.remove('hidden');
    if (s2) s2.classList.add('hidden');
}

function runSurprise(mode) {
    try {
        const allItems = currentState.places.flatMap(p =>
            (p.menu || [])
                .filter(m => !DRINK_CATS.includes((m.cat || '').toLowerCase()))
                .map(m => ({ ...m, placeId: p.id, placeName: p.name }))
        );

        let pool = [];
        if (mode === 'sweet') {
            pool = allItems.filter(m => SWEET_CATS.includes((m.cat || '').toLowerCase()));
        } else if (mode === 'savory') {
            pool = allItems.filter(m => !SWEET_CATS.includes((m.cat || '').toLowerCase()));
        } else {
            pool = allItems;
        }

        if (pool.length === 0) pool = allItems;

        const randomItem = pool[Math.floor(Math.random() * pool.length)];

        const message = document.getElementById('modal-message');
        const confirmBtn = document.getElementById('modal-confirm-btn');
        const icon = document.getElementById('modal-icon');

        const emoji = mode === 'sweet' ? '🍰' : mode === 'savory' ? '🌮' : '😋';
        if (icon) icon.innerText = emoji;
        if (message) message.innerHTML = `How about <b>"${randomItem.name}"</b> from <b>${randomItem.placeName}</b>?`;
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                closeModals();
                router.navigate('detail', { placeId: randomItem.placeId });
            };
        }

        const s1 = document.getElementById('surprise-stage-1');
        const s2 = document.getElementById('surprise-stage-2');
        if (s1) s1.classList.add('hidden');
        if (s2) s2.classList.remove('hidden');
    } catch (e) {
        console.error('Surprise error:', e);
    }
}

function closeModals() {
    // Legacy modals
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    
    // New Randomizer Modal
    const randomizer = document.getElementById('randomizerModal');
    if (randomizer && !randomizer.classList.contains('hidden')) {
        const content = randomizer.querySelector('div');
        randomizer.classList.add('opacity-0');
        if (content) content.classList.add('scale-95');
        setTimeout(() => {
            randomizer.classList.add('hidden');
            randomizer.classList.remove('flex');
        }, 300);
    }
}

function openBuildingModal() {
    const modal = document.getElementById('building-modal');
    if (modal) modal.classList.add('active');
}

function selectBuilding(building) {
    currentState.activeBuilding = building;
    currentState.activeCategory = 'all';
    router.navigate('home');
    setTimeout(() => {
        closeModals();
        renderGrid('home-grid', filterData());
        const section = document.getElementById('home-categories-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

function showQuickPeekDesktop(event, name, price, place, cat) {
    if (window.innerWidth <= 768) return;
    populateQuickPeek(name, price, place, cat);
    const modal = document.getElementById('quick-peek-modal');
    if (modal) modal.classList.add('active');
}

function openQuickPeekMobile(event, name, price, place, cat) {
    event.stopPropagation();
    if (window.innerWidth > 768) return;
    populateQuickPeek(name, price, place, cat);
    const modal = document.getElementById('quick-peek-modal');
    if (modal) modal.classList.add('active');
}

function closeQuickPeek() {
    const modal = document.getElementById('quick-peek-modal');
    if (modal) modal.classList.remove('active');
}

function populateQuickPeek(name, price, place, cat) {
    const content = document.getElementById('quick-peek-content');
    if (!content) return;
    content.innerHTML = `
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${name}</h3>
        <p style="opacity: 0.8; font-size: 14px; margin-bottom: 8px;"><strong>Place:</strong> ${place}</p>
        <p style="opacity: 0.8; font-size: 14px; margin-bottom: 12px;"><strong>Category:</strong> ${cat}</p>
        <div style="font-size: 18px; font-weight: 700; color: var(--primary-red);">LE ${price}</div>
    `;
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const topNav = document.querySelector('.top-nav');
    if (currentScrollY > 50) {
        if (topNav) topNav.classList.add('nav-scrolled');
    } else {
        if (topNav) topNav.classList.remove('nav-scrolled');
    }
});

function showError(msg) {
    const errDiv = document.createElement('div');
    errDiv.style.cssText = 'position:fixed; bottom:100px; left:20px; right:20px; background:rgba(255,0,0,0.9); color:white; padding:15px; border-radius:10px; z-index:9999; font-size:12px;';
    errDiv.innerHTML = `<b>Debug Note:</b> ${msg} <br><small>Click to dismiss</small>`;
    errDiv.onclick = () => errDiv.remove();
    document.body.appendChild(errDiv);
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
    showError(`${msg} [Line: ${lineNo}]`);
    return false;
};

/**
 * Initialize
 */
function init() {
    console.log('Initializing MIU Eats...');
    
    // Initial UI logic is now handled by the onSnapshot listener to prevent blank screens
    const homeFilters = document.querySelector('.home-filters');
    if (homeFilters) {
        if (localStorage.getItem('scrollHintShown')) {
            homeFilters.style.animation = 'none';
        } else {
            setTimeout(() => {
                localStorage.setItem('scrollHintShown', '1');
            }, 1400);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/**
 * Settings & Translation Logic
 */
let currentLang = localStorage.getItem('miu_lang') || 'en';

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    if (lang === 'ar') {
        document.body.classList.add('font-arabic');
    } else {
        document.body.classList.remove('font-arabic');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const val = translations[lang][key];
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else {
                const icon = el.querySelector('i[data-lucide]');
                if (icon) {
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + val));
                } else {
                    el.textContent = val;
                }
            }
        }
    });

    // Update Specific UI Elements
    const translateBtnText = document.getElementById('translate-btn-text');
    if (translateBtnText) {
        translateBtnText.innerText = lang === 'en' ? 'AR' : 'EN';
    }

    // Refresh Search Placeholder
    const mainSearch = document.querySelector('.top-nav .main-search');
    if (mainSearch && translations[lang]['searchPlaceholder']) {
        mainSearch.setAttribute('placeholder', translations[lang]['searchPlaceholder']);
    }

    if (window.lucide) lucide.createIcons();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('miu_lang', currentLang);
    applyTranslations(currentLang);
    router.updateUI();
}

function toggleSettingsMenu() {
    const popup = document.getElementById('settings-menu');
    if (popup) {
        popup.classList.toggle('active');
    }
}

// Ensure translations are applied on load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});



