/**
 * MIU Eats Data
 */
const DATA = {
    places: [
        {
            id: 'my-corner',
            name: 'My Corner',
            category: 'food',
            image: 'logos/mycorner-logo.jpg',
            buildings: ['MainK', 'Pharmacy'],
            openingHours: { open: 8, close: 17 },
            priceRange: 'LE 50–150',
            location: 'Building Main, Ground Floor',
            menu: [
                { id: 'mc1', name: 'Classic Burger', price: 85, cat: 'Sandwiches', reactions: { fire: 12, thumb: 5 } },
                { id: 'mc2', name: 'Chicken Wrap', price: 65, cat: 'Sandwiches', reactions: { fire: 8, thumb: 3 } },
                { id: 'mc3', name: 'Chocolate Crepe', price: 55, cat: 'Crepes', reactions: { fire: 20, thumb: 15 } },
                { id: 'mc4', name: 'Fresh Orange Juice', price: 35, cat: 'Beverages', reactions: { fire: 5, thumb: 10 } }
            ]
        },
        {
            id: 'r-to-go',
            name: 'R to Go',
            category: 'food',
            image: 'logos/RtoGo-logo.gif',
            buildings: ['MainK'],
            openingHours: { open: 9, close: 18 },
            priceRange: 'LE 40–100',
            location: 'Building R, Plaza',
            menu: [
                { id: 'rtg1', name: 'Chicken Shawarma', price: 55, cat: 'Meals', reactions: { fire: 45, thumb: 20 } },
                { id: 'rtg2', name: 'Beef Kofta', price: 75, cat: 'Meals', reactions: { fire: 15, thumb: 10 } },
                { id: 'rtg3', name: 'French Fries', price: 30, cat: 'Sides', reactions: { fire: 6, thumb: 8 } },
                { id: 'rtg4', name: 'Cola', price: 20, cat: 'Drinks', reactions: { fire: 2, thumb: 5 } }
            ]
        },
        {
            id: 'tbs',
            name: 'TBS',
            category: 'food',
            image: 'logos/tbs-logo.png',
            buildings: ['NS'],
            openingHours: { open: 7, close: 19 },
            priceRange: 'LE 30–80',
            location: 'Near Gate 1',
            menu: [
                { id: 'tbs1', name: 'Croissant Cheese', price: 40, cat: 'Bakery', reactions: { fire: 10, thumb: 12 } },
                { id: 'tbs2', name: 'Donut Glazed', price: 35, cat: 'Pastries', reactions: { fire: 30, thumb: 25 } },
                { id: 'tbs3', name: 'Cappuccino', price: 45, cat: 'Coffee', reactions: { fire: 5, thumb: 5 } }
            ]
        },
        {
            id: 'cinnabon',
            name: 'Cinnabon',
            category: 'dessert',
            image: 'logos/Cinnabon-logo.png',
            buildings: ['NS'],
            openingHours: { open: 10, close: 18 },
            priceRange: 'LE 50–120',
            location: 'Main Building Food Court',
            menu: [
                { id: 'cin1', name: 'Classic Roll', price: 85, cat: 'Rolls', reactions: { fire: 100, thumb: 80 } },
                { id: 'cin2', name: 'Minibon', price: 60, cat: 'Minibons', reactions: { fire: 40, thumb: 30 } },
                { id: 'cin3', name: 'Iced Latte', price: 55, cat: 'Coffee', reactions: { fire: 10, thumb: 12 } }
            ]
        },
        {
            id: 'metro',
            name: 'Mini Metro',
            category: 'supermarket',
            image: 'logos/metro-logo.png',
            buildings: ['Pharmacy', 'NS'],
            openingHours: { open: 8, close: 20 },
            priceRange: 'LE 10–300',
            location: 'Building S, Level 1',
            menu: [
                { id: 'm1', name: 'Potato Chips', price: 15, cat: 'Snacks', reactions: { fire: 5, thumb: 10 } },
                { id: 'm2', name: 'Milk 1L', price: 45, cat: 'Groceries', reactions: { fire: 2, thumb: 4 } },
                { id: 'm3', name: 'Mineral Water', price: 10, cat: 'Drinks', reactions: { fire: 1, thumb: 8 } }
            ]
        },
        {
            id: 'conita',
            name: 'Conitta',
            category: 'dessert',
            image: 'logos/conitta-logo.webp',
            buildings: ['MainK'],
            openingHours: { open: 8, close: 16 },
            priceRange: 'LE 60–120',
            location: 'Between Pharmacy & K',
            menu: [
                { id: 'con1', name: 'Pizza Cone Mix', price: 75, cat: 'Pizza Cones', reactions: { fire: 50, thumb: 30 } },
                { id: 'con2', name: 'Chicken Cone', price: 70, cat: 'Pizza Cones', reactions: { fire: 20, thumb: 10 } },
                { id: 'con3', name: 'Chocolate Cone', price: 55, cat: 'Desserts', reactions: { fire: 45, thumb: 20 } }
            ]
        },
        {
            id: 'sbarro',
            name: 'Sbarro',
            category: 'food',
            image: 'logos/sbarro-logo.png',
            buildings: ['R'],
            openingHours: { open: 10, close: 17 },
            priceRange: 'LE 80–200',
            location: 'Main Building Food Court',
            menu: [
                { id: 'sb1', name: 'NY Slice Pizza', price: 90, cat: 'Pizza', reactions: { fire: 30, thumb: 20 } },
                { id: 'sb2', name: 'Spaghetti Meatball', price: 110, cat: 'Pasta', reactions: { fire: 15, thumb: 10 } },
                { id: 'sb3', name: 'Caesar Salad', price: 75, cat: 'Salads', reactions: { fire: 10, thumb: 25 } }
            ]
        },
        {
            id: 'manoucheh',
            name: "Man'oucheh",
            category: 'food',
            image: 'logos/manoucheh-logo.png',
            buildings: ['MainK', 'Pharmacy'],
            openingHours: { open: 8, close: 16 },
            priceRange: 'LE 40–100',
            location: 'Building R Square',
            menu: [
                { id: 'man1', name: 'Zaatar Manoucheh', price: 45, cat: 'Manoucheh', reactions: { fire: 25, thumb: 15 } },
                { id: 'man2', name: 'Cheese Fatayer', price: 55, cat: 'Fatayer', reactions: { fire: 30, thumb: 20 } },
                { id: 'man3', name: 'Ayran', price: 25, cat: 'Drinks', reactions: { fire: 5, thumb: 10 } }
            ]
        },
        {
            id: 'gyro',
            name: 'Gyro',
            category: 'food',
            image: 'logos/gyro-logo.jpg',
            buildings: ['R'],
            openingHours: { open: 11, close: 18 },
            priceRange: 'LE 60–130',
            location: 'Building S Plaza',
            menu: [
                { id: 'gy1', name: 'Gyro Platter', price: 130, cat: 'Platters', reactions: { fire: 40, thumb: 25 } },
                { id: 'gy2', name: 'Chicken Gyro Wrap', price: 85, cat: 'Wraps', reactions: { fire: 35, thumb: 15 } },
                { id: 'gy3', name: 'Tzatziki Dip', price: 25, cat: 'Sides', reactions: { fire: 10, thumb: 12 } }
            ]
        },
        {
            id: 'farghaly',
            name: 'Farghaly',
            category: 'drinks',
            image: 'logos/farghaly-logo.png',
            buildings: ['NS'],
            openingHours: { open: 9, close: 19 },
            priceRange: 'LE 20–70',
            location: 'Main Building Entrance',
            menu: [
                { id: 'fg1', name: 'Mango Juice', price: 40, cat: 'Fresh Juices', reactions: { fire: 60, thumb: 40 } },
                { id: 'fg2', name: 'Strawberry Smoothy', price: 50, cat: 'Smoothies', reactions: { fire: 30, thumb: 20 } }
            ]
        },
        {
            id: 'batates-and-co',
            name: "Batates'N Zalabya",
            category: 'food',
            image: 'logos/batates-logo.png',
            buildings: ['NS', 'R'],
            openingHours: { open: 8, close: 17 },
            priceRange: 'LE 30–90',
            location: 'Building K Garden',
            menu: [
                { id: 'bt1', name: 'Mix Cheese Fries', price: 55, cat: 'Fries', reactions: { fire: 80, thumb: 50 } },
                { id: 'bt2', name: 'Zalabya 12 pcs', price: 45, cat: 'Zalabya', reactions: { fire: 60, thumb: 45 } },
                { id: 'bt3', name: 'Ranch Sauce', price: 10, cat: 'Dips', reactions: { fire: 5, thumb: 5 } }
            ]
        },
        {
            id: 'exmart',
            name: 'Ex Mart',
            category: 'supermarket',
            image: 'logos/ExMart-logo.png',
            buildings: ['R'],
            openingHours: { open: 8, close: 21 },
            priceRange: 'LE 5–250',
            location: 'Building N, Ground Floor',
            menu: [
                { id: 'ex1', name: 'Water 600ml', price: 10, cat: 'Beverages', reactions: { fire: 10, thumb: 15 } },
                { id: 'ex2', name: 'Notebook', price: 85, cat: 'Essentials', reactions: { fire: 2, thumb: 4 } },
                { id: 'ex3', name: 'Instant Noodles', price: 20, cat: 'Snacks', reactions: { fire: 25, thumb: 10 } }
            ]
        },
        {
            id: 'lafraise',
            name: 'La Fraise',
            category: 'supermarket',
            image: 'logos/lafraise-logo.jpg',
            buildings: ['Pharmacy', 'NS'],
            openingHours: { open: 10, close: 18 },
            priceRange: 'LE 40–130',
            location: 'Main Building, Upper Floor',
            menu: [
                { id: 'lf1', name: 'Strawberry Waffle', price: 95, cat: 'Waffles', reactions: { fire: 45, thumb: 30 } },
                { id: 'lf2', name: 'Nutella Crepe', price: 85, cat: 'Crepes', reactions: { fire: 40, thumb: 25 } },
                { id: 'lf3', name: 'Oreo Milkshake', price: 75, cat: 'Shakes', reactions: { fire: 35, thumb: 20 } }
            ]
        }
    ]
};

