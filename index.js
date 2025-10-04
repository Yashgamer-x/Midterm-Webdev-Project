let hamburgerCheckbox = document.getElementById("hamburger-checkbox");
let navLinks = document.getElementById("nav-links");

hamburgerCheckbox.addEventListener("change", function() {
    if (this.checked) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});