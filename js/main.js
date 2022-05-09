const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
mobileMenu.addEventListener('click', () => {
  if (mobileMenu.firstElementChild.classList.contains('fa-bars')) {
    sidebar.style.display = 'block';
    mobileMenu.firstElementChild.classList.replace('fa-bars', 'fa-times');
  } else {
    sidebar.style.display = 'none';
    mobileMenu.firstElementChild.classList.replace('fa-times', 'fa-bars');
  }
});