/**
 * State Management
 */
let currentState = {
    currentPage: 'home',
    activeCategory: 'all',
    activeBuilding: '',
    selectedPlace: null,
    history: ['home']
};

/**
 * Router & Navigation
 */
const router = {
    navigate(page, params = {}) {
        try {
            console.log(`Navigating to: ${page}`, params);
            currentState.currentPage = page;
            if (page === 'detail') {
                currentState.selectedPlace = params.placeId;
            }
            
            if (currentState.history[currentState.history.length - 1] !== page) {
                currentState.history.push(page);
            }

            this.updateUI();
            window.scrollTo(0, 0);
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
            currentState.history.pop();
            const prevPage = currentState.history[currentState.history.length - 1];
            currentState.currentPage = prevPage;
            this.updateUI();
        } else {
            this.goHome();
        }
    },

    updateUI() {
        try {
            // Toggle sections via display style for maximum compatibility
            document.querySelectorAll('.page-section').forEach(section => {
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(`page-${currentState.currentPage}`);
            if (activeSection) {
                activeSection.style.display = 'block';
                console.log(`Section shown: page-${currentState.currentPage}`);
            } else {
                console.error(`Page section not found: page-${currentState.currentPage}`);
                const homeSection = document.getElementById('page-home');
                if (homeSection) homeSection.style.display = 'block';
            }

            // Update nav styling
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.getAttribute('data-page') === currentState.currentPage) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Specific page logic
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
        
        const iconMobile = document.getElementById('theme-icon-mobile');
        const iconDesktop = document.getElementById('theme-icon-desktop');
        
        if (this.isDark) {
            if (iconMobile) iconMobile.setAttribute('data-lucide', 'sun');
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'moon');
        } else {
            if (iconMobile) iconMobile.setAttribute('data-lucide', 'moon');
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'sun');
        }
        if (window.lucide) lucide.createIcons();
    }
};

