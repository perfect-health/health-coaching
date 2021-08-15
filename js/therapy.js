'use strict';

window.addEventListener('load', () => {
const preload = document.querySelector('.preload');
preload.classList.add('preload-Finish');
});


let imgArray = [
    'pablo-merchan-montes-MXovqM130UI-unsplash.jpg',
    'anna-pelzer-IGfIGP5ONV0-unsplash.jpg',
    'anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg',
    'brooke-lark-HlNcigvUi4Q-unsplash.jpg',
    'joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg',
    'shayna-douglas-GvoVScughvI-unsplash.jpg',
    'brooke-lark-qdyBKWSzpSI-unsplash.jpg'
  ];

  const imageSection = document.getElementById( 'before-after-Section' );
let leftImage = document.getElementById( 'leftImage' );
let rightImage = document.getElementById( 'rightImage' );