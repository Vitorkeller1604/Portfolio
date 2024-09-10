/*==================== MOSTRAR MENU EM DISPOSITIVO MOBILE ====================*/
const navMenu = document.getElementById('nav--menu'),
    navToggle = document.getElementById('nav--toggle'),
    navClose = document.getElementById('nav--close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav-show')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav-show')
    })
}

const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav--menu')
    navMenu.classList.remove('nav-show')
}

/*==================== ABRIR OS MODALS DA PÁGINA SERVIÇOS ====================*/
/*========== MODAL 1 ==========*/
const menuModal1 = document.getElementById('services--modal-1');
const botaoAbrirModal1 = document.getElementById('services--button-1');
const iconeFecharModal1 = document.getElementById('services--close-1');

if (botaoAbrirModal1) {
    botaoAbrirModal1.addEventListener('click', () => {
        menuModal1.classList.add('active-modal');
    });
}

if (iconeFecharModal1) {
    iconeFecharModal1.addEventListener('click', () => {
        menuModal1.classList.remove('active-modal');
    });
}

/*========== MODAL 2 ==========*/
const menuModal2 = document.getElementById('services--modal-2');
const botaoAbrirModal2 = document.getElementById('services--button-2');
const iconeFecharModal2 = document.getElementById('services--close-2');

if (botaoAbrirModal2) {
    botaoAbrirModal2.addEventListener('click', () => {
        menuModal2.classList.add('active-modal');
    });
}

if (iconeFecharModal2) {
    iconeFecharModal2.addEventListener('click', () => {
        menuModal2.classList.remove('active-modal');
    });
}

/*========== MODAL 3 ==========*/
const menuModal3 = document.getElementById('services--modal-3');
const botaoAbrirModal3 = document.getElementById('services--button-3');
const iconeFecharModal3 = document.getElementById('services--close-3');

if (botaoAbrirModal3) {
    botaoAbrirModal3.addEventListener('click', () => {
        menuModal3.classList.add('active-modal');
    });
}

if (iconeFecharModal3) {
    iconeFecharModal3.addEventListener('click', () => {
        menuModal3.classList.remove('active-modal');
    });
}

/*==================== OUTRA COISA ====================*/
window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
})

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
})