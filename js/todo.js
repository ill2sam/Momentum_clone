const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    //NOTE:event.target은 지금 event(click,hover,mouseenter 등)이 일어나는 위치를 보여준다.
    const li = btn.parentNode;
    //NOTE:parentNode는 부모가 무엇인지 알게 해줌. 그후 이벤트가 일어나는 위치의 부모를 toDolist에서 지우게 함. 여기서 removechild는 자식요소를 지우는 것인데 지워지게되는 부모가 toDolist, 즉 js-toDoList의 자식이 되기때문에 removeChild를 사용해준다.
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
    //  parseInt는 string을 숫자로 바꿔줄 수 있음.
    //NOTE:filter는 array의 forEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행이 된다. filter는 각각의 아이템을 가지고 새로운 array를 만들고 밑에 조건 return todo.id !== parseInt(li.id) 에 부합하는 값만 도출한다.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
};

function saveToDos(){
    /*NOTE:JSON.stringify는 자바스크립트 object를 string(문자열)로 바꿔주는 역할을 한다.
    ->이것을 쓰는 이유 자바스크립트는 localStorage에 있는 데이터를 모두 string(문자열)로 저장하려고 한다. 그래서 object를 string이 되도록 만들어주어야 한다.*/
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

function paintToDo(text){
//    NOTE: 이것은 writetodo에 입력한 값에 ID와 text에 내용을 부여하는 역할을 한다. 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
//    push는 Array안에 객체를 넣어주는 역할을 하는 매서드
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit_toDo(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        /*NOTE:parse는 string(문자열)을 다시 object로 변환해줌.
        forEach는 Array를 위한 function이다. 여기서 forEach는 기본적으로 array에 담겨져 있는 것들을 한번씩 함수를 실행시켜준다.*/
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        console.log(parsedToDos);
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit_toDo)
}

init();