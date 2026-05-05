(function () {
    // Immediate execution to prevent flash
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemDark);

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

window.themeManager = {
    toggle() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateIcons();
    },
    updateIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        const icons = [
            'themeToggle',
            'theme-icon-desktop',
            'theme-icon-popup',
            'theme-icon-mobile'
        ];

        icons.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                // If it's an <i> tag with lucide
                if (el.tagName === 'I' || el.tagName === 'SVG') {
                    el.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
                }
            }
        });

        if (window.lucide) lucide.createIcons();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.themeManager.updateIcons();
});
