const menuBtn = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu__body");
const closeBtn = document.querySelector(".menu__close-btn");
const links = document.querySelectorAll(".menu__link");
const content = document.querySelector(".main");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("_active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("_active");
});

links.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("_active");
  });
});
content.addEventListener("click", () => {
  menu.classList.remove("_active");
});
