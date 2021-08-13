'use strict';
// localStorage.clear();

let arrayImg =['loss3.jpg',
'loss2.jpg',' loss4.jpg',
'loss6.jpg',' loss5.jpg',
'loss8.jpg',' loss7.jpg',
'loss9.jpg','index.jpg'];

 
let sectionOfImg = document.getElementsByClassName('sectionOfImg');
let rightImg = document.getElementsById('rightSide');
let leftImg = document.getElementsById('leftSide');

function show(imgName, imgSrc) {
    this.imgName = imgName;
    this.imgSrc = imgSrc;
    this.shown=0;
        show.all.push(this);
}
let all=0;
show.all = [];
for (let i=0; i<arrayImg.length;i++){
    new show(arrayImg[i].split('.')[0],arrayImg[i]);   
}
console.log(show.all);


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let firstRandom;
let sndRandom;

function render(){
    firstRandom=random(0,arrayImg.length-1);
    sndRandom=random(0,arrayImg.length-1);
    
    console.log(firstRandom);
    console.log(sndRandom);
    leftImg.src='./loss-wieght-media/' + show.all[firstRandom].imgSrc;
    rightImg.src='./loss-wieght-media/' + show.all[sndRandom].imgSrc;

show.all[firstRandom].shown++;
show.all[sndRandom].shown++;
console.log(show.all)
}
render();


clickHere.addEventListener('click',handlerFunction);
function handlerFunction(event){
    if((event.target.class)=== 'leftImg' || event.target.class === "rightImg")
    {
        render();
    }
}