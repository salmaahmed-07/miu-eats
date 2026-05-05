const translations = {
  en: {
    home: "Home",
    settings: "Settings",
    translateBtn: "Translate to Arabic",
    themeBtn: "Theme Options",
    surpriseTitle: "Check this out!",
    cancel: "Cancel",
    back: "Back",
    checkIt: "Check it",
    heroTitle: "Find your next meal on campus",
    heroSubtitle: "Discover the best food spots around MIU university",
    surpriseMeBtn: "Surprise Me",
    nearMeBtn: "Near Me",
    exploreCat: "Explore Categories",
    allCat: "All",
    foodCat: "Food Spots",
    dessertCat: "Desserts",
    drinksCat: "Drinks",
    searchPlaceholder: "Search for food or places...",
    searchMenuPlaceholder: "Search menu items...",
    whereAreYou: "Where are you?",
    whereDesc: "Select your building to find nearby food",
    openNow: "Open now",
    closedMenu: "Closed",
    openMenu: "Open",
    adminPanel: "Admin Panel",
    viewSite: "View Site",
    pickAVibe: "Pick a vibe and we'll find something for you",
    sweet: "Sweet",
    savory: "Savory",
    random: "Random",
    busyState: "Force Busy State",
    addMenuItem: "Add New Menu Item",
    superAdminDashboard: "Super Admin Dashboard",
    totalVendors: "Total Vendors",
    manageVendorsDesc: "Centralized oversight for all university dining facilities",
    addVendor: "Add Vendor",
    editVendor: "Edit Vendor",
    deleteVendor: "Delete Vendor",
    spicyZingerPlaceholder: "e.g. Spicy Zinger",
    recentFilter: "Recent",
    itemsCount: "Items",
    visible: "Visible",
    hidden: "Hidden",
    logout: "Logout",
    confirmDelete: "Are you sure?",
    saveChanges: "Save Changes",
    totalItems: "Total Items",
    myCorner: "My Corner",
    editProfile: "Edit Profile",
    updateLogo: "Update Logo",
    updatePassword: "Update Password",
    saveProfile: "Save Profile",
    syncingData: "Syncing Data...",
    noResults: "No results found",
    restaurantName: "Restaurant Name",
    category: "Category",
    save: "Save",
    menu: "Menu",
    sortAZ: "A-Z (Name)",
    pharmacy: "Pharmacy",
    mainK: "Main & K",
    ns: "N & S",
    r: "R"
  },
  ar: {
    home: "الرئيسية",
    settings: "الإعدادات",
    translateBtn: "الترجمة إلى الإنجليزية",
    themeBtn: "مظهر التطبيق",
    surpriseTitle: "جرب هذا!",
    cancel: "إلغاء",
    back: "رجوع",
    checkIt: "شاهد",
    heroTitle: "ابحث عن وجبتك التالية في الحرم الجامعي",
    heroSubtitle: "اكتشف أفضل أماكن الطعام حول جامعة MIU",
    surpriseMeBtn: "فاجئني",
    nearMeBtn: "الأقرب لي",
    exploreCat: "تصفح الفئات",
    allCat: "الكل",
    foodCat: "أماكن الطعام",
    dessertCat: "حلويات",
    drinksCat: "مشروبات",
    searchPlaceholder: "ابحث عن طعام أو أماكن...",
    searchMenuPlaceholder: "ابحث في قائمة الطعام...",
    whereAreYou: "أين أنت؟",
    whereDesc: "اختر مبناك للعثور على طعام قريب",
    openNow: "مفتوح الآن",
    closedMenu: "مغلق",
    openMenu: "مفتوح",
    adminPanel: "لوحة الإدارة",
    viewSite: "مشاهدة الموقع",
    pickAVibe: "اختر حالة ومزاجاً وسنجد لك شيئاً",
    sweet: "حلويات",
    savory: "موالح",
    random: "عشوائي",
    busyState: "فرض حالة الانشغال",
    addMenuItem: "إضافة صنف جديد للمنيو",
    superAdminDashboard: "لوحة تحكم المشرف الرئيسي",
    totalVendors: "إجمالي البائعين",
    manageVendorsDesc: "إشراف مركزي على جميع مرافق الطعام في الجامعة",
    addVendor: "إضافة بائع",
    editVendor: "تعديل بائع",
    deleteVendor: "حذف بائع",
    spicyZingerPlaceholder: "مثال: زنجر حار",
    recentFilter: "الأحدث",
    itemsCount: "أصناف",
    visible: "ظاهر",
    hidden: "مخفي",
    logout: "تسجيل الخروج",
    confirmDelete: "هل أنت متأكد؟",
    saveChanges: "حفظ التغييرات",
    totalItems: "إجمالي الأصناف",
    myCorner: "ركنك الخاص",
    editProfile: "تعديل الملف الشخصي",
    updateLogo: "تحديث الشعار",
    updatePassword: "تحديث كلمة المرور",
    saveProfile: "حفظ الملف",
    syncingData: "جاري مزامنة البيانات...",
    noResults: "لم يتم العثور على نتائج",
    restaurantName: "اسم المطعم",
    category: "الفئة",
    save: "حفظ",
    menu: "المنيو",
    sortAZ: "أ-ي (الاسم)",
    pharmacy: "الصيدلة",
    mainK: "الرئيسي وK",
    ns: "N وS",
    r: "R"
  }
};

/**
 * Global Language Management
 */
function applyTranslations(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  
  // Font management for Arabic
  if (isArabic) {
    document.body.classList.add('font-arabic');
  } else {
    document.body.classList.remove('font-arabic');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const translation = translations[lang][key];
      
      // Support for Placeholders and Values
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
        if (el.type === 'button' || el.type === 'submit') {
          el.value = translation;
        }
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update specific UI labels if they exist
  const langText = document.getElementById('langText');
  if (langText) langText.textContent = isArabic ? 'EN' : 'AR';
}

function toggleLanguage() {
  const currentLang = localStorage.getItem('miu_lang') || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('miu_lang', newLang);
  applyTranslations(newLang);
  
  // Trigger UI updates in other scripts if they are listening
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

// Initial application
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('miu_lang') || 'en';
  applyTranslations(savedLang);
});