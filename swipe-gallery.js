const images = [
    "images/einstein-image-1.jpeg",
    "images/einstein-image-2.jpeg",
    "images/einstein-image-3.jpeg",
    "images/einstein-image-4.jpeg"
  ];

  let swipeCurrentIndex = 0;
  const imgElement = document.getElementById("active-image");
  const indicatorContainer = document.getElementById("image-indicator");

  let startX = null;

  // Create indicator bars
  images.forEach((_, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    if (index === swipeCurrentIndex) bar.classList.add("active");
    indicatorContainer.appendChild(bar);
  });

  function updateIndicator() {
    const bars = document.querySelectorAll(".image-indicator .bar");
    bars.forEach((bar, index) => {
      bar.classList.toggle("active", index === swipeCurrentIndex);
    });
  }

  function handleSwipe(deltaX) {
    if (Math.abs(deltaX) > 50) {
      swipeCurrentIndex = deltaX < 0
        ? (swipeCurrentIndex + 1) % images.length
        : (swipeCurrentIndex - 1 + images.length) % images.length;

      imgElement.style.opacity = 0;
      setTimeout(() => {
        imgElement.src = images[swipeCurrentIndex];
        imgElement.style.opacity = 1;
        updateIndicator();
      }, 200);
    }
  }

  // Desktop
  imgElement.addEventListener("dragstart", (e) => {
    const transparentImg = new Image();
    transparentImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9UqZlXgAAAAASUVORK5CYII=";
    e.dataTransfer.setDragImage(transparentImg, 0, 0);
    startX = e.clientX;
  });

  imgElement.addEventListener("dragend", (e) => {
    if (startX === null) return;
    handleSwipe(e.clientX - startX);
    startX = null;
  });

  // Mobile
  imgElement.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  imgElement.addEventListener("touchend", (e) => {
    if (startX === null) return;
    handleSwipe(e.changedTouches[0].clientX - startX);
    startX = null;
  });
