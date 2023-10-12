const menu = ["./images/item-1.jpeg", "./images/item-2.jpeg", "./images/item-3.jpeg", "./images/item-4.jpeg", "./images/item-5.jpeg", "./images/item-6.jpeg", "./images/item-7.jpeg", "./images/item-8.jpeg", "./images/item-9.jpeg", "./images/item-10.jpeg",];

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imgs = document.querySelector('.imgs')
let counter = document.querySelector('.counter')
let counterVal = 0
imgs.src = menu[counterVal];
counter.innerHTML = (counterVal + 1) + '.';

// Events
next.addEventListener('click', imageChanger)
prev.addEventListener('click', prevImage)

function imageChanger() {
    if (counterVal < menu.length - 1) {
        counterVal++;
        imgs.src = menu[counterVal];
        counter.innerHTML = (counterVal + 1) + '.';

        prev.classList.remove('prev');
    }

    if (counterVal === menu.length - 1) {
        next.classList.add('prev');
    }
    if (counterVal > 0) {
        prev.classList.remove('prev');
    }
}

function prevImage() {
    if (counterVal > 0) {
        counterVal--;
        imgs.src = menu[counterVal];
        counter.innerHTML = (counterVal + 1) + '.';
        next.classList.remove('prev');
    }

    if (counterVal === 0) {
        prev.classList.add('prev');
    }
    if (counterVal < menu.length - 1) {
        next.classList.remove('prev');
    }
}

