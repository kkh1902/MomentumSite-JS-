const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const doneLists = document.querySelector("#done-list");


const TODOS_KEY ="todos"
let toDos =[];
let dones =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


function saveDones(){
    localStorage.setItem("dones", JSON.stringify(dones));
}


function moveDone(event){
    event.preventDefault();
    const li = event.target.parentElement;
    const span= li.firstChild;
    const doneTodo = span.innerText
    const obj = {
        text: doneTodo,
        id: li.id
    }
    dones.push(obj);
    paintDone(obj);
    saveDones();
}



function paintDone(done){
    const li = document.createElement("li");
    li.id = done.id;
    const span =document.createElement("span");
    span.innerText = done.text;
    li.appendChild(span);
    doneLists.appendChild(li);
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const xbutton = document.createElement("button");
    xbutton.innerText = "❌"
    const checkbutton = document.createElement("button");
    checkbutton.innerText = "✔️"
    xbutton.addEventListener("click",deleteToDo);
    checkbutton.addEventListener("click",moveDone);
    checkbutton.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(xbutton);
    li.appendChild(checkbutton);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoOBJ = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newToDoOBJ);
    paintTodo(newToDoOBJ);
    saveToDos();
}


toDoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const paredToDos = JSON.parse(savedTodos);
    toDos = paredToDos;
    paredToDos.forEach(paintTodo);
}

const savedDones = localStorage.getItem("dones");

if(savedDones !== null){
    const paredDones = JSON.parse(savedDones);
    dones = paredDones;
    paredDones.forEach(paintDone);
}
