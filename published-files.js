/** 
 * Initialize variables to reference the publication files container, left-button, and right-button
 * */ 
let currentIndex=0;
let files = document.querySelector(".publication-files-container").children;
let leftButton = document.getElementById("left-button");
let rightButton = document.getElementById("right-button");

leftButton.addEventListener("click", function(){
    files[currentIndex].classList.add("display-none");
    currentIndex = (currentIndex - 1 + files.length) % files.length;
    files[currentIndex].classList.remove("display-none");
});

rightButton.addEventListener("click", function(){
    files[currentIndex].classList.add("display-none");
    currentIndex = (currentIndex + 1) % files.length;
    files[currentIndex].classList.remove("display-none");
});
