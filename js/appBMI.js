'use strict';

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-Finish');
});

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
  user.allUsers.push( this );
};

user.allUsers = [];
   
getData();
console.log(user.allUsers);




user.prototype.calculateBMI = function (weight, height) {
  /*      Formula: weight (kg) / [height (m)]2
   
         The formula for BMI is weight in kilograms divided by height in meters squared.
      If height has been measured in centimeters, divide by 100 to convert this to meters. */

  let heightinMeter = height / 100;
  this.valueBMI = Number(weight / Math.pow(heightinMeter, 2));
  return this.valueBMI;
};

user.prototype.render = function () {

  let articleElement = document.createElement('article');
  userProfile.appendChild(articleElement);


  let h1Element = document.createElement('h1');
  h1Element.textContent = 'Your BMI Result!';
  articleElement.appendChild(h1Element);

  /*
    BMI Categories:
          Underweight = <18.5
          Normal weight = 18.5–24.9
          Overweight = 25–29.9
          Obesity = BMI of 30 or greater

    */

  let h2Element = document.createElement('h2');
  h2Element.textContent = `Hello ${this.firstName.toUpperCase()} . your BMI is ${this.valueBMI}`;
  articleElement.appendChild(h2Element);

  let h6Element = document.createElement('h6');
  h6Element.textContent = `What Next? Take Action Towards Better Health! You can use your BMI result as a starting point for a healthy lifestyle.`;
  articleElement.appendChild(h6Element);

  this.checkBMIresult();

};


if(userForm) {
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

  console.log(typeof firstName, lastName, age, gender, weight, height);

  let newUser = new user(firstName, lastName, age, gender, weight, height, this.valueBMI);
  newUser.calculateBMI(weight, height);
  newUser.render();
    
  console.log(user.allUsers);
  localStorage.userData = JSON.stringify(user.allUsers);
  getData();
    
}

user.prototype.checkBMIresult = function(){

  console.log('hi form check');
  console.log(typeof this.valueBMI.toFixed(1));

  if(this.valueBMI.toFixed(1) <= 18.5){
     
    console.log('1stCondition');
    let h1stElement = document.createElement('h3');
    h1stElement.textContent = " Understanding your BMI result <br> You're in Underweight. <br>  Being underweight could be a sign you're not eating enough or you may be ill.";
    resultSec.appendChild(h1stElement);

    let gainweightBtn = document.createElement('input');
    gainweightBtn.setAttribute('type', 'button');
    gainweightBtn.setAttribute('value' , "Safe Gain Weight");
    gainweightBtn.setAttribute('onclick' , "window.open('./index.html')");
    resultSec.appendChild(gainweightBtn);


  }else if(this.valueBMI.toFixed(1) > 18.5 && this.valueBMI.toFixed(1) < 24.9){

    console.log('2ndCondition');

    let h2ndElement = document.createElement('h3');
    h2ndElement.textContent = " Understanding your BMI result: <br> congradulation! You're in Normal Weight. <br> Keep up the good work! For tips on maintaining a healthy weight, check out our healthly Tips Page";
    resultSec.appendChild(h2ndElement);

    let healthyTipsBtn = document.createElement('input');
    healthyTipsBtn.setAttribute('type' , 'button');
    healthyTipsBtn.setAttribute('value' , "healthy Tips");
    healthyTipsBtn.setAttribute('onclick' ," window.open('./index.html')");
    resultSec.appendChild(healthyTipsBtn);

  }else if(this.valueBMI.toFixed(1) > 25 && this.valueBMI.toFixed(1) < 29.9){
    console.log('3rdCondition');

    let h3rdElement = document.createElement('h3');
    h3rdElement.textContent = " Understanding your BMI result: <br> You're in OverWeight. <br> The best way to lose weight is through a combination of diet and exercise. for find the best plan press this button ";
    resultSec.appendChild(h3rdElement);

    let overWeightBtn = document.createElement('input');
    overWeightBtn.setAttribute('type','button');
    overWeightBtn.setAttribute('value' , "Weight Loss Support");
    overWeightBtn.setAttribute('onclick' , "window.open('./html/loss-wieght.html')");
    resultSec.appendChild(overWeightBtn);

  } else {
    console.log('grater than 30');

  }
  /*else if(this.valueBMI.toFixed(1) >= 30){

    }*/


}

function getData(){
  if(localStorage.userData){
    let data = JSON.parse(localStorage.userData);
    user.allUsers = data;
    console.log(data);
    //for(let i =0; i < data.length; i++){
    //let userNew =   new user(data[i].firstName, data[i].lastName, data[i].age, data[i].gender, data[i].weight, data[i].height, data[i].valueBMI);
    // user.allUsers.push(userNew);
    //return
    //}d
    return data
  }
}

//let userA = getData();

//console.log(userA);