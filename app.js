const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".flecha_menu") || e.target.matches(".flecha_menu *")) {
    let nav = document.querySelector("nav");
    let menu = document.querySelectorAll("nav > div");
    let contenedor = document.querySelectorAll("body > div");

    if (nav.classList == "nav_header") {
      nav.classList.remove("nav_header");
      nav.classList.add("nav_header_responsive");
      menu[1].classList.remove("menu");
      menu[1].classList.add("menu_responsive");
    } else {
      nav.classList.add("nav_header");
      nav.classList.remove("nav_header_responsive");
      menu[1].classList.add("menu");
      menu[1].classList.remove("menu_responsive");
    }
    console.log(contenedor[1]);
    if (contenedor[1].classList == "container") {
      contenedor[1].classList.remove("container");
      contenedor[1].classList.add("container_responsive");
    } else {
      contenedor[1].classList.add("container");
      contenedor[1].classList.remove("container_responsive");
    }
  }
});
