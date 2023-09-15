const questions = document.querySelectorAll('.question')
// const addBtn = document.querySelector('.question-btn')

questions.forEach((question) => {
    const btn= question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        question.classList.toggle('show-text')
    })
})