const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
document.addEventListener("scroll", () => {
  const video = document.getElementById("background-video");
  video.playbackRate = 3; // Speed up the video
  setTimeout(() => {
    video.playbackRate = 1; // Reset to normal speed after 5 seconds
  }, 5000);
});
