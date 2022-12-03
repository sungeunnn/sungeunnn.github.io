const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 기본동작을 막는 것
   loginForm.classList.add(HIDDEN_CLASSNAME); // login-form을 숨기는 것
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username); // 유저이름 local저장소에 저장
   paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else {
    //show greeting
    paintGreetings(savedUsername);
}