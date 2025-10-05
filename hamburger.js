/** 
 * Initialize variables to reference the hamburger checkbox and navigation links 
 * */ 
let hamburgerCheckbox = document.getElementById("hamburger-checkbox");
let navLinks = document.getElementById("nav-links");
let navChildren = document.getElementsByClassName("header-links");


function toggleNavDisplay() {
  navLinks.style.display = hamburgerCheckbox.checked ? "flex" : "none";
}

hamburgerCheckbox.addEventListener("change", toggleNavDisplay);

Array.from(navChildren).forEach(link => {
  link.addEventListener("click", () => {
    if(navLinks.style.display && navLinks.style.display !== "none"){
      hamburgerCheckbox.checked = false;
      toggleNavDisplay();
    }
  });
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