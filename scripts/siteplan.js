// Year and Last Modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

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

