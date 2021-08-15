'use strict';
let data = getData();

let getUl = document.getElementById('ul');
for (let i = 0; i < data.length; i++) {

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

let countFemale = 0;
let countMale = 0;

console.log(data);
for (let i = 0; i < data.length; i++) {
  let first = data[i].gender;
  if (first === 'male') { countMale++; } else {
  countFemale++;
  }
}
//data[i].lastName, data[i].age, data[i].gender, data[i].weight, data[i].height, data[i].valueBMI);
// user.allUsers.push(userNew);

document.getElementById('button').addEventListener('click', viewChart);
function viewChart() {
  creatChart();
}
function creatChart() {
console.log();
  let valueBMI = [];
  for (let i = 0; i < data.length; i++) {

    valueBMI.push(data[i].valueBMI);

  }
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Female', 'Male'],
      datasets: [{
        label: '# of Users',
        data: [countFemale, countMale],
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
}
