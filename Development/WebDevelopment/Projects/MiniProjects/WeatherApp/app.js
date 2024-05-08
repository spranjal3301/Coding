require('dotenv').config;
const apiKey=process.env.weatherApiKey;
const apiUrl="http://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data=await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    const weatherType=data.weather[0].main;
    console.log(weatherType);
    if (weatherType=="Clouds") {
        weatherIcon.src="/images/clouds.png";
    }
    else if (weatherType=="Clear") {
        weatherIcon.src="/images/clear.png";
    }
    else if (weatherType=="Rain") {
        weatherIcon.src="/images/rain.png";
    }
    else if (weatherType=="Drizzle") {
        weatherIcon.src="/images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist") {
        // console.log("k");
        weatherIcon.src="/images/drizzle.png";  
    }
    else{
        weatherIcon.src="/images/mist.png"; 
    }

    document.querySelector(".weather").style.display="block"
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})