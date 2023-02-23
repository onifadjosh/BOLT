const navMenu = document.querySelector('.navMenu');
const Hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar')
Hamburger.addEventListener('click', ()=>{
    Hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active');
});


// on scroll stivky nav
window.onscroll = function(){stickNav()};

var header = document.querySelector('#headnav');
var sticky = header.offsetTop;

function stickNav(){
    if (window.pageYOffset > sticky){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}
