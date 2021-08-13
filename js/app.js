'use strict';



const userForm = document.getElementById('userForm');
let userProfile = document.getElementById('userProfile');


function user( firstName, lastName, age, gender, weight, height ) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.valueBMI = 0;
    this.all = [];
    //user.all.push(this);

};

//user.all = [];

console.log(user.all);

user.prototype.calculateBMI = function(weight, height){
 /*      Formula: weight (kg) / [height (m)]2

      The formula for BMI is weight in kilograms divided by height in meters squared.
   If height has been measured in centimeters, divide by 100 to convert this to meters. */

   let heightinMeter = height/100;
    this.valueBMI = Math.ceil(weight / Math.pow(heightinMeter, 2));
   //return valueBMI;
};

user.prototype.render = function(){

    let articleElement = document.createElement('article');
    userProfile.appendChild(articleElement);

    // You can use your BMI result as a starting point 
    //for further discussion with a GP about your weight and general health.
//Find out how you can lose weight and check out the Change4Life website for practical tips on staying healthy as a family.

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
   h6Element.textContent = 'What Next? Take Action Towards Better Health!';
   articleElement.appendChild(h6Element);


    if( this.valueBMI <= 18.5 ){


    } else if( this.valueBMI > 18.5 && this.valueBMI < 24.9) {

    } else if(this.valueBMI > 25 && this.valueBMI < 29.9){

    } else if(this.valueBMI >= 30){

    }
  



};



userForm.addEventListener('submit',submitHandler);

function submitHandler(event){
  event.preventDefault();
  let firstName = event.target.firstName.value;
  let lastName = event.target.lastName.value;
  let age = parseInt(event.target.age.value);
  let gender = event.target.gender.value;
  let weight = parseFloat(event.target.weight.value);
  let height = parseFloat(event.target.height.value);

  console.log (typeof firstName, lastName, age, gender, weight, height);

  let newUser = new user(firstName, lastName, age, gender, weight, height);
  newUser.calculateBMI(weight, height);
  newUser.render();
 }