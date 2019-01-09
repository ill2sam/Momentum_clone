const clockContainer = document.querySelector(".js-clcok"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
};
//:${seconds < 10 ? `0${seconds}` : seconds}`
//삼항연산자 
/*ex) if(a >10){
    'asuper'
}else{
    'alow'
}
이 불리언을 삼항연산자를 쓰면 이렇게 표현 할 수있다.*/
//`${a > 10 ? `${asuper}` : `${alow}`}`;

function init() {
    getTime();
    setInterval(getTime, 1000);
};

init();