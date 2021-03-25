//scriptsW.js

const app = document.getElementById('root');
//const logo = document.createElement('img');
//logo.src = 'images/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

//app.appendChild(logo);
app.appendChild(container);
function City(var city){
  let request = new XMLHttpRequest();
  var url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5f2e583525d29e21061af0a1386ea5e1';
  request.open('GET',url,true);
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
      p.textContent = "Temperature in K: " + data.main.temp;
      const p2 = document.createElement('p');
      p2.textContent = "Pressure: " + data.main.pressure;
      const p3 = document.createElement('p');
      p3.textContent = "Humidity: " + data.main.humidity;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = "DANGIT JIM, HE'S DEAD";
      app.appendChild(errorMessage);
    } //END ELSE
  } //END FUNCTION
} //END FUNCTION

City(London);
City(Tokyo);
City(Omaha);
City(Landstuhl);

