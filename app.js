const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".flecha_menu") || e.target.matches(".flecha_menu *")) {
    let nav = document.querySelector("nav");
    let menu = document.querySelectorAll("nav > div");
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
    console.log(nav);

    // let menu = document.querySelectorAll("nav > div");
    // if (menu[1].classList == "menu") {
    //   menu[1].classList.remove("menu");
    //   menu[1].classList.add("menu_responsive");
    // } else {
    //   menu[1].classList.add("menu");
    //   menu[1].classList.remove("menu_responsive");
    // }
  }
  //   console.log(e);
});
