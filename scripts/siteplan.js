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

// Mobile Menu Toggle (Accessibility)
document.getElementById("menu").addEventListener("click", function() {
    let nav = document.querySelector("nav ul");
    nav.classList.toggle("active");  
    if (nav.classList.contains("active")) {
        let firstMenuItem = nav.querySelector("a");
        if (firstMenuItem) {
            firstMenuItem.focus(); 
        }
    } else {
        document.getElementById("menu").focus(); 
    }
});

// Store the number of reviews in localStorage
if (localStorage.getItem("reviews")) {
    let reviewsCount = parseInt(localStorage.getItem("reviews"));
    reviewsCount++;
    localStorage.setItem("reviews", reviewsCount);
} else {
    localStorage.setItem("reviews", 1); 
}

// Display the review count
document.addEventListener("DOMContentLoaded", function() {
    const reviewCount = localStorage.getItem("reviews") || 0;
    console.log("Total Reviews: " + reviewCount);
});

//form submission and push to dataLayer
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission (optional)

    // Send event to dataLayer when form is submitted
    window.dataLayer = window.dataLayer || []; // Ensure dataLayer is initialized
    window.dataLayer.push({
        event: 'formSubmission',  // Custom event name
        eventCategory: 'Contact Form',  // Event category
        eventAction: 'submit',  // Event action
        eventLabel: 'Contact Form Submitted',  // Event label or description
        // Add form data or other information if needed, e.g.:
        formName: 'Contact Form',  // Example of additional data
    });

    console.log('Form submission event sent to dataLayer');
    alert('Form Submitted!'); 
});

// Get the menu button and navigation container
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

// Add click event to the menu button
menuButton.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('active');
});

// Button Translate
const translateButton = document.getElementById('translateButton');

const languages = ['en', 'es', 'pt'];
let currentLangIndex = 0; 

// Función para traducir
const translatePage = async (language) => {
    try {
        // Call from API Google Translate (replace 'YOUR_API_KEY' with your actual key)
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

        // Update the content with the translated text
        document.body.innerText = data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error while translating:', error);
    }
};

// Change language
translateButton.addEventListener('click', () => {
    const newLang = languages[currentLangIndex];
    translatePage(newLang);
    currentLangIndex = (currentLangIndex + 1) % languages.length;
});

//center button email and whatsapp
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('contact.html')) { 
        const whatsappButton = document.querySelector('.whatsapp-button');
        const emailButton = document.querySelector('.email-button');
        
        if (whatsappButton && emailButton) {
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'flex';  
            buttonsContainer.style.justifyContent = 'center';  
            buttonsContainer.style.alignItems = 'center';  
            buttonsContainer.style.gap = '10px'; 

            buttonsContainer.appendChild(whatsappButton);
            buttonsContainer.appendChild(emailButton);

           
            const contactSection = document.getElementById('contact');  /
            contactSection.appendChild(buttonsContainer);
        }
    }
});





