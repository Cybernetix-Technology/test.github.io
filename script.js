"use strict";

const header = document.querySelector(".header-container");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

const menuBar = document.querySelector("#menu-bars");
const navContainer = document.querySelector(".nav-bar");
menuBar.onclick = () => {
  menuBar.classList.toggle("fa-times");
  navContainer.classList.toggle("active");
};

// const navContainer = document.querySelector(".nav-bar");
// navContainer.onclick = () => {
//   navContainer.classList.toggle("active");
// };
