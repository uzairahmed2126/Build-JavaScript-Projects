const mp4Control = document.querySelector('.mp4-control')
const pauseEl = document.querySelector('.pause')
const playEl = document.querySelector('.play')
const loaded = document.body.addEventListener('load', fn)
const loadEl = document.querySelector('.load')
pauseEl.addEventListener('click', onpause);
playEl.addEventListener('click', onplay);

function onpause() {
    playEl.innerHTML = 'Play'
    playEl.style.cursor = 'pointer'
    playEl.style.background = '#fff'
    pauseEl.style.background = 'darkcyan'
    mp4Control.pause()
}
function onplay() {
    playEl.innerHTML = ''
    playEl.style.cursor = ''
    playEl.style.background = 'darkcyan'
    pauseEl.style.background = '#fff'
    mp4Control.play()
}
function fn() {
    loadEl.style.display = 'block'
}