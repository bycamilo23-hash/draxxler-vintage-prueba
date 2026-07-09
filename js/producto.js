function toggleMenu(){

    document
    .getElementById("menuDropdown")
    .classList.toggle("activo");

}

function toggleSubmenu(event){

    event.preventDefault();

    document
    .querySelector(".submenu-items")
    .classList.toggle("activo");

}