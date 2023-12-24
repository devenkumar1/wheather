const button=document.querySelector(".fa-magnifying-glass");
const whet=async()=>{
APkey='9ce04953d46beb1f7cd8f45acb0a3415';
const input = document.querySelector("input");
    const city = input.value;
const link=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APkey}`;


let respone2= await fetch(link);
let data2= await respone2.json();
console.log(data2);



const temprature=Math.floor(data2.main.temp);
const description =(data2.weather[0].main);
const location=(data2.name);
const humidity=(data2.main.humidity);
 const maximumT=(data2.main.temp_max);
 const minimumT=(data2.main.temp_min);
const update=document.querySelector(".temprature");
update.innerHTML=`<h2>${temprature} °c</h2>`;

const des=document.querySelector(".description");
des.innerHTML=`<h2>${description}</h2>`;

const hum=document.querySelector(".humidity");
hum.innerHTML=`<h2>Humidity: ${humidity} %</h2>`;

const tempMax=document.querySelector(".max_temp");
tempMax.innerHTML=`<h2>Max: ${maximumT} °c</h2>`;

const tempMin=document.querySelector(".min_temp");
tempMin.innerHTML=`<h2>Min: ${minimumT} °c</h2>`;


const locat=document.querySelector(".locat");
locat.innerHTML=`<h2>${location}</h2>`;
const img=document.querySelector(".whatimage");

switch(description){
    case "Clear":
    img.src="assets/images/sunny.gif";
    break;

    case "Tornado":
        img.src="assets/images/storm.gif";
        break;

        case "":"Ash"
        img.src="assets/images/volcano.gif";
        break;

        case "":"Dust"
        img.src="assets/images/sand.gif";
        break;

    case "Rain": 
    img.src="assets/images/storm.gif";
    break;

    case "Snow": 
    img.src="assets/images/snowy.gif";
    break;
     
    case "Clouds": 
    img.src="assets/images/cloudy.gif";
    break;

    case "Drizzle": 
    img.src="assets/images/rainy.gif";
    break;

    case "Fog":
    img.src="assets/images/foggy.gif";
    break;

    case "Thunderstorm":
        img.src="assets/images/storm.gif";
        break;

    case "Smoke": 
    img.src="assets/images/foggy.gif";
    break;

    case "Haze":
    img.src="assets/images/haze.gif";
    break;

    case "Mist":
        img.src="assets/images/haze.gif";
        break;

     default:
        img.src="assets/images/sunny.gif";
        break;
};


}
const generateQuote= async()=>{
    const getqt="https://api.quotable.io/quotes/random";
    let todayQuote=await fetch(getqt);
    let quote= await todayQuote.json();
    const qtdata=(quote[0].content);
    const theQt=document.querySelector(".today");
    theQt.innerHTML=`<h3>quote: ${qtdata}</h3>`;
    
    }
button.addEventListener("click",whet);
button.addEventListener("click",generateQuote);

