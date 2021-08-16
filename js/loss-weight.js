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

const table = document.getElementById('userInfo');

let userInfo=getData();
let tbody = document.querySelector('tbody')
  let c ;
// function loaduser() {
//   const userInfo = JSON.parse(localStorage.getData('userInfo')) || [];
//   userInfo = new userInfo(user);
//   console.log(userInfo)
// }


function renderUser() {
 
  showUser();
}

function showUser() {
  
  for (let i= 0 ;i<userInfo.length ;i++){
  
  let tr = document.createElement('tr')
  tr.id = "row"+i;
  tbody.appendChild(tr)

    let td1= document.createElement('td')
    td1.textContent =userInfo[0].firstName;
    tr.appendChild(td1)

    let td2= document.createElement('td')
    td2.textContent =userInfo[0].lastName;
    tr.appendChild(td2);
   
    let td3= document.createElement('td')
    td3.textContent =userInfo[0].gender;
    tr.appendChild(td3);

    let td4= document.createElement('td')
    td4.textContent =userInfo[0].weight;
    tr.appendChild(td4);

    let td5= document.createElement('td')
    td5.textContent =userInfo[0].height;
    tr.appendChild(td5);
  }
}   

  // userInfo.saveToLocalStorage();
  
renderUser();
localStorage.removeItem("userInfo"); 
window.localStorage.clear();



let backButton=document.getElementById('back')
button.addEventListener('click', submitHandler)
function submitHandler(event) {
  event.preventDefault();
  console.log(event)
  // backBtn.setAttribute('click', "window.open('../html/journey.html')")
  window.location.replace("../html/journey.html");

};