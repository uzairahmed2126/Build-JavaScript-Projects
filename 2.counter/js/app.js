const value = document.getElementById('value')
const decreaseEl = document.querySelector('.decrease')
const increaseEl = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const btns = document.querySelectorAll('.btn')
let count = 0
// decreaseEl.addEventListener('click',()=>{
//     value.style.color='red'
//     value.innerText -= count+1
// })

// reset.addEventListener('click',()=>{
//     value.innerText = 0
//     value.style.color='#222222'
// })

// increaseEl.addEventListener('click',()=>{
//     value.style.color='green'
//     value.innerText += count+1
// })

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList
    if (style.contains('decrease')) {
      value.style.color = 'red'
      count--
    } else if (style.contains('reset')) {
      count = 0
      value.style.color = '#222222'
    } else if (style.contains('increase')) {
      value.style.color = 'green'
      count++
    }
    value.textContent = count
  })
})
