
const navBar = document.querySelector("nav ul")

const menu = document.querySelector("#menu-icon")

const menuImage = document.querySelector("#menu-icon img")

menu.addEventListener('click', function() {

    if (menuImage.getAttribute("src") === "imagens/menu.png") {
        menuImage.setAttribute("src", "imagens/close.png")
    }
    else {
        menuImage.setAttribute("src", "imagens/menu.png")
    }

    navBar.classList.toggle("active")
}) 
