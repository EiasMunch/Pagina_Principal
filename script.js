// Encuentra el botón de menú responsive y agrega un listener
const menuResponsiveButton = document.querySelector(".checkbtn");

if (menuResponsiveButton) {
    menuResponsiveButton.addEventListener("click", toggleNavBar);
}

// Función para cambiar la clase "active" en el encabezado
function toggleNavBar() {
    const navBar = document.querySelector("header");

    if (navBar) {
        navBar.classList.toggle("active");
    }
}


