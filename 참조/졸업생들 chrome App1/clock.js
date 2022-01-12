const clock =document.querySelector("h2#clock");



function getCLock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart("2",0);
    const minutes = String(date.getMinutes()).padStart("2",0);
    const seconds = String(date.getSeconds()).padStart("2",0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getCLock()
setInterval(getCLock, 1000);

function clockResize(){
    const width = window.innerWidth;
    if (width <= 500){
        clock.style.fontSize = "600%";
    }else if(width > 500){
        clock.style.fontSize = "800%";
    };
}

clockResize();
window.addEventListener("resize",clockResize);
