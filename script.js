document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var menuToggle = document.getElementById('menuToggle');
  var navMobile = document.getElementById('navMobile');
  var iconMenu = menuToggle.querySelector('.icon-menu');
  var iconX = menuToggle.querySelector('.icon-x');
  var headerOffset = 80;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  function closeMobileMenu() {
    navMobile.classList.remove('is-open');
    iconMenu.style.display = '';
    iconX.style.display = 'none';
  }

  menuToggle.addEventListener('click', function () {
    var isOpen = navMobile.classList.toggle('is-open');
    iconMenu.style.display = isOpen ? 'none' : '';
    iconX.style.display = isOpen ? '' : 'none';
  });

  function scrollToSection(id) {
    var element = document.getElementById(id);
    if (!element) return;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    closeMobileMenu();
  }

  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function () {
      scrollToSection(el.getAttribute('data-scroll'));
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
