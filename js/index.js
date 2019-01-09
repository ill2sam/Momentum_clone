/*const what = "Nicolas";
console.log(what);*/
//const wat = true;
//float
//const wat = 55.1;
//console log 연습
/*const seokInfo = {
    name:"Seokhan",
    age:29,
    gender:"Male",
    isHandsome:true,
    favMovies:["Bitter Sweet","Iron Man"],
    favFood:[{
        name:"Pasta",
        patty:false},
    {
        name:"QPCB",
        patty:true
    }]
};
seokInfo.isHandsome = false;
console.log(seokInfo.isHandsome)*/
/*function sayHello(name, age){
    {return `Hello ${name} you are ${age} years old`;} 
}
function sayHi(name, age){
    return `Hi ${name} you are ${age} years old`;
}
sayHello("han", 18)
const greetSeokkhan = sayHi("you" , 17);
const greetDk = sayHello("DK", 29);
console.log(greetSeokkhan)
console.log(greetDk)*/
//return 함수 
/*const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
    powerOf: function(a,b){
        return a ** b;
    }
}
const plus = calculator.plus(3,13)
const minus = calculator.minus(3,13)
const multiply = calculator.multiply(3,13)
const divide = calculator.divide(3,13)
const powerOf = calculator.powerOf(3,13)
console.log(`plus: ${plus}\nminus: ${minus}\nmultiply: ${multiply}\ndivide: ${divide}\npowerOf: ${powerOf}`);*/
//쿼리선택자
/*const title = document.querySelector("#title");
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click",handleClick); */
//조건문
/*if("10" === 10){
    console.log('hi');
} else if("10" === "13") {
    console.log("lalalala");
} else {
    console.log("ho")
}*/
/*피연산자 &&을 쓰면 둘 다  조건에 해당해야 함. ||(or)은 둘 중에 하나만 조건에 해당해도 됨.
ex) true && true = true;
    true && false = false;
    false && true = false;
    false && false = false;
ex) true || true = true;
    true || false = true;
    false || true = true;
    false || false = false;*/
/*if(20 > 5 || "seokhan" === "seohan"){
    console.log("yes");
} else {
    console.log("no");
}*/
//if, esle , ifelse 조건문
/*if는 참 , else는 거짓일 때 실행하게될 함수를 넣을 수 있다,
else if는 참이 아닐 시 또 다른 조건을 넣어 이 조건에 맞으면 elseif에 해당하는
명령을 실행하게 된다. 마찬가지로 이때도 조건에 부합하지 않을 시에는 else에 해당하는 명령을0 실행라게 됨.*/
/*const age = prompt("How old are you?");
if(age >= 18 && age <= 21){
    console.log("you can drink but you should not")
}else if(age >21){ 
    console.log("go ahead")
}else{
    console.log("you too young")
}*/
 /*쿼리선택자를 이용 타이틀의 색상을 변화하고, 조건문을 넣어서 상수로 정한 BASE_COLOR와 타이틀의 색상이 다를 시 OTHER_COLOR로 변하게 하는 handleClick 함수를 이용해 색상을 변화하게 하는 명령*/
/*const title = document.querySelector("#title");

const BASE_COLOR = "rgb(51, 62, 62)"
const OTHER_COLOR = "#16a085"

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();*/
/*자바스크립트에 존재하는 이벤트를 알아보고 연습 밑의 경우에는 네트워크에 연결 되었을 떄와 연결 되지 않았을 때에 콘솔에 각기 다른 로그가 써지게 했음.*/
/*function handleOffline(){
    console.log("Bye Bye");
}
function handleOnline(){
    console.log("Welcome back");
}
window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline);*/
/*타이틀의 색상을 바꾸기 위해 if와 else를 이용해 클래스명을 추가하는 방식을 했지만 자바스크립트에 존재하는 속성중 하나인 classList의 메서드인 toggle을 이용해 좀 더 간단하게 구현할 수 있다.*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();