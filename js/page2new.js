

// let getWight = document.getElementById('wight').value;
let getclculate = document.getElementById('event');
getclculate.addEventListener('submit', SubmitHandlerforRender);

function SubmitHandlerforRender(event) {

  event.preventDefault();
  let wight = event.target.wight.value;
  let final = ((wight * 30) / 1000).toFixed(1);
  console.log(final);
  let getele = document.getElementById('result');
  getele.textContent = final + ' Your need of water ';
  getele.setAttribute('color','blue');
}
