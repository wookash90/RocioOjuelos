// Toggle Menu
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');


overlay.style.display = "none";

function menuToggle() {
    if(overlay.style.display == "none"){
        overlay.style.display = "";
    }
    else{
        overlay.style.display = "none"
    }
}

openMenu.addEventListener('click', menuToggle);
closeMenu.addEventListener('click', menuToggle);


// Checkbox
const checkbox = document.getElementById('checkbox');

function tickCheckbox() {
    if(checkbox.style.backgroundColor == ""){
        checkbox.style.backgroundColor = "#000";
    } else {
        checkbox.style.backgroundColor = ""
    }
}

// Read More
const dots = document.getElementById("span_dots");
const moreInfo = document.getElementById("span_more");
const btnMore = document.getElementById("read_more_about_btn");
const masOcultar = document.getElementById("masOcultar");

function readMoreInfo() {
    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnMore.innerHTML = "+ leer más";
        moreInfo.style.display = "none";
        btnMore.style.cursor = "pointer";
    } else {
        dots.style.display = "none";
        btnMore.innerHTML = "- ocultar";
        moreInfo.style.display = "inline";
        btnMore.style.cursor = "pointer";
    }
}

const dots2 = document.getElementById("span_dots2");
const moreInfo2 = document.getElementById("span_more2");
const btnMore2 = document.getElementById("read_more_about_btn2");
const masOcultar2 = document.getElementById("masOcultar2");

function readMoreInfo2() {
    if(dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnMore2.innerHTML = "+ leer más";
        moreInfo2.style.display = "none";
        btnMore2.style.cursor = "pointer";
    } else {
        dots2.style.display = "none";
        btnMore2.innerHTML = "- ocultar";
        moreInfo2.style.display = "inline";
        btnMore2.style.cursor = "pointer";
    }
}




