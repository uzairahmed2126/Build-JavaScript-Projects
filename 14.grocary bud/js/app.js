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
    console.log(grocery.value)
}

