//Toggle navbar

const btn = document.querySelector(".menu");
const toggleRight = document.querySelector(".navbar-navigation-right");
const toggleLeft = document.querySelector(".navbar-navigation-left");
const lines = document.querySelector(".hamburger-menu");
//each line:
const line1 = document.querySelector(".menu-line-1");
const line2 = document.querySelector(".menu-line-2");
const line3 = document.querySelector(".menu-line-3");

btn.addEventListener("click", () => {
  toggleLeft.classList.toggle("navbar-navigation-left-click");
  toggleRight.classList.toggle("navbar-navigation-right-click");
  lines.classList.toggle("hamburger-menu-click");
  if (toggleLeft.classList.contains("navbar-navigation-left-click")) {
    line1.style.transform = "rotateZ(-40deg)";
    line3.style.transform = "rotateZ(40deg)";
    line2.style.opacity = "0";
  } else {
    line1.style.transform = "rotateZ(0)";
    line3.style.transform = "rotateZ(0)";
    line2.style.opacity = "1";
  }
});
