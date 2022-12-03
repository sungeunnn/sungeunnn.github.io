const clock = document.querySelector("h5#clock");
const today = document.querySelector("h5#today");

function getToday(){
    const date = new Date();
    const years = date.getFullYear();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const months = month[date.getMonth()];
    const days = date.getDate();
    today.innerText = `${years} ${months} ${days}`;
}

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getToday();
getClock();
setInterval(getClock,1000);