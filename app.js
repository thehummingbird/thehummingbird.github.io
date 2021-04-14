const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('toggle')
    navLinks.classList.toggle('show')
});