document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Menu Logic
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  } else {
    console.error("Menu icon or navbar element not found!");
  }
});