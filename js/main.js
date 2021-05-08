function regSW(){
  
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

function dcrypt(x){
  return x.split("").reverse().join("");
}

function kToC(x){
  return x - 273.15;
}

function kToF(x){
  return Math.round(((kToC(x) * 9)/5 + 32) * 100) / 100;
}

const app = document.getElementById('root');
//const logo = document.createElement('img');
//logo.src = 'images/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

//app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();
let cities = ["London","France","Tokyo","Chicago"];
let api = dcrypt("1e5ae6831a0fa16012e92d525385e2f5");

function getCityData(city){
  request.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + api,true);
  request.send();
  request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    if (request.status>=200 && request.status<400){
       const card = document.createElement('div');
       card.setAttribute('class','card');
      const h1 = document.createElement('h1');
      h1.textContent = data.name;
      const p = document.createElement('p');
      p.textContent = kToF(data.main.temp) + " F";

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = "Dangit, it's not working!";
      app.appendChild(errorMessage);
    } //END else
  } //END function
}//END function

for (let i = 0; i < cities.length; i++){
  getCityData(cities[i]);
}
