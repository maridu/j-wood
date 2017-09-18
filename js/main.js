var menuLinks = document.querySelectorAll('.main-nav .navigation__link');

for (var i = 0; i < menuLinks.length; i++) {
  var menuLink = menuLinks[i];
  var menuToggle = document.querySelector('#main-nav__toggle');
  menuLink.addEventListener('click', function() {
    menuToggle.checked = false;
  })
}
