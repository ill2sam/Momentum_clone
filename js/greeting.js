const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
//    FIXME: 이름을 submit 한 후 에 todo 란으로 넘어가게 고쳐야함
}
function paintGreeting(text){
//    form = document.querySelector(".js-form")
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //he is not
        askForName();
    }else{
       //he is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();