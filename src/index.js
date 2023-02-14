const navMenu = document.querySelector('.navMenu');
const Hamburger = document.querySelector('.hamburger');

Hamburger.addEventListener('click', ()=>{
    Hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

