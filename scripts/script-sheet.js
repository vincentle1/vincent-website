
const navLinks = document.querySelector(".links");
const toggleButton = document.querySelector(".toggleButton");
const burger = document.querySelector("#burger");
const close = document.querySelector("span");
const name = document.querySelector(".name");
const topBar = document.querySelector(".nameAndButton");
const specificNavLinks = document.querySelectorAll(".links li a");

function toggleMenu(){

    navLinks.classList.toggle("expand");
    close.classList.toggle("closeAppear");

    burger.classList.toggle("disappear");
    name.classList.toggle("invisible");

    topBar.classList.toggle("removeBorder");
    toggleButton.classList.toggle("grow");
    
}

toggleButton.addEventListener("click", toggleMenu);

/*After clicking on link, close the nav*/
specificNavLinks.forEach(function(navLink){
    navLink.addEventListener("click", toggleMenu)});

/*Drop shadow on scroll*/

//Offset-height returns height of element//
const nav_height = topBar.offsetHeight;

function dropShadow(){
if (window.scrollY >= nav_height){
    topBar.classList.add("addShadow");
} else {
    topBar.classList.remove("addShadow");
}
}

window.addEventListener("scroll", dropShadow);








