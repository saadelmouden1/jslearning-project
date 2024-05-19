

const input=document.getElementById("input");

let nm="Rabat";
  fetchWeather(nm);
const weath=document.querySelector('.weather')
input.addEventListener('keypress',function(e){
  if(e.key=='Enter'){
    nm=input.value;
    fetchWeather(nm)
  }
})


const url='https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=dfbb12b3649dd2d6bac5a42daad34f55'



function fetchWeather(name){


  fetch("https://api.openweathermap.org/data/2.5/weather?q="+name+"&units=metric&appid=dfbb12b3649dd2d6bac5a42daad34f55").then((res)=>res.json()).then((data)=>this.info(data))


}
function info(dat){
  const name=dat.name;
  const temp=dat.main.temp;
  const country=dat.sys.country;
  const icon=dat.weather[0].icon;
    const description=dat.weather[0].description;
    const speed=dat.wind.speed;
    const humidity=dat.main.humidity;

  console.log(name,temp,country,icon,description,speed,humidity);
  console.log(dat);


weath.innerHTML=`
<h2>Weather in ${name}</h2>
<div class="temp">${temp}°C</div>
<div class="country">${country}</div>
<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" class="icon">
<div class="description">${description}</div>
<div class="humidity">Humidity:${humidity}%</div>
<div class="wind">Wind speed:${speed} Km/h</div>




`

}