/**
 * Rendering Logic
 */
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container not found: ${containerId}`);
        return;
    }

    if (!items || items.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; opacity: 0.5;">No places found.</div>';
        return;
    }

    container.innerHTML = items.map(place => {
        const isOpen = checkIfOpen(place.openingHours);
        return `
            <div class="place-card" onclick="router.navigate('detail', { placeId: '${place.id}' })">
                <div class="logo-circle">
                    <img src="${place.image}" alt="${place.name}" class="place-img" onerror="this.src='logos/miu-logo.png'">
                </div>
                <div class="place-content">
                    <div class="place-header">
                        <h3 class="place-title">${place.name}</h3>
                        <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open' : 'Closed'}</span>
                    </div>
                    <div class="place-info" style="margin-bottom: 4px;">
                        <span>${place.location}</span>
                    </div>
                    <div class="price-range" style="font-size: 12px;">${place.priceRange}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderDetail() {
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    const container = document.getElementById('detail-content');
    if (!container) return;

    if (!place) {
        container.innerHTML = '<div style="padding: 40px; text-align: center;">Place not found.</div>';
        return;
    }

    const isOpen = checkIfOpen(place.openingHours);
    const menuCats = ['All', ...new Set(place.menu.map(m => m.cat || 'Other'))];

    container.innerHTML = `
        <div class="hero" style="text-align: left; padding-top: 0;">
            <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
                <div style="width: 100px; height: 100px; min-width: 100px; border-radius: 50%; background: #fdfdfd; border: 1px solid var(--nav-border); display: flex; align-items: center; justify-content: center; padding: 15px;">
                    <img src="${place.image}" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.src='logos/miu-logo.png'">
                </div>
                <div>
                    <h1 style="font-size: 28px;">${place.name}</h1>
                    <p style="opacity: 0.8; margin-bottom: 8px;">${place.category.toUpperCase()} • ${place.location}</p>
                    <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open now' : 'Closed'}</span>
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

            <div id="menu-items-list" style="margin-top: 16px;">
                ${place.menu.map(item => renderMenuItem(item)).join('')}
            </div>
        </div>
    `;
    if (window.lucide) lucide.createIcons();
}

