

const menuToggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu__body');

menuToggler.addEventListener("click", function (e) {
    menuToggler.classList.toggle('_active');
    menu.classList.toggle('_active');
});

const menuItems = document.querySelectorAll('.menu__item');

// for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].addEventListener("click", () => {
//         menu.classList.remove('_active');
//         menuToggler.classList.remove('_active');
//     })
// };
