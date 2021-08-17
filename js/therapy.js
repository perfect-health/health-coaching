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



let beforeImage = document.getElementById('beforeImage');
let afterImage = document.getElementById('afterImage');

/*function imgStory(story, imgBeforeArray, imgAfterArray) {
  this.story = story;
  this.beforeImageSrc = imgBeforeArray;
  this.afterImageSrc = imgAfterArray;
  };*/

let index = 0;

function showImgs() {

  beforeImage.src = `../img/imgTherapy/${imgBeforeArray[index]}`;
  afterImage.src = `../img/imgTherapy/${imgAfterArray[index]}`;

  index > 1 ? index = 0 : index++;


}



window.onload = function () {
  setInterval(showImgs, 2000);
};

const storyForm = document.getElementById('storyForm');
// storyForm.style.marginLeft = '70px';
let storiesProfile = document.getElementById('sharedStoriesSection');
// storiesProfile.style.marginLeft = '70px';

function story(userName, userStory) {
  this.userName = userName;
  this.userStory = userStory;
  story.allStories.push(this);

};

story.allStories = [];


let storedData = getData();

function showStory() {
  // let articleElement = document.createElement('article');
  // storiesProfile.appendChild(articleElement);

  storiesProfile.textContent = ' ';
  let h1Element = document.createElement('h1');
  h1Element.textContent = 'MOTIVATION STORIES!';
  h1Element.style.marginLeft = '170px';
  storiesProfile.appendChild(h1Element);

  let secElement = document.createElement('section');
  secElement.style.marginLeft = '10px';
  storiesProfile.appendChild(secElement);


  if (storedData) {
    for (let i = 0; i < storedData.length; i++) {

      // let userElement = document.createElement('h1');
      // userElement.textContent = i + 1;
      // userElement.style.color = 'blue';

      // secElement.appendChild(userElement);

      let userNameElement = document.createElement('h3');

      userNameElement.textContent = storedData[i].userName.toUpperCase();
      secElement.appendChild(userNameElement);


      let storyElement = document.createElement('p');
      storyElement.textContent = storedData[i].userStory;
      secElement.appendChild(storyElement);


    }
  }
}


showStory();
storyForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  let userStory = event.target.storyText.value;
  console.log(userStory);
  new story(userName, userStory);
  localStorage.storyData = JSON.stringify(story.allStories);
  showStory();
  console.log(story.allStories);


}
function getData() {
  if (localStorage.storyData) {
    let storyData = JSON.parse(localStorage.storyData);
    console.log(storyData);
    story.allStories = storyData;
    return storyData;
  }
}