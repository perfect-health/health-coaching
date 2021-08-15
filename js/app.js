'use strict';

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
        labels: [],
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