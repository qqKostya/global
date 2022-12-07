const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
burgerBtn.onclick = () => {
    menu.classList.toggle("header__nav--open");
};