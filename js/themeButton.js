function applyLightTheme() {
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', '#f5f5f5');
    root.style.setProperty('--bg-secondary', '#e0e0e0');
    root.style.setProperty('--text-color', '#151515');
    root.style.setProperty('--accent-color', '#31511E');
    root.style.setProperty('--accent-hover', '#859F3D');
}

function applyDarkTheme() {
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', '#151515');
    root.style.setProperty('--bg-secondary', '#181C14');
    root.style.setProperty('--text-color', 'whitesmoke');
    root.style.setProperty('--accent-color', 'darkgoldenrod');
    root.style.setProperty('--accent-hover', 'gold');
}

function toggleTheme() {
    const root = document.documentElement;
    const isDark = getComputedStyle(root).getPropertyValue('--bg-primary').trim() === '#151515';
    
    if (isDark) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('nav ul button');
    if (themeButton) {
        // Remove the onclick attribute since we're adding the event listener here
        themeButton.removeAttribute('onclick');
        themeButton.addEventListener('click', toggleTheme);
    }
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyLightTheme();
    } else if (savedTheme === 'dark') {
        applyDarkTheme();
    } else {
        // Set default theme to dark if no preference is saved
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
});
