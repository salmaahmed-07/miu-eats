/**
 * Firebase Configuration & Initialization
 */
const firebaseConfig = {
  apiKey: "AIzaSyBWrDOKLEN2Ds12A2WMsa-pZTCqwCT_Pxk",
  authDomain: "miu-eats.firebaseapp.com",
  projectId: "miu-eats",
  storageBucket: "miu-eats.firebasestorage.app",
  messagingSenderId: "737079181171",
  appId: "1:737079181171:web:e6a7500006146fde1c8f06",
  measurementId: "G-450LQBBPXV"
};

// Initialize Firebase and Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/**
 * State Management
 */
let currentState = {
    places: [], // Hydrated by Firestore onSnapshot
    currentPage: 'home',
    activeCategory: 'all',
    activeBuilding: '',
    selectedPlace: null,
    history: ['home']
};

/**
 * Real-Time Hydration
 * Synchronizes local state with Firestore 'venues' collection
 */
db.collection('venues').onSnapshot(snapshot => {
    currentState.places = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(`Synced ${currentState.places.length} venues from Firestore.`);
    
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
                        section.classList.add('page-exit-down');
                        setTimeout(() => { 
                            section.style.display = 'none'; 
                            section.classList.remove('page-exit-down'); 
                        }, 400);
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
                
                if (currentState.currentPage === 'detail' && !isBack) {
                    activeSection.classList.add('page-enter-up');
                } else if (!wasStacked) {
                    const enterClass = isBack ? 'page-enter-left' : 'page-enter-right';
                    activeSection.classList.add(enterClass);
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
        return `
            <div class="place-card wow-card" style="--delay: ${staggerDelay}" onclick="router.navigate('detail', { placeId: '${place.id}' })">
                <div class="logo-circle skeleton" id="skeleton-logo-${place.id}">
                    <img src="${place.image}" alt="${place.name}" class="place-img" 
                         onload="document.getElementById('skeleton-logo-${place.id}').classList.remove('skeleton')" 
                         onerror="this.src='logos/miu-logo.png'; document.getElementById('skeleton-logo-${place.id}').classList.remove('skeleton')">
                </div>
                <div class="place-content">
                    <div class="place-header">
                        <h3 class="place-title">${place.name}</h3>
                        <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open' : 'Closed'}</span>
                    </div>
                    <div class="place-info" style="margin-bottom: 4px;">
                        ${getBusynessIndicator(place.id)}
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
        <div class="hero" style="text-align: left; padding-top: 0;">
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
                    <div style="opacity: 0.8; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                            <span>${place.category.toUpperCase()}</span> ${getBusynessIndicator(place.id)}
                        </div>
                        <div>
                            <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open now' : 'Closed'}</span>
                        </div>
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

            <div id="menu-items-list" style="margin-top: 16px;">
                ${((() => {
            const hr = new Date().getHours();
            const pizzaUnavailable = hr >= 13 || hr < 7;
            const sorted = [...place.menu].sort((a, b) => {
                const aDown = pizzaUnavailable && a.cat === 'Pizza' ? 1 : 0;
                const bDown = pizzaUnavailable && b.cat === 'Pizza' ? 1 : 0;
                return aDown - bDown;
            });
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

    const hr = new Date().getHours();
    const pizzaUnavailable = hr >= 13 || hr < 7;
    const filtered = cat === 'All' ? [...place.menu] : place.menu.filter(m => m.cat === cat);
    const sorted = filtered.sort((a, b) => {
        const aDown = pizzaUnavailable && a.cat === 'Pizza' ? 1 : 0;
        const bDown = pizzaUnavailable && b.cat === 'Pizza' ? 1 : 0;
        return aDown - bDown;
    });
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = sorted.map((item, index) => renderMenuItem(item, index)).join('');
    }
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
    let filtered = (currentState.places || []).filter(p => p.category !== 'supermarket');
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

function getBusynessIndicator(placeId) {
    // Note: Busyness indicators could also be hydrated from Firestore aggregates in future updates
    const statusData = JSON.parse(localStorage.getItem(`placeStatus_${placeId}`) || 'null');
    let activeStatus = 'green';
    
    if (statusData) {
        const elapsed = Date.now() - statusData.timestamp;
        if (statusData.status === 'red' && elapsed < 60 * 60 * 1000) {
            activeStatus = 'red';
        } else if (statusData.status === 'yellow' && elapsed < 30 * 60 * 1000) {
            activeStatus = 'yellow';
        }
    }
    
    let text, cssClass;
    if (activeStatus === 'red') {
        text = 'Busy';
        cssClass = 'status-red';
    } else if (activeStatus === 'yellow') {
        text = 'Bit Busy';
        cssClass = 'status-yellow';
    } else {
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

function handleGlobalSearch(query) {
    const q = (query || '').toLowerCase();
    const filtered = (currentState.places || []).filter(p =>
        p.category !== 'supermarket' && (
            p.name.toLowerCase().includes(q) ||
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
    if (s1) s1.style.display = 'block';
    if (s2) s2.style.display = 'none';
    const modal = document.getElementById('surprise-modal');
    if (modal) modal.classList.add('active');
}

function surpriseBack() {
    const s1 = document.getElementById('surprise-stage-1');
    const s2 = document.getElementById('surprise-stage-2');
    if (s1) s1.style.display = 'block';
    if (s2) s2.style.display = 'none';
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
        if (s1) s1.style.display = 'none';
        if (s2) s2.style.display = 'block';
    } catch (e) {
        console.error('Surprise error:', e);
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
let currentLang = 'en';

const i18nDict = {
    'en': {
        home: 'Home',
        settings: 'Settings',
        translateBtn: 'Translate to Arabic',
        themeBtn: 'Theme Options',
        surpriseTitle: 'Check this out!',
        cancel: 'Cancel',
        checkIt: 'Check it',
        heroTitle: 'Find your next meal on campus',
        heroSubtitle: 'Discover the best food spots around MIU university',
        surpriseMeBtn: ' Surprise Me',
        nearMeBtn: ' Near Me',
        exploreCat: 'Explore Categories',
        allCat: 'All',
        foodCat: 'Food Spots',
        dessertCat: 'Desserts',
        drinksCat: 'Drinks',
        searchPlaceholder: 'Search for food or places...',
        searchMenuPlaceholder: 'Search menu items...',
        whereAreYou: 'Where are you?',
        whereDesc: 'Select your building to find nearby food',
        openNow: 'Open now',
        closedMenu: 'Closed',
        openMenu: 'Open',
        back: ' Back'
    },
    'ar': {
        home: 'الرئيسية',
        settings: 'الإعدادات',
        translateBtn: 'الترجمة إلى الإنجليزية',
        themeBtn: 'مظهر التطبيق',
        surpriseTitle: 'جرب هذا!',
        cancel: 'إلغاء',
        checkIt: 'شاهد',
        heroTitle: 'اعثر على وجبتك القادمة في الحرم الجامعي',
        heroSubtitle: 'اكتشف أفضل أماكن الطعام حول جامعة MIU',
        surpriseMeBtn: ' فاجئني',
        nearMeBtn: ' بالقرب مني',
        exploreCat: 'تصفح الفئات',
        allCat: 'الكل',
        foodCat: 'أماكن الطعام',
        dessertCat: 'حلويات',
        drinksCat: 'مشروبات',
        searchPlaceholder: 'ابحث عن طعام أو أماكن...',
        searchMenuPlaceholder: 'ابحث في قائمة الطعام...',
        whereAreYou: 'أين أنت؟',
        whereDesc: 'اختر مبناك للعثور على طعام قريب',
        openNow: 'مفتوح الآن',
        closedMenu: 'مغلق',
        openMenu: 'مفتوح',
        back: ' رجوع'
    }
};

function toggleSettingsMenu() {
    const popup = document.getElementById('settings-menu');
    if (popup) {
        popup.classList.toggle('active');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateTranslations();
    router.updateUI();
}

function tr(key) {
    return i18nDict[currentLang][key] || key;
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nDict[currentLang][key]) {
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + i18nDict[currentLang][key]));
            } else {
                el.innerText = i18nDict[currentLang][key];
            }
        }
    });

    const mainSearch = document.querySelector('.top-nav .main-search');
    if (mainSearch) mainSearch.setAttribute('placeholder', tr('searchPlaceholder'));

    const titles = document.querySelectorAll('.hero h1');
    if (titles.length > 0 && currentState.currentPage === 'home') {
        titles[0].innerText = tr('heroTitle');
        const sub = titles[0].nextElementSibling;
        if (sub) sub.innerText = tr('heroSubtitle');

        const surpriseBtn = document.querySelector('.hero .btn-surprise:not([style])');
        if (surpriseBtn) {
            surpriseBtn.innerHTML = '<i data-lucide="sparkles"></i>' + tr('surpriseMeBtn');
        }
        const nearMeBtn = document.querySelector('.hero .btn-surprise[style]');
        if (nearMeBtn) {
            nearMeBtn.innerHTML = '<i data-lucide="map-pin"></i>' + tr('nearMeBtn');
        }
    }

    const catTitle = document.querySelector('#home-categories-section h3');
    if (catTitle) catTitle.innerText = tr('exploreCat');

    const catFilters = document.querySelectorAll('#home-categories-section .filter-chip');
    if (catFilters.length >= 4) {
        catFilters[0].innerText = tr('allCat');
        catFilters[1].innerText = tr('foodCat');
        catFilters[2].innerText = tr('dessertCat');
        catFilters[3].innerText = tr('drinksCat');
    }

    const modalTitle = document.querySelector('#building-modal .modal-title');
    if (modalTitle) modalTitle.innerText = tr('whereAreYou');
    const modalDesc = document.querySelector('#building-modal .modal-text');
    if (modalDesc) modalDesc.innerText = tr('whereDesc');

    if (window.lucide) lucide.createIcons();
}

const originalUpdateUI = router.updateUI;
router.updateUI = function () {
    originalUpdateUI.call(router);
    setTimeout(updateTranslations, 50);
};

document.addEventListener('DOMContentLoaded', () => { setTimeout(updateTranslations, 100); });
