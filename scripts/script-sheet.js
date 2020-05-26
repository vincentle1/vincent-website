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

const mobileMenu = document.querySelector(".mobileMenu");
const desktopMenu = document.querySelector(".desktopMenu");

let mobileHeight = mobileMenu.offsetHeight;
let desktopHeight = desktopMenu.offsetHeight;

function mobileShadow(){
if ((window.scrollY >= mobileHeight) && (mobileMenu.classList.length < 2) && (getComputedStyle(desktopMenu).display == "none")) { 
    mobileMenu.classList.add("addShadow");
} else if ((window.scrollY <= mobileHeight) && (mobileMenu.classList.length == 2) && (getComputedStyle(desktopMenu).display == "none")) {
    mobileMenu.classList.remove("addShadow");
    desktopMenu.classList.remove("addShadow");
}
}

/*Desktop drop shadow*/

function deskShadow(){
    if ((window.scrollY >= desktopHeight) && (desktopMenu.classList.length < 2) && (getComputedStyle(mobileMenu).display == "none")){
        desktopMenu.classList.add("addShadow");
    } else if ((window.scrollY <= desktopHeight) && (desktopMenu.classList.length == 2) && (getComputedStyle(mobileMenu).display == "none")){
        desktopMenu.classList.remove("addShadow");
        mobileMenu.classList.remove("addShadow");
    }
}
/*End function*/

window.addEventListener("scroll", mobileShadow);
window.addEventListener("scroll", deskShadow);

/*End Drop shadow on scroll*/











