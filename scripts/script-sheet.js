
function toggleMenu(){
    if (menuButton.id == "closed"){
    /* 1. Toggle between Hamburger and Close */
        menuButton.setAttribute("id", "open");
        menuButton.setAttribute("style", "margin-right:0")
        hamburger.style.display = "none";
        closeBar.setAttribute("style", 
        "display: block; font-size: 20px; padding-right: 0px; margin-right: 10px");
    /* 2. Make name appear and disappear */
        name.style.visibility = "hidden";
    /* 3. Make background color gray for top bar */
        topBar.style.backgroundColor = "#E1E1E1";
        menuButton.style.border = "none";
    /* 4. Make all links appear */
        links.style.display = "block";
        
}
    else if (menuButton.id == "open"){
        menuButton.setAttribute("id", "closed");
        menuButton.setAttribute("style", "margin-right:20")
        closeBar.style.display = "none";
        hamburger.style.display = "block";
        name.style.visibility = "visible";
        topBar.style.backgroundColor = "white";
        menuButton.style.border = "2px solid #d0d0d0";
        links.style.display = "none";
    }
}

const menuButton = document.querySelector('li.toggle');
const closeBar = document.querySelector('span');
const name = document.querySelector('li.name');
const hamburger = document.querySelector('i#hamburger');
const topBar = document.querySelector(".topBar");
const links = document.querySelector("nav ul.links");

menuButton.addEventListener('click', toggleMenu);

