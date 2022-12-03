const API_KEY="747086bad31aa9ba8dbbbff2ea3ee5a7";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather div:last-child")
        const city = document.querySelector("#weather div:first-child")
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp} 도`;
    }); //자바스크립트가 url을 실행시키는 것
}
function onGeoError(){
    alert ("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
