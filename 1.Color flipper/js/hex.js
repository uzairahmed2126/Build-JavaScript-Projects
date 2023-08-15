const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const containerEl = document.querySelector('.container')
const colorEl = document.querySelector('.color')
const btnEl = document.getElementById('btn')

btnEl.addEventListener('click', () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
    btnEl.style.backgroundColor += hex[getRandomNumber()]
  }
  colorEl.textContent = hexColor
  document.body.style.background = hexColor
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}
