
let elClose = document.querySelector(".close")
let elTableList = document.querySelector(".modal-tablewrapper ")
let elWrapperModal = document.querySelector(".modal-overwrapper")
let elStory = document.querySelector(".storybtn")
let fatherBox = document.querySelector(".wrapper-child")
let tableBody = document.querySelector(".table-body")

let count = 0
let point = 20
const resalt = JSON.parse(localStorage.getItem('result')) || []

const constPoint = document.querySelector('.count')
constPoint.textContent =  `Coint: ${count}`
const images = document.querySelector(".profile-img");


const input = document.querySelector("input");

const yesAudio = new Audio("../audio/yes.mp3");
const noAudio = new Audio("../audio/nono.mp3");

input.addEventListener("change", updateImageDisplay);
let img
function updateImageDisplay() {
  const curFiles = input.files;
  img = URL.createObjectURL(curFiles[0])
  images.src = URL.createObjectURL(curFiles[0]);
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
// EN Array random
const arrayUZ = [];
function uzArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!arrayUZ.includes(arr[randomIndex])) {
      arrayUZ.push(arr[randomIndex]);
    } else {
      i--;
    }
  }
  
}

let user = localStorage.getItem("username")
if(!user) {
    modalLogin.classList.remove("modal-close");
}else{
    modalLogin.classList.add("modal-close");
}

// UZ Array random

const arrayEN = [];
function enArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!arrayEN.includes(arr[randomIndex])) {
      arrayEN.push(arr[randomIndex]);
    } else {
      i--;
    }
  }
}



//lavel

const lavelModal = document.querySelector('.modal-opac')
const btns1 = document.querySelector('.btns1')
const btns2 = document.querySelector('.btns2')
const btns3 = document.querySelector('.btns3')

btns1.addEventListener('click', function () {
  uzArray(beginner)
  enArray(beginner)
  addListUz(arrayUZ)
  addListEn(arrayEN)
  timet()
  lavelModal.classList.add("modal-close");
}) 
btns2.addEventListener('click', function () {
  uzArray(intermed)
  enArray(intermed)
  addListUz(arrayUZ)
  addListEn(arrayEN)
  timet()
  lavelModal.classList.add("modal-close");
})
btns3.addEventListener('click', function () {
  uzArray(upper)
  enArray(upper)
  addListUz(arrayUZ)
  addListEn(arrayEN)
  timet()
  lavelModal.classList.add("modal-close");
})


// UZ list chizish
const elListUZ = document.querySelector(".list-uz");
let listFrogmentUz = new DocumentFragment()

function addListUz(beginner) {
  elListUZ.innerHTML =""
  beginner.forEach(item => {
    let card = document.createElement("li")
    let cardtext = document.createElement("p")
    let check = document.createElement("div")
    
    check.classList.add("card-check")
    card.classList.add("card-item")
    cardtext.classList.add("caard-text")
    card.style.backgroundColor = item.uz_color
    cardtext.dataset.cardid = item.id
    cardtext.textContent = item.uz_title
    cardtext.style.color = item. uz_text_color
    card.appendChild(cardtext)
    card.appendChild(check)
    listFrogmentUz.appendChild(card)
  })
  elListUZ.appendChild(listFrogmentUz)
  
}


// EN list chizish
const elListEN = document.querySelector(".list-en");
let listFrogmentEn = new DocumentFragment()

function addListEn(beginner) {
  elListEN.innerHTML =""
  beginner.forEach(item => {
    let card = document.createElement("li")
    let cardtext = document.createElement("p")
    let check = document.createElement("div")

    check.classList.add("card-check")
    card.classList.add("card-item")
    cardtext.classList.add("caard-text")
    card.style.backgroundColor = item.eng_color
    cardtext.dataset.cardid = item.id
    cardtext.textContent = item.eng_title
    cardtext.style.color = item. eng_text_color
    card.appendChild(cardtext)
    card.appendChild(check)
    listFrogmentEn.appendChild(card)
  })
  elListEN.appendChild(listFrogmentEn)
  
}
addListEn(arrayEN)

// oyin boshlash


