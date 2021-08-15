
'use strict';
let planArray = [
    'plan1.jpg',
    'plan2.jpg',
    'plan3.jpg',
    'plan4.jpg',
    'plan5.jpg'
]
let all = [];
let counter = 0;
// let numberOfRound =5;

let planButton = document.getElementById('planButton');
let planImg = document.getElementById('planImg');

function show(name, imageSrc) {
    this.name = name;
    this.image = imageSrc;
    this.shown = 0;
    show.all.push(this);
}
show.all = [];
for (let i = 0; i < planArray.length; i++) {
    new show(planArray[i].split('.')[0], planArray[i]);
}
console.log(show.all);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function render() {
    let imgRandom = random(0, planArray.length - 1);
    planImg.src = '../loss-wieght-media/plan/' + show.all[imgRandom].image;
    show.all[imgRandom].show++;
    console.log(show.all)
}

planButton.addEventListener('click', clicHandler);
function clicHandler(event) {
    event.preventDefault()
    if (counter < planArray.length) {
        render();
        counter++;
        console.log(event)
    }
}


let getData;

let table = document.getElementById('cart');

let cart;

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

function renderCart() {
    loadCart();
    showCart();
}

let cartTable = document.getElementById('cart');
let tbody = table.childNodes;
console.log(tbody[0].childNodes);
let nodes = tbody.firstChild;

for (var i = 0; i < cart.items.length; i++) {
    tbody.removeChild(tbody.firstChild);
}

function showCart() {
    let tbody = document.getElementsByTagName('tbody');
    for (let i = 0; i < cart.items.length; i++) {

        let tr = document.createElement('tr');
        tr.setAttribute('id', i);
        tbody.appendChild(tr);

        let name = document.createElement('td');
        name.textContent = cart.items[i].quantity;
        tr.appendChild(name);

        let weight = document.createElement('td');
        weight.textContent = cart.items[i].product;
        tr.appendChild(weight);

        let gender = document.createElement('td');
        gender.textContent = cart.items[i].product;
        tr.appendChild(gender);
    }
}

// Save the cart back to local storage
localStorage.setItem('cart', JSON.stringify(cart.items));
renderCart();


