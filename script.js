const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuButton = document.querySelector(".play");
const first = document.querySelector(".first-slide");
const stopSlideshow = document.querySelector(".controls");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
    
  }
});

// ------------------ Slideshow ------------------

first.style.display = "none";

const audio = new Audio();
audio.preload = "auto";
audio.src = "img/HP.mp3";

menuButton.addEventListener("click", () => {
  audio.play();

  menuButton.style.color = "red";
  menuButton.style.fontSize = "40px";

  const slides = document.querySelectorAll("#slides .slide");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 2000);

  first.style.display = "block";
  stopSlideshow.style.display = "block";

  menuList.style.left = "1%";

  function nextSlide() {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "slide showing";
  }
});
