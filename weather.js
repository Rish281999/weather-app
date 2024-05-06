let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector("#result");
let temperature = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather")
let error = document.querySelector(".error");

btn.addEventListener("click", async () => {
  if (input.value != "") {
    let apiKey = "adb99bc19920d33cb121f9a2efb136cb";
    let dataFromServer = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`);
    // console.log(dataFromServer);

    
    if (dataFromServer.status == 404) {
      error.style.display = "block";
      weather.style.display = "none";
    } else {
      let jsonData = await dataFromServer.json();
      console.log(jsonData);

      temperature.innerHTML = `${Math.round(jsonData.main.temp - 273)}ºc`;
      city.innerHTML = `${jsonData.name}`;
      humidity.innerHTML = `${jsonData.main.humidity}`;
      wind.innerHTML = `${jsonData.wind.speed}km/h`;

      if (jsonData.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/clouds.png";
      } else if (jsonData.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/clear.png";
      } else if (jsonData.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/rain.png";
      } else if (jsonData.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/drizzle.png";
      } else if (jsonData.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/mist.png";
      } else if (jsonData.weather[0].main == "Snow") {
        weatherIcon.src = "./assets/snow.png";
      }

      weather.style.display = "block";
      error.style.display = "none";
    }



    // let cityName = document.createElement("h2");
    // cityName.innerHTML = `City Name : ${jsonData.name}`
    // result.appendChild(cityName);

    // let weather = document.createElement("h3"); 
    // weather.innerHTML = `Temperature : ${(jsonData.main.temp-273).toFixed(2)}ºc`;
    // result.appendChild(weather);

    // let climate = document.createElement("h3");
    // climate.innerHTML = `Climate : ${jsonData.weather[0].main}`;
    // result.appendChild(climate);

    // let speed = document.createElement("h3");
    // speed.innerHTML = `Wind Speed : ${jsonData.wind.speed} km/hr`;
    // result.appendChild(speed);
  }
});


// btn.addEventListener("click", ()=>{
//     if(input.value != ""){
//        //console.log(input.value);
//        let apiKey = "dbdfe820aa39d08cd3bdce06e33b4b2a";
//        let dataFromServer = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`);
//        //console.log(dataFromServer);
//        dataFromServer.then((res)=>{
//        let jsonData = res.json();
//        console.log(jsonData);
//        jsonData.then((data)=>{
//         console.log(data);
//        })
//     }).catch((e)=>{
//         console.log(e);
//     })
//     }
// });


// async function abc(){
//     try{
//     let serverData = await fetch("https://www.shoppersstack.com/shopping/products/alpha");
//     console.log(serverData);
//     let jsonData = await serverData.json();
//     console.log(jsonData.data);
// }
// catch(e){
//     console.log(e);
// }
// }
// abc();