let xato = true
let yutuq = true
function yutishEn(list,id) {
  let listId
  list.addEventListener("click", (evt) => {
    if (evt.target.matches(".caard-text")) {
      listId = evt.target.dataset.cardid
      let check = evt.target.parentElement.childNodes[1];

 
      localStorage.setItem('listIdEN', listId)
      const uzId = localStorage.getItem('listIdUZ')


        
      if (listId === uzId) {
        for (let i = 0; i < 10; i++) {
          const uzCheck = elListUZ.childNodes[i].childNodes[0]
          if (uzCheck.dataset.cardid === listId) {
            const uzCheckBox = uzCheck.parentNode.childNodes[1]
            uzCheckBox.style.width = '100%'
            uzCheckBox.style.height = '100%'
            uzCheckBox.style.backgroundColor = '#21c62c8d'
          }
        }
        
        constPoint.textContent = `Coint: ${++count}`
        check.style.width = '100%'
        check.style.height = '100%'
        check.style.backgroundColor = '#21c62c8d'
        yesAudio.play()
        xato = false
        if (count == 10) {
          let obj = {
            count: count,
            timer: point
          }
          resalt.push(obj)
          localStorage.setItem('result', JSON.stringify(resalt))
          JSON.parse(localStorage.getItem('result')).forEach((item) => {
            tableBody.innerHTML = `       <tr >
                <td>${item.count}</td>
                <td>${item.point}</td>
              </tr>`
          })
           
          elTableList.classList.remove("none")
        }
        setTimeout(() => {
          xato = true
        }, 100)
      }
    }
      
      
  })

}
function yutishUz(list,id) {
  let listId
  list.addEventListener("click", (evt) => {
    if (evt.target.matches(".caard-text")) {
      listId = evt.target.dataset.cardid
      let check = evt.target.parentElement.childNodes[1];

 
      localStorage.setItem('listIdUZ', listId)
  
      const enId = localStorage.getItem('listIdEN')



      if (listId === enId) {
        for (let i = 0; i < 10; i++) {
          const uzCheck = elListEN.childNodes[i].childNodes[0]
          if (uzCheck.dataset.cardid === listId) {
            const uzCheckBox = uzCheck.parentNode.childNodes[1]

            uzCheckBox.style.width = '100%'
            uzCheckBox.style.height = '100%'
            uzCheckBox.style.backgroundColor = '#21c62c8d'
          }
        }
       
        constPoint.textContent = `Coint: ${++count}`
        check.style.width = '100%'
        check.style.height = '100%'
        check.style.backgroundColor = '#21c62c8d'
        yesAudio.play()
        if (count == 10) {
          let obj = {
            count: count,
            timer: point
          }
          resalt.push(obj)
          localStorage.setItem('result', JSON.stringify(resalt))
          resalt.forEach((item) => {
            tableBody.innerHTML = `       <tr >
              <td>${item.count}</td>
              <td>${item.point}</td>
            </tr>`
          })
            
          elTableList.classList.remove("none")
        }
      }
    }
  })
 
}

yutishUz(elListUZ,null)
yutishEn(elListEN, null)


const newItem = document.querySelector('.tim')
function timet() {
  let set = setInterval(() => {
    newItem.textContent = point--;
    if (point == 0) { 
      newItem.textContent = 0;
      clearInterval(set);
      elWrapperModal.classList.remove("none")
      let obj = {
        count: count,
        timer: '0'
      }
      resalt.push(obj)
      localStorage.setItem('result', JSON.stringify(resalt))
      console.log( JSON.parse(localStorage.getItem('result')));
      JSON.parse(localStorage.getItem('result')).forEach((item) => {
        tableBody.innerHTML = ` <tr >
        <td>${item.count}</td>
        <td>${item.point}</td>
      </tr>`
      })
    }
  }, 1000);
}
const goll = document.querySelector('.restartbtn')
elStory.addEventListener("click", (evt) => {
  elWrapperModal.classList.add("none")
  elTableList.classList.remove("none")
})
elClose.addEventListener("click", (evt) => {
  elTableList.classList.add("none")
})
goll.addEventListener("click", (evt) => {
  elWrapperModal.classList.add("none")
})
JSON.parse(localStorage.getItem('result')).forEach((item) => {
  tableBody.innerHTML = `       <tr >
  <td>${item.count}</td>
  <td>${item.point}</td>
</tr>`
})