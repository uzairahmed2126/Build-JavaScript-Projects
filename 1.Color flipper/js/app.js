const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const containerEl = document.querySelector('.container')
const colorEl = document.querySelector('.color')
const btnEl = document.getElementById('btn')


btnEl.addEventListener('click',()=>{
    const randomNumber = getRandomNumber();
    document.body.style.background=colors[randomNumber]
    colorEl.textContent=colors[randomNumber]
})


const getRandomNumber =()=>{
    return Math.floor(Math.random()*colors.length)
}

