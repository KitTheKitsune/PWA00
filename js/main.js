function regSW(){
  
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

function dcrypt(x){
  return str.split("").reverse().join("");
}

const app = document.getElementById('root');
//const logo = document.createElement('img');
//logo.src = 'images/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

//app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();
let city = "London";
let api = dcrypt("1e5ae6831a0fa16012e92d525385e2f5");
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
    p.textContent = data.main.temp;
    
    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "Dangit, it's not working!";
    app.appendChild(errorMessage);
  } //END else
} //END function
