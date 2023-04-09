
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
// UZ Array random
uzArray(beginner)
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
enArray(beginner)

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
    card.appendChild(cardtext)
    card.appendChild(check)
    listFrogmentUz.appendChild(card)
  })
  elListUZ.appendChild(listFrogmentUz)
  
}
addListUz(arrayUZ)

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
        if (id === listId) {

        }
        if (xato === true) {
          if (listId === uzId) {
            alert('urraaaaaaaa')
            for (let i = 0; i < 10; i++){
              const uzCheck = elListUZ.childNodes[i].childNodes[0]
              if (uzCheck.dataset.cardid === listId) {
                const uzCheckBox = uzCheck.parentNode.childNodes[1]
                console.log(uzCheckBox);
                uzCheckBox.style.width = '100%'
                uzCheckBox.style.height = '100%'
                uzCheckBox.style.backgroundColor = '#21c62c8d'
              }
            }
            check.style.width = '100%'
            check.style.height = '100%'
            check.style.backgroundColor = '#21c62c8d'
            xato = false
             setTimeout(() => {
                xato = true
             },100)
          } else {
            alert('uffffff')
            xato = false
            setTimeout(() => {
             xato = true
            },100)
          }
        }
      }
      
  })

}
function yutishUz(list,id) {
  let listId
  list.addEventListener("click", (evt) => {
      if (evt.target.matches(".caard-text")) {
         listId = evt.target.dataset.cardid
        let editinlist = evt.target.parentElement;
        let check = evt.target.parentElement.childNodes[1];


        localStorage.setItem('listIdUZ', listId)
  
        const enId = localStorage.getItem('listIdEN')
        if (id === listId) {

        }
        if(yutuq === true)
        if (listId === enId) {
          alert('urraaaaaaaa')
          for (let i = 0; i < 10; i++){
            const uzCheck = elListEN.childNodes[i].childNodes[0]
            if (uzCheck.dataset.cardid === listId) {
              const uzCheckBox = uzCheck.parentNode.childNodes[1]
              console.log(uzCheckBox);
              uzCheckBox.style.width = '100%'
              uzCheckBox.style.height = '100%'
              uzCheckBox.style.backgroundColor = '#21c62c8d'
            }
          }
          check.style.width = '100%'
          check.style.height = '100%'
          check.style.backgroundColor = '#21c62c8d'
          yutishUz(arrayUZ,elListUZ)
          yutuq = false
          setTimeout(() => {
            yutuq = true
          },100)
        } else {
          alert('uffffff')
          yutuq = false
          setTimeout(() => {
            yutuq = true
          },100)
        }
      }
      
  })
 
}

yutishUz(elListUZ,null)
yutishEn(elListEN,null)
