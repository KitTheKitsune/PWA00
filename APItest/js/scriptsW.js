//scriptsW.js

const app = document.getElementById('root');
//const logo = document.createElement('img');
//logo.src = 'images/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

//app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London&appid=5f2e583525d29e21061af0a1386ea5e1',true);
request.send();
request.onload = function(){
  var data = JSON.parse(this.response);
  console.log(data);
  if(request.status >= 200 && request.status < 400){
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
    errorMessage.textContent = "DANGIT JIM, HE'S DEAD";
    app.appendChild(errorMessage);
  } //END ELSE
} //END FUNCTION

