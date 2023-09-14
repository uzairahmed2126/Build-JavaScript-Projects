const para = document.querySelector('.para')
const addBtn = document.querySelectorAll('.question-btn')

addBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question =  e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
        
    })
})