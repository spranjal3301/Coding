// const { log } = require("async");

//! WHat is Promise?
//* A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function doSomeAsyncTask(){

    // setTimeout(()=>console.log("hello1"),2000)
    return new Promise((resolve)=>{
        let d=fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=84990871e3425d4b14f5b67db9c202b4");
        resolve(d);
    })
}

function main(){
    doSomeAsyncTask().then((result) => {
        console.log(result);
    });
}
main();

async function checkWeather(city){
    const response = await fetch(`&appid=${apiKey}`);
    let data=await response.json();

}