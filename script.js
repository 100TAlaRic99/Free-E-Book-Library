const menuIcon = document.querySelector(".menu-icons");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", ()=>{
    container.classList.toggle("navigate");
});