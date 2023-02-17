const btnMenu = document.querySelector('.nav__mobile-menu-btn')
const menu = document.querySelector('.mobile-menu')
const closeMenuBtn = document.querySelector('.mobile-menu__close-btn')

btnMenu.addEventListener('click', openMenu)

closeMenuBtn.addEventListener('click', closeMenu)

menu.addEventListener('click', (event) => {
  const target = event.target
  if (target.classList.contains('mobile__link')) closeMenu()

})


function openMenu() {
  menu.classList.add('mobile-menu_visible');
  btnMenu.style.opacity = 0;
}

function closeMenu() {
  menu.classList.remove('mobile-menu_visible');
  btnMenu.style.opacity = 1;
}