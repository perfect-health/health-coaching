'use strict';

// window.addEventListener('load', () => {
//   const preload = document.querySelector('.preload');
//   console.log(preload)
//   preload.classList.add('preload-Finish');
// });

const userForm = document.getElementById('userForm');
let userProfile = document.getElementById('userProfile');
let resultSec = document.getElementById('resultSec');



function user(firstName, lastName, age, gender, weight, height, valueBMI) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.height = height;
  this.valueBMI = valueBMI;
  user.allUsers.push(this);
}

user.allUsers = [];

// getData();
// console.log(getData())
console.log(user.allUsers);




user.prototype.calculateBMI = function (weight, height) {
  

  let heightinMeter = height / 100;
  this.valueBMI = Number(weight / Math.pow(heightinMeter, 2));
  return Math.floor(this.valueBMI);
};

user.prototype.render = function () {
  userProfile.innerHTML = '';

  let articleElement = document.createElement('article');
  userProfile.appendChild(articleElement);


  // let h1Element = document.createElement('h3');
  // h1Element.textContent = 'Your BMI Result!';
  // articleElement.appendChild(h1Element);

  

  let h2Element = document.createElement('h3');
  h2Element.textContent = `Hello ${this.firstName.toUpperCase()} ! Your BMI is ${Math.floor(this.valueBMI)}`;
  articleElement.appendChild(h2Element);

  let h6Element = document.createElement('h3');
  h6Element.textContent = 'What Next? Take Action Towards Better Health! You can use your BMI result as a starting point for a healthy lifestyle.';
  articleElement.appendChild(h6Element);

  this.checkBMIresult();

};


if (userForm) {
  userForm.addEventListener('submit', submitHandler);
}


function submitHandler(event) {
  event.preventDefault();
  let firstName = event.target.firstName.value;
  let lastName = event.target.lastName.value;
  let age = parseInt(event.target.age.value);
  let gender = event.target.gender.value;
  let weight = parseFloat(event.target.weight.value);
  let height = parseFloat(event.target.height.value);

  console.log( firstName, lastName, age, gender, weight, height);

  let newUser = new user(firstName, lastName, age, gender, weight, height, this.valueBMI);
  newUser.calculateBMI(weight, height);
  newUser.render();

  console.log(user.allUsers);
  localStorage.userData = JSON.stringify(user.allUsers);
  // getData();

}

user.prototype.checkBMIresult = function () {
  resultSec.innerHTML = '';
  console.log('hi form check');
  console.log(typeof this.valueBMI.toFixed(1));

  if (this.valueBMI.toFixed(1) <= 18.5) {

    console.log('1stCondition');
    let h1stElement = document.createElement('h3');
    h1stElement.textContent = ' Understanding your BMI result You\'re in Underweight. Being underweight could be a sign you\'re not eating enough or you may be ill.';
    resultSec.appendChild(h1stElement);

    let gainweightBtn = document.createElement('input');
    gainweightBtn.setAttribute('type', 'button');
    gainweightBtn.setAttribute('value', 'Safe Gain Weight');
    gainweightBtn.setAttribute('onclick', 'window.open(\'../html/gain-wieght.html\')');
    resultSec.appendChild(gainweightBtn);


  } else if (this.valueBMI.toFixed(1) > 18.5 && this.valueBMI.toFixed(1) < 24.9) {

    console.log('2ndCondition');

    let h2ndElement = document.createElement('h3');
    h2ndElement.textContent = ' Understanding your BMI result:congradulation! You\'re in Normal Weight.Keep up the good work! For tips on maintaining ';
    resultSec.appendChild(h2ndElement);
    let h2ndElement2 = document.createElement('h3');
    h2ndElement2.textContent = 'a healthy weight, check out our healthly Tips Page.';
    resultSec.appendChild(h2ndElement2);

    let healthyTipsBtn = document.createElement('input');
    healthyTipsBtn.setAttribute('type', 'button');
    healthyTipsBtn.setAttribute('value', 'Healthy Tips');
    healthyTipsBtn.setAttribute('onclick', ' window.open(\'../html/page2new.html\')');
    resultSec.appendChild(healthyTipsBtn);

  } else if (this.valueBMI.toFixed(1) > 25 && this.valueBMI.toFixed(1) < 29.9) {
    console.log('3rdCondition');

    let h3rdElement = document.createElement('h3');
    h3rdElement.textContent = ' Understanding your BMI result: You\'re in OverWeight.The best way to lose weight is through a combination of diet and exercise.';
    resultSec.appendChild(h3rdElement);
    let h3rdElement1 = document.createElement('h3');
    h3rdElement1.textContent = 'for find the best plan press this button. ';
    resultSec.appendChild(h3rdElement1);


    let overWeightBtn = document.createElement('input');
    overWeightBtn.setAttribute('type', 'button');
    overWeightBtn.setAttribute('value', 'Weight Loss Support');
    overWeightBtn.setAttribute('onclick', 'window.open(\'../html/loss-wieght.html\')');
    resultSec.appendChild(overWeightBtn);

  } else {
    console.log('grater than 30');

  }


};

function getData() {
  if (localStorage.userData) {
    let data = JSON.parse(localStorage.userData);
    user.allUsers = data;
    console.log(data);
    return data;
  }
}