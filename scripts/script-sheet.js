const body = document.querySelector("body");
const navLinks = document.querySelector(".links");
const header = document.querySelector("header");
const toggleButton = document.querySelector(".toggleButton");
const burger = document.querySelector("#burger");
const close = document.querySelector("span");
const name = document.querySelector(".name");
const topBar = document.querySelector(".nameAndButton");
const specificNavLinks = document.querySelectorAll(".links li a");

function toggleMenu(){

    navLinks.classList.toggle("expand");
    header.classList.toggle("animate");
    close.classList.toggle("closeAppear");

    burger.classList.toggle("disappear");
    name.classList.toggle("invisible");

    topBar.classList.toggle("removeBorder");
    toggleButton.classList.toggle("grow");

    var head_height = header.offsetHeight;
    body.classList.toggle("disableScroll");
    topBar.classList.toggle("disableScroll");
    
}


toggleButton.addEventListener("click", toggleMenu);

/*After clicking on link, close the nav*/
specificNavLinks.forEach(function(navLink){
    navLink.addEventListener("click", toggleMenu)});

/*Drop shadow on scroll*/
//Offset-height returns height of element//
const nav_height = topBar.offsetHeight;


function dropShadow(){
if ((window.scrollY >= nav_height) && (navLinks.classList.length <=2)){
    topBar.classList.add("addShadow");
} else {
    topBar.classList.remove("addShadow");
}
}

window.addEventListener("scroll", dropShadow);







