const buttonForm =document.querySelector("#all-remove-dones");
const buttonForAll = document.querySelector("#all-remove-dones input");
const doneUL = document.querySelector("#done-list");


function allremove(event){
    event.preventDefault();
    doneUL.classList.add("hidden");
    localStorage.removeItem("dones");
    let dones =[];
    localStorage.setItem("dones", JSON.stringify(dones))
    

}

buttonForAll.addEventListener("click", allremove);

