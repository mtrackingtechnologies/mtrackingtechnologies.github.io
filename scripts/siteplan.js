//whatsapp
// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de WhatsApp
    const whatsappButton = document.getElementById('whatsapp-button');

    // Verificar si el botón existe
    if (whatsappButton) {
        // Añadir un event listener para el clic en el botón
        whatsappButton.addEventListener('click', function() {
            // Empujar un evento al dataLayer
            window.dataLayer = window.dataLayer || []; // Asegurarse de que dataLayer esté inicializado
            window.dataLayer.push({
                event: 'whatsappClick',  // Nombre del evento personalizado
                eventCategory: 'Botón WhatsApp',  // Categoría del evento
                eventAction: 'click',  // Acción del evento
                eventLabel: 'Botón WhatsApp clicado',  // Etiqueta o descripción
                // Puedes agregar más propiedades si lo deseas
            });

            console.log('Evento de clic en WhatsApp enviado al dataLayer');
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


