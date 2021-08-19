'use strict';
let planArray = [
    'gainplan1.jpg',
    'gainplan2.jpg',
    'gainplan3.jpg',
    'gainplan4.jpg',
    'gainplan7.jpg',
    'gainplan8.jpg',
    'gainplan5.jpg'
]
let all = [];
let counter = 0;
// let numberOfRound =5;

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
    planImg.src = '../img/gain-wieght-media/gain-plan/' + show.all[imgRandom].image;
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
let userInfo;
if(localStorage.userData){

const table = document.getElementById('userInfo');
userInfo = JSON.parse(localStorage.userData)

// let userInfo=getData();

let tbody = document.querySelector('tbody')


function showUser() {
  
  for (let i= 0 ;i<userInfo.length;i++){
    
  let tr = document.createElement('tr')
  tr.id = "row"+i;
  tbody.appendChild(tr)

    let td1= document.createElement('td')
    td1.textContent =userInfo[i].firstName;
    tr.appendChild(td1)

    let td2= document.createElement('td')
    td2.textContent =userInfo[i].lastName;
    tr.appendChild(td2);
   
    let td3= document.createElement('td')
    td3.textContent = 'your Gender: '+ userInfo[i].gender;
    tr.appendChild(td3);

    let td4= document.createElement('td')
    td4.textContent ='Your Weight:  '+userInfo[i].weight;
    tr.appendChild(td4);

    let td5= document.createElement('td')
    td5.textContent ='and Height:  '+userInfo[i].height;
    tr.appendChild(td5);
  }
   localStorage.removeItem(userInfo);

}  showUser(); }

// localStorage.clear();

//   localStorage.removeItem(userInfo); 
//   window.localStorage.clear();