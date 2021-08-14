'use strict';
// localStorage.clear();

let imgArray =['loss3.jpg',
'loss2.jpg',' loss4.jpg',
'loss6.jpg',' loss5.jpg',
'loss8.jpg',' loss7.jpg',
'loss9.jpg','index.jpg'];

 
let all=0;
let numberOfRound= 8;
let counter =0;

let sectionOfImg = document.getElementByID('sectionOfImg');
let leftSide = document.getElementByID('leftSide');
// let leftImg = document.getElementByClassName('');

function show(imgName, imgSrc) {
    this.imgName = imgName;
    this.image = imgSrc;
    this.shown=0;
        show.all.push(this);
}
show.all = [];

for (let i=0; i<imgArray.length;i++){
    new show(imgArray[i].split('.')[0],imgArray[i]);   
}

console.log(show.all);

let firstRandom;
let sndRandom;

function render(){
    firstRandom=random(0,imgArray.length-1);
    sndRandom=random(0,imgArray.length-1);
    
    console.log(firstRandom);
    console.log(sndRandom);

    leftSide.src='loss2.jpg';
    
    rightImg.src='../loss-wieght-media/' + show.all[sndRandom].image;

show.all[firstRandom].shown++;
show.all[sndRandom].shown++;
console.log(show.all)
}
render();

clickHere.addEventListener('click',handlerFunction);
function handlerFunction(event){
    if(((event.target.class)=== 'leftImg' || event.target.class === "rightImg")
    && counter < numberOfRound)
    {
        render();
        counter++;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
