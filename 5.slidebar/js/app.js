const closeBtn = document.querySelector('.fa-xmark')
const toggleBtn = document.querySelector('.toggle-btn')
const slideBar = document.querySelector('.show-slide-bar')
const slideConaitner =document.querySelector('.slide-container')
toggleBtn.addEventListener('click', () => {
    slideConaitner.classList.toggle('show-slide-bar')
})
closeBtn.addEventListener('click',()=>{
    slideConaitner.classList.toggle('show-slide-bar')
})