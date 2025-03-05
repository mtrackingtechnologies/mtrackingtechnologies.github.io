// WhatsApp
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the WhatsApp button
    const whatsappButton = document.getElementById('whatsapp-button');

    // Check if the button exists
    if (whatsappButton) {
        // Add an event listener for the button click
        whatsappButton.addEventListener('click', function() {
            // Push an event to the dataLayer
            window.dataLayer = window.dataLayer || []; // Ensure dataLayer is initialized
            window.dataLayer.push({
                event: 'whatsappClick',  // Custom event name
                eventCategory: 'WhatsApp Button',  // Event category
                eventAction: 'click',  // Event action
                eventLabel: 'WhatsApp Button clicked',  // Event label or description
                // You can add more properties if desired
            });

            console.log('WhatsApp click event sent to dataLayer');
        });
    }
});

// Year and Last Modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
//document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Mobile Menu Toggle (Accessibility)
document.getElementById("menu").addEventListener("click", function() {
    let nav = document.querySelector("nav ul");
    nav.classList.toggle("active");  // Toggle the 'active' class to show/hide the menu
    // Optionally, focus the first menu item for better keyboard navigation
    if (nav.classList.contains("active")) {
        let firstMenuItem = nav.querySelector("a");
        if (firstMenuItem) {
            firstMenuItem.focus();  // Focus on the first link in the menu for keyboard accessibility
        }
    } else {
        // Optionally, remove focus from the menu when closed
        document.getElementById("menu").focus();  // Return focus to the menu button for keyboard users
    }
});

// Store the number of reviews in localStorage
if (localStorage.getItem("reviews")) {
    let reviewsCount = parseInt(localStorage.getItem("reviews"));
    reviewsCount++;
    localStorage.setItem("reviews", reviewsCount);
} else {
    localStorage.setItem("reviews", 1); // First review
}

// Display the review count
document.addEventListener("DOMContentLoaded", function() {
    const reviewCount = localStorage.getItem("reviews") || 0;
    console.log("Total Reviews: " + reviewCount);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Submitted!');
});

// Get the menu button and navigation container
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

// Add click event to the menu button
menuButton.addEventListener('click', () => {
    // Toggle the "active" class on the navigation container
    nav.querySelector('ul').classList.toggle('active');
});

//button translate
//
const translateButton = document.getElementById('translateButton');

const languages = ['en', 'es', 'pt'];
let currentLangIndex = 0; 

// Función para traducir
const translatePage = async (language) => {
    try {
        // Call from API Google Translate (reemplazar 'YOUR_API_KEY' por tu propia clave)
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: document.body.innerText,
                target: language,
            }),
        });

        const data = await response.json();

        // Update
        document.body.innerText = data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error al traducir:', error);
    }
};

// Change
translateButton.addEventListener('click', () => {
    const newLang = languages[currentLangIndex];
    translatePage(newLang);
    // Next
    currentLangIndex = (currentLangIndex + 1) % languages.length;
});







