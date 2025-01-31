// Function to create the viewer template dynamically
function viewerTemplate(pic, alt) {
    return `
        <div class="viewer" id="viewer">
            <button class="close-viewer" onclick="closeViewer()">X</button>
            <img src="${pic}" alt="${alt}" class="modal-img">
        </div>`;
}

// Function to open the modal and display the clicked image
function viewHandler(event) {
    const picSrc = event.target.dataset.full; // Get the large version of the image from data-full attribute
    const altText = event.target.alt;

    // Check if the data-full attribute exists
    if (!picSrc) {
        console.error("No 'data-full' attribute found on the clicked image.");
        return;
    }

    // Create and display the modal with the large image
    const viewerHTML = viewerTemplate(picSrc, altText);
    document.body.insertAdjacentHTML('afterbegin', viewerHTML);

    // Show the modal
    const viewer = document.querySelector('.viewer');
    viewer.style.display = 'flex';

    // Add close button functionality
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

// Function to close the modal
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.style.display = 'none'; // Hide the modal
    viewer.remove(); // Remove the modal from the DOM
}

// Add event listener to the gallery to handle clicks on images
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
    // Check if the clicked element is an image
    if (event.target.tagName === 'IMG') {
        viewHandler(event);
    }
});

// Navigation Menu Toggle Functions

// Toggle the navigation menu when clicking on "Menu"
document.querySelector('.menu-text').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
