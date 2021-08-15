'use strict';

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-Finish');
});


let imgBeforeArray = [
  'story1-before.jpg',
  'story2-before.jpg',
  'story3-before.jpg',
  'story4-before.jpg',
  'story5-before.png'

];

let imgAfterArray = [
  'story1-after.png',
  'story2-after.png',
  'story3-after.png',
  'story4-after.png',
  'story5-after.png'

];


const imageSection = document.getElementById('imageSection');
let beforeImage = document.getElementById('beforeImage');
let afterImage = document.getElementById('afterImage');


function imgStory(story, imageSrc) {
  this.story = story;
  this.image = imageSrc;
  };

imgStory.all = [];


console.log(imgStory.all);


 function render() {

  for (let i = 0; i < imgBeforeArray.length; i++) {

    beforeImage.src = '../img/imgTherapy/' + this.image;

    afterImage.src = '../img/imgTherapy/' + this.image;
  }


};

this.render();

imageSection.addEventListener('click', clickHandler);
function clickHandler(e) {
  if ((e.target.id === 'beforeImage' || e.target.id === 'afterImage')) {
    this.render();

  }

}

