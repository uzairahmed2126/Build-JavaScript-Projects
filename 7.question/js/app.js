const para = document.querySelectorAll('.para')
const addBtn = document.querySelectorAll('.fa-square-plus')

addBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        para.forEach((e2)=>{
            const divEl = document.createElement('div')
            divEl.setAttribute('class','div-el')
            document.body.style.background='green'
            divEl.innerHTML='hey'
            divEl.appendChild(e.currentTarget)
        })
        console.log(e.currentTarget)
    })
})