const navMenu = document.querySelector('.navMenu');
const Hamburger = document.querySelector('.hamburger');

Hamburger.addEventListener('click', ()=>{
    Hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

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
