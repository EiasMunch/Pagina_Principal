
//Le agrega una class al encabezado para agregarle diferente estilo cuando checkbtn esta activo//
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
navBar = document.querySelector("header");
navBar.classList.toggle("active");
};
