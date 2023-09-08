// const btnEl = document.querySelector('.btn')
// const banner = document.querySelector('.banner')
// const modalOverlay = document.querySelector('.modal-overlay')
// const modalContainer = document.querySelector('.modal-container')
// const closeBtn = document.querySelector('.close-btn')
// const hero = document.querySelector('.hero')
// btnEl.addEventListener('click', () => {
//     document.body.classList.toggle('active')
//     banner.classList.toggle('open-modal')
//     modalOverlay.style.visibility = 'visible'
//     closeBtn.style.visibility = 'visible'
// })

// closeBtn.addEventListener('click',()=>{
//     modalOverlay.classList.toggle('modal-open')
//     modalOverlay.style.visibility = 'hidden'
//     closeBtn.style.visibility = 'hidden'
//     // hero.style.visibility='visible'
//     // document.body.style.background='black'
// })



// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});