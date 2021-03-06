var header = document.querySelector('.page-header');
var menu = header.querySelector('.page-header__menu');
var closeButton = header.querySelector('.main-nav__close');

var myFunction = function (evt) {
  evt.preventDefault();
  var nav = header.querySelector('.main-nav');
  nav.classList.toggle("main-nav--closed");
  nav.classList.toggle("main-nav--opened");
  menu.classList.toggle("page-header__menu--active");
};

menu.addEventListener("click", myFunction);
closeButton.addEventListener("click", myFunction);