function filterMenuByCategory(cat) {
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;

    document.querySelectorAll('#menu-category-filters .filter-chip').forEach(chip => {
        if (chip.getAttribute('data-menu-cat') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });

    const filtered = cat === 'All' ? place.menu : place.menu.filter(m => m.cat === cat);
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = filtered.map(item => renderMenuItem(item)).join('');
    }
}

function renderMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <div class="price-range">LE ${item.price}</div>
            </div>
            <div class="menu-item-actions">
                <div class="reactions">
                    <button class="reaction-btn" onclick="react('${item.id}', 'fire', event)">
                        🔥 <span class="reaction-count" id="count-${item.id}-fire">${item.reactions.fire}</span>
                    </button>
                    <button class="reaction-btn" onclick="react('${item.id}', 'thumb', event)">
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
    let filtered = DATA.places || [];
    if (currentState.activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentState.activeCategory);
    }
    if (currentState.activeBuilding) {
        filtered = filtered.filter(p => p.buildings.includes(currentState.activeBuilding));
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

function handleGlobalSearch(query) {
    const q = (query || '').toLowerCase();
    const filtered = (DATA.places || []).filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.menu || []).some(m => m.name.toLowerCase().includes(q))
    );
    renderGrid('home-grid', filtered);
    if (window.lucide) lucide.createIcons();
}

function handleMenuSearch(query) {
    const q = (query || '').toLowerCase();
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;
    const filtered = (place.menu || []).filter(m => m.name.toLowerCase().includes(q));
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = filtered.map(item => renderMenuItem(item)).join('');
    }
}

function react(itemId, type, event) {
    event.stopPropagation();
    const countSpan = document.getElementById(`count-${itemId}-${type}`);
    if (!countSpan) return;
    let count = parseInt(countSpan.innerText) || 0;
    count++;
    countSpan.innerText = count;
    countSpan.parentElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countSpan.parentElement.style.transform = 'scale(1)';
    }, 200);
}

function surpriseMe() {
    try {
        const allItems = DATA.places.flatMap(p => (p.menu || []).map(m => ({ ...m, placeId: p.id, placeName: p.name })));
        if (allItems.length === 0) return;
        
        const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
        const modal = document.getElementById('surprise-modal');
        const message = document.getElementById('modal-message');
        const confirmBtn = document.getElementById('modal-confirm-btn');
        
        if (message) message.innerHTML = `How about some <b>"${randomItem.name}"</b> from ${randomItem.placeName}?`;
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                closeModals();
                router.navigate('detail', { placeId: randomItem.placeId });
            };
        }
        if (modal) modal.classList.add('active');
    } catch (e) {
        console.error('Surprise Me error:', e);
    }
}

function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
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

/**
 * Error Reporting
 */
function showError(msg) {
    const errDiv = document.createElement('div');
    errDiv.style.cssText = 'position:fixed; bottom:100px; left:20px; right:20px; background:rgba(255,0,0,0.9); color:white; padding:15px; border-radius:10px; z-index:9999; font-size:12px;';
    errDiv.innerHTML = `<b>Debug Note:</b> ${msg} <br><small>Click to dismiss</small>`;
    errDiv.onclick = () => errDiv.remove();
    document.body.appendChild(errDiv);
}

window.onerror = function(msg, url, lineNo, columnNo, error) {
    showError(`${msg} [Line: ${lineNo}]`);
    return false;
};

/**
 * Initialize
 */
function init() {
    console.log('Initializing MIU Eats...');
    router.updateUI();
}

// Run immediately or on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
