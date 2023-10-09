const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";



form.addEventListener("submit", addItem);

// clearBtn.addEventListener("click", clearItems);

// window.addEventListener("DOMContentLoaded", setupItems);




function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element =  document.createElement('article')
        
        alert.innerHTML = 'Item added to the list'
    } else if (value && editFlag) {
        alert.innerHTML = 'Editing'
    }
    else {
        displayAlert('Please enter value', 'danger')
    }
}

function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    setTimeout(()=>{
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    },1000)
}