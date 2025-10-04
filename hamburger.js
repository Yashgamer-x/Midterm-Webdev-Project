/** 
 * Initialize variables to reference the hamburger checkbox and navigation links 
 * */ 
let hamburgerCheckbox = document.getElementById("hamburger-checkbox");
let navLinks = document.getElementById("nav-links");


/**
 * Event listener to toggle navigation links on hamburger menu clicks
 * */ 
hamburgerCheckbox.addEventListener("change", function() {
    if (this.checked) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});

/**
 * Event listener to handle window resizing
 * Sets navigation links back to flex display if the window width exceeds 768px
 * Does not display navigation links initially if the window is resized below 768px
 */
window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
        hamburgerCheckbox.checked = false;
    } else {
        navLinks.style.display = "none";
    }  
});