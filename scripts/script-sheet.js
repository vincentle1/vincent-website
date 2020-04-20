const navLinks = document.querySelector(".headerLinks");
const toggleButton = document.querySelector(".toggleButton");
const burger = document.querySelector("#burger");
const close = document.querySelector("span");
const name = document.querySelector(".name");
const topBar = document.querySelector(".nameAndButton");
const content = document.querySelector(".allSections");
const overlay = document.querySelector(".overlay");

function toggleMenu(){

    navLinks.classList.toggle("expand");
    close.classList.toggle("expand");
    topBar.classList.toggle("expand");
    overlay.classList.toggle("expand");

    burger.classList.toggle("disappear");
    name.classList.toggle("disappear");

    topBar.classList.toggle("addColor");
    topBar.classList.toggle("removePadding");
    toggleButton.classList.toggle("grow");
    
}

toggleButton.addEventListener("click", toggleMenu);

/*After clicking on link, close the nav*/
navLinks.addEventListener("click", toggleMenu);



