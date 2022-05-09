let mobileMenu = document.querySelector(".menu-icon");
mobileMenu.addEventListener("click", () => {
  if (mobileMenu.firstElementChild.classList.contains("fa-bars")) {
    mobileMenu.firstElementChild.classList.replace("fa-bars", "fa-times");
  } else {
    mobileMenu.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
});
