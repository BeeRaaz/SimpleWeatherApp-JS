const apiKey = "8605a1c40e01890e240f0fa1978e5fbc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#inputField #inputArea");
const searchBtn = document.querySelector("#inputField #btn");



async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#humid").innerHTML = data.main.humidity + "%";
    document.querySelector("#windSpeed").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})