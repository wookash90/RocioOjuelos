// Toggle Menu
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
let overlay = document.getElementById('overlay');

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
closeMenu.addEventListener('click', menuToggle)
