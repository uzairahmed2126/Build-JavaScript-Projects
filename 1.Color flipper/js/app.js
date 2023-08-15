const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const containerEl = document.querySelector('.container')
const colorEl = document.querySelector('.color')
const btnEl = document.getElementById('btn')


btnEl.addEventListener('click',()=>{
    document.body.style.background=colors.forEach((col)=>{
        colors[col]
    })
})
