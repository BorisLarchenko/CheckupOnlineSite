var header = document.querySelector('.page-header');
var menu = header.querySelector('.page-header__menu');

var myFunction = function (evt) {
  evt.preventDefault();
  var nav = header.querySelector('.main-nav');
  nav.classList.toggle("main-nav--closed");
  nav.classList.toggle("main-nav--opened");
};

menu.addEventListener("click", myFunction);