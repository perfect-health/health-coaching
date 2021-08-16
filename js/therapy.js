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


 function showImgs() {

  for (let i = 0; i < imgBeforeArray.length; i++) {
    //img/imgTherapy/story1-after.png
    console.log( `../img/imgTherapy/${imgBeforeArray[i]}`);

    beforeImage.setAttribute( 'src' , `../img/imgTherapy/${imgBeforeArray[i]}`);

    afterImage.src = `../img/imgTherapy/${imgAfterArray[i]}`;
  }
  setTimeout( 'showImgs' , 2000); // 3sec

};



window.onload = function(){
  showImgs();
};

const storyForm =  document.getElementById('storyForm');
storyForm.style.marginLeft = '70px';
let storiesProfile = document.getElementById('sharedStoriesSection');
storiesProfile.style.marginLeft = '70px';

function story(userName, userStory){
  this.userName = userName;
  this.userStory = userStory;
  story.allStories.push(this);
 
};

story.allStories = [];


let storedData = getData();

function showStory(){
  let articleElement = document.createElement('article');
    storiesProfile.appendChild(articleElement);

    storiesProfile.textContent = ' ';
    let h1Element = document.createElement('h1');
    h1Element.textContent = 'MOTIVATION STORIES!';
    articleElement.appendChild(h1Element);

    let secElement = document.createElement('section');
    secElement.style.marginLeft = '55px';
    storiesProfile.appendChild(secElement);

  
  if(storedData){
    for(let i=0; i < storedData.length; i++){

      let userElement = document.createElement('h1');
      userElement.textContent = i+1;
      userElement.style.color = 'blue';
      
      secElement.appendChild(userElement);
  
      let userNameElement = document.createElement('h3');
      
      userNameElement.textContent = storedData[i].userName.toUpperCase();
      secElement.appendChild(userNameElement);
      
  
      let storyElement = document.createElement('p');
      storyElement.textContent =  storedData[i].userStory;
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

      /* submission time 
      document.ready(function(){
        storyForm.submit(function(){
            var text = document.getElementsByName('text')[0].value;
            var action = storyForm.action;
            action = action+"?date=" + new Date();
            alert(action);
        });
    });*/
   
      
}
function getData(){
  if(localStorage.storyData){
  let storyData = JSON.parse(localStorage.storyData);
  console.log(storyData);
   story.allStories = storyData;
   return storyData;
  }
}