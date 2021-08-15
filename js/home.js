'use strict';

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1; }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 9000);
}// Slogin slide show


//subscribe
let subform= document.getElementById('subform');
subform.addEventListener('submit', SubmitHandlerforRender);



function SubmitHandlerforRender(event) {
  event.preventDefault();
  if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(subform.emailText.value))
  {
    
    document.getElementById('alert').innerHTML='Thanks for subscribing';

  }

}








