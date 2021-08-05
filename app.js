const navbarToggle = document.getElementById('navbar__toggle');
const navbarMenu = document.getElementById('navbar__menu');

let handleToggle = () => {
  let setToggle = navbarMenu.classList.toggle('navbar__menu--mobile');

  if (setToggle) {
    navbarToggle.setAttribute('src', './images/close_white_24dp.svg');
    } else {
    navbarToggle.setAttribute('src', './images/menu_white_24dp.svg');
  }
}

navbarToggle.addEventListener('click', handleToggle);