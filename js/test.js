

let getname = document.getElementById('name');
let mark =0;

//  swal('hello','wwwwow','success')
let getq11 = document.getElementById('q11');
let getq12 = document.getElementById('q12');

let getq21 = document.getElementById('q21');
let getq22 = document.getElementById('q22');


let getq31 = document.getElementById('q31');
let getq32 = document.getElementById('q32');


let getq41 = document.getElementById('q41');
let getq42 = document.getElementById('q42');


let getq51 = document.getElementById('q51');
let getq52 = document.getElementById('q52');

// button = document.querySelector('button');
let resForm = document.getElementById('resForm');
resForm.addEventListener('submit', SubmitHandlerforRender)

function SubmitHandlerforRender(event) {
    event.preventDefault();
  if (mark >0){
    mark=0;
  }

  if (getq12.checked == true) {
    mark=mark+1;


  }
  if (getq21.checked == true) {
    mark=mark+1;
    console.log(mark);

  }

  if (getq31.checked == true) {
    mark=mark+1;
    console.log(mark);

  }

  if (getq42.checked == true) {
    mark=mark+1;
    console.log(mark);

  }

  if (getq51.checked == true) {
    mark=mark+1;
    console.log(mark);

  }

  let finalout = ' your grade is '+ mark;
  console.log(mark);
  if( mark >= 3){
    swal('hello',finalout,'success');

  }else{
    swal('hello',finalout,'error');

  }
};
// button.onclick = function(){alert('hello')}
