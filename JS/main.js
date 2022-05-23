const menu = document.getElementById("menu");
const actions = document.getElementById("action"); 

menu.addEventListener("click", ()=> {
    hundleMenu();
})

function hundleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

const ele = document.getElementsByClassName("ele");


for(let i = 0 ; i < 4 ; i++){
    ele[i].addEventListener("click", ()=>{
        Closemenu()
    })
}

function Closemenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

let upBtn = document.getElementById("span");

upBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll =function () {
    if(this.scrollY >= 1000){
        upBtn.classList.add("show");
    }else {
        upBtn.classList.remove("show");
    }
}

