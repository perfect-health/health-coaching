'use strict';
let planArray = [
   'plan1.jpg',
    'plan2.jpeg', 
    'plan3.jpeg',
    'plan4.jpg',
    'plan5.jpg',
    'plan6.jpg',
    'plan7.jpg']
   
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
        planImg.src = '../img/loss-wieght-media/' + show.all[imgRandom].image;
        show.all[imgRandom].shown++;
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
    let userInfo;
    // console.log(getData)
    if(localStorage.userData){
    const table = document.getElementById('userInfo');
    
    //  userInfo=getData();
    userInfo = JSON.parse(localStorage.userData)
    console.log(userInfo)
    console.log(userInfo)
    let tbody = document.querySelector('tbody')
    showUser();
    // localStorage.clear();
    function showUser() {
      
      for (let i= 0 ;i<userInfo.length ;i++){
      
      let tr = document.createElement('tr')
      tr.id = "row"+i;
      tbody.appendChild(tr)
    
        let td1= document.createElement('td')
        td1.textContent =userInfo[i].firstName;
        tr.appendChild(td1)
    
        let td2= document.createElement('td')
        td2.textContent =userInfo[i].lastName;
        tr.appendChild(td2);
       
        let td3= document.createElement('td')
        td3.textContent ='Your Gender  '+userInfo[i].gender;
        tr.appendChild(td3);
    
        let td4= document.createElement('td')
        td4.textContent ='Your weight '+userInfo[i].weight;
        tr.appendChild(td4);
    
        let td5= document.createElement('td')
        td5.textContent ='Your height '+userInfo[i].height;
        tr.appendChild(td5);
      }
    }   
    
      // userInfo.saveToLocalStorage();
    }
    // localStorage.clear();
    
    // localStorage.removeItem(userInfo); 
    // window.localStorage.clear();