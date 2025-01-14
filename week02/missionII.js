// Get the theme selector and body element
const themeSelector = document.getElementById('theme-selector');
const bodyElement = document.body;

// Set theme based on user selection
themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;

    // Remove any existing theme classes
    bodyElement.classList.remove('light', 'dark');

    // Add the selected theme class
    bodyElement.classList.add(selectedTheme);
});
