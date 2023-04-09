
const image = document.querySelector(".profile-img");


const input = document.querySelector("input");

input.addEventListener("change", updateImageDisplay);
let img
function updateImageDisplay() {
  const curFiles = input.files;
  img = URL.createObjectURL(curFiles[0])
  image.src = URL.createObjectURL(curFiles[0]);
}

const loginForm = document.querySelector('.login-box');
const modalLogin = document.querySelector(".modal-cont");
let elInput = document.querySelector(".username")

loginForm.addEventListener("submit", (evt) => {
evt.preventDefault();
let inputvalue = elInput.value;
console.log(inputvalue);
localStorage.setItem("username", inputvalue);
localStorage.setItem("image", img);
modalLogin.classList.add("modal-close");
})


