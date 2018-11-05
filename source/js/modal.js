var callBackButton = document.querySelector('.call__callback');
var backgroundOverlay = document.querySelector('.popup__overlay');
var popupForm = document.querySelector('.popup__form');

var closePopupForm = popupForm.querySelector('.popup__button');

callBackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  showHideModal();
});

closePopupForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  showHideModal();
});

var showHideModal = function () {
  var mainBody = document.querySelector('body');
  backgroundOverlay.classList.toggle('popup--inactive');
  popupForm.classList.toggle('popup--inactive');
  mainBody.classList.toggle('main-body');
};