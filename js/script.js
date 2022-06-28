const readMore = document.querySelector(".read-more");
const text = document.querySelector(".text");

readMore.addEventListener("click" ,(e) =>{
    text.classList.toggle("show-more");
    if(readMore.innerText === "Read More.."){
        readMore.innerText = "Read Less..";
    }
    else{
        readMore.innerText = "Read More..";
    }
})


let navbar = document.querySelector('header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}