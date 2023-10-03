const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const btnEl = document.querySelectorAll('.tab-btn')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btnEl.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active')
        articles.forEach((article) => {
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
})