// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-5.jpeg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]

const review = document.querySelector('.review')

const randomBtn = document.querySelector('.random-btn')
const left = document.querySelector('.prev-btn')
const right = document.querySelector('.next-btn')
const fas = document.querySelectorAll('.fas')

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
  const item = reviews[currentItem]
  img.src = item.img
  author.innerText = item.name
  job.innerText = item.job
  info.innerText = item.text
})
// left & right
fas.forEach((element) => {
  element.addEventListener('click', (event) => {
    const style = event.currentTarget.classList
    if (style.contains('fa-chevron-left')) {
      const item = reviews[currentItem++]
      console.log(item)
      img.src = item.img
      author.innerText = item.name
      job.innerText = item.job
      info.innerText = item.text
    } else if (style.contains('fa-chevron-right')) {
      const item = reviews[currentItem++]
      console.log(item)
      img.src = item.img
      author.innerText = item.name
      job.innerText = item.job
      info.innerText = item.text
    }
  })
})

randomBtn.addEventListener('click', () => {
  const item = reviews[random()]
  img.src = item.img
  author.innerText = item.name
  job.innerText = item.job
  info.innerText = item.text
})
function random() {
  return Math.floor(Math.random() * reviews.length)
}
