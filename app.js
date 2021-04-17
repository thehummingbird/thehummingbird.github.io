const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const modalCvOpen = document.querySelector('.cvcard');
const modalCv = document.querySelector('.modalcv');
const modalCvbuttonClose = document.querySelector('.closecv');

const modalMrOpen = document.querySelector('.mrcard');
const modalMr = document.querySelector('.modalmr');
const modalMrbuttonClose = document.querySelector('.closemr');

const modalStOpen = document.querySelector('.stcard');
const modalSt = document.querySelector('.modalst');
const modalStbuttonClose = document.querySelector('.closest');

const modalPdOpen = document.querySelector('.pdcard');
const modalPd = document.querySelector('.modalpd');
const modalPdbuttonClose = document.querySelector('.closepd');

const modalContactOpen = document.querySelector('.contact');
const modalContact = document.querySelector('.modalcontact');
const modalContactbuttonClose = document.querySelector('.closecontact');



hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('toggle')
    navLinks.classList.toggle('show')
});


modalCvOpen.addEventListener('click',() =>{
    modalCv.classList.toggle('active')
})

modalCvbuttonClose.addEventListener('click', () =>{
    modalCv.classList.toggle('active')
})


modalMrOpen.addEventListener('click',() =>{
    modalMr.classList.toggle('active')
})

modalMrbuttonClose.addEventListener('click', () =>{
    modalMr.classList.toggle('active')
})


modalStOpen.addEventListener('click',() =>{
    modalSt.classList.toggle('active')
})

modalStbuttonClose.addEventListener('click', () =>{
    modalSt.classList.toggle('active')
})


modalPdOpen.addEventListener('click',() =>{
    modalPd.classList.toggle('active')
})

modalPdbuttonClose.addEventListener('click', () =>{
    modalPd.classList.toggle('active')
})

modalContactOpen.addEventListener('click',() =>{
    modalContact.classList.toggle('active')
})

modalContactbuttonClose.addEventListener('click', () =>{
    modalContact.classList.toggle('active')
})

