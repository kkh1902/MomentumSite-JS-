const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList  = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-parent")
const todospan = document.querySelector("#todo-parent span:last-child")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginbutton(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    doneList.classList.remove(HIDDEN_CLASSNAME);
    todospan.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText =  `Hello ${username}`;
};

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginbutton);
} else {
    paintGreeting(saveUsername);
}
