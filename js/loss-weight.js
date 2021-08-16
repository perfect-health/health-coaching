'use strict';
let planArray = [
    'plan1.jpg',
    'plan2.jpg',
    'plan3.jpg',
    'plan4.jpg',
    'plan5.jpg'
]
let all = [];
let counter = 0;
//  let numberOfRound =5;

let planButton = document.getElementById('planButton');
let planImg = document.getElementById('planImg');

function show(name, imageSrc) {
    this.name = name;
    this.image = imageSrc;
    this.shown = 0;
    show.all.push(this);
}
show.all = [];
for (let i = 0; i < planArray.length; i++) {
    new show(planArray[i].split('.')[0], planArray[i]);
}
console.log(show.all);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function render() {
    let imgRandom = random(0, planArray.length - 1);
    planImg.src = '../img/loss-wieght-media/plan/' + show.all[imgRandom].image;
    show.all[imgRandom].show++;
    console.log(show.all)
}

planButton.addEventListener('click', clicHandler);
function clicHandler(event) {
    event.preventDefault()
    if (counter < planArray.length) {
        render();
        counter++;
        console.log(event)
    }
}

getData();

const table = document.getElementById('userInfo');

let userInfo;
let tbody = document.querySelector('tbody')
  let c ;
function loaduser() {
  const userItems = JSON.parse(localStorage.getData('userInfo')) || [];
  userInfo = new userInfo(user);
  console.log(userInfo)
}


function renderUser() {
  loadUser();
  showUser();
}

function showUser() {
  
  for (let i= 0 ;i< cart.items.length ;i++){
  
  let tr = document.createElement('tr')
  tr.id = "row"+j
  tbody.appendChild(tr)
  
  let td= document.createElement('td')
  td.textContent =`remove `
  td.id ="delete"+i
  tr.appendChild(td)
  rem.push(td.id)
    let td1= document.createElement('td')
    td1.textContent =cart.items[i].product
    
    tr.appendChild(td1)
    let td2= document.createElement('td')
    td2.textContent =cart.items[i].quantity
    tr.appendChild(td2)
  }
}   

  userInfo.saveToLocalStorage();
  
renderUser();

// function removeItem(){  //deletes item from localStorage
//     var key = document.getElementById('removeKey').value;
//     localStorage.removeItem(key)
//     console.log("remove items");
// }