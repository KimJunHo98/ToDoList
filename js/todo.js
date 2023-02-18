const toDo = document.getElementById("todo"),
toDoForm = toDo.querySelector(".todo_form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = toDo.querySelector(".todo_list");

const todos = [],
TODOS_KEY = "todos";

// submit한 내용을 로컬스토리지에 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // JSON.stringify(todos): 배열로 작성된 값을 문자열로 처리를 해서 배열형태 그대로 값을 보여줌
}

// todo_list 삭제하기
function deleteToDo(e){
    // 클릭한 버튼의 부모요소
    const li = e.target.parentElement;

    // 클릭한 버튼의 부모요소를 삭제
    li.remove();
}

// ul안에 todo_list 작성하기
function paintToDo(newToDo){
    const li = document.createElement("li"),
    span = document.createElement("span"),
    btn = document.createElement("button");

    span.innerText = newToDo; // paintToDo함수에서 받아온 newToDo값을 span에 추가
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    // toDoList안에 작성된 li 추가
    toDoList.appendChild(li);

}

function todoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;

    // 사용자가 submit하면 input을 비움
    toDoInput.value = "";
    // submit한 내용을 배열에 push함
    todos.push(newToDo);
    
    paintToDo(newToDo); // toDoInput.value를 newToDo에서 받고 paintToDo함수에 그 값을 보냄
    saveToDos();
}
toDoForm.addEventListener("submit", todoSubmit);

// 로컬스토리지에 저장된 값을 가져옴
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos); // JSON.parse(): 배열형태 그대로 작성된 문자열을 배열로 보여줌

    parseToDos.forEach((item) =>  console.log("this is the turn of", item));
}

