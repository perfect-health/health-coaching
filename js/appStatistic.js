'use strict';
getData();
(data[i].lastName, data[i].age, data[i].gender, data[i].weight, data[i].height, data[i].valueBMI)

let getUl = document.getElementById('ul');
for(let i =0; i < 7; i++){
    
  let createLi = document.createElement('li');
  createLi.textContent = data[i].lastName;
  getUl.appendChild(createLi);

  createLi = document.createElement('li');
  createLi.textContent = data[i].age;
  getUl.appendChild(createLi);

  createLi = document.createElement('li');
  createLi.textContent = data[i].gender;
  getUl.appendChild(createLi);

  createLi = document.createElement('li');
  createLi.textContent = data[i].weight;
  getUl.appendChild(createLi);

  createLi = document.createElement('li');
  createLi.textContent = data[i].height;
  getUl.appendChild(createLi);

  createLi = document.createElement('li');
  createLi.textContent = data[i].valueBMI;
  getUl.appendChild(createLi);
}
getData();
let countFemale = 0;
let countMale = 0;

console.log(data);
for(let i =0; i < data.length; i++){
  let first =   data[i].gender;
  if (gender=== male) {countMale++}else{
      if (gender=== female) {countFemale++}
  }
  countFemale = 0;
countMale = 0;
   data[i].lastName, data[i].age, data[i].gender, data[i].weight, data[i].height, data[i].valueBMI);
  // user.allUsers.push(userNew);

result.addEventListener( 'button', viewChart );
function viewChart() {
    creatChart();
}
function creatChart() {
  
  let valueBMI = [];
  for ( let i = 0; i < localStorage.allUsers.length; i++ ) {
   
    valueBMI.push( localStorage.allUsers[i].valueBMI );
    
  }
  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [countFemale, countMale],
        datasets: [{
            label: '# of Users',
            data: [valueBMI],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});