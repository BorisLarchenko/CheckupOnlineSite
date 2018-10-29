var questionsBlock = document.querySelector('.questions__wrapper');
var buttonsArray = questionsBlock.querySelectorAll('.questions__btn');

/*for (var i = 0; i < buttonsArray.length; i++) {
  if (buttonsArray[i].classList.contains('questions__btn--active')) {
    console.log('I have found the elemtnt' + buttonsArray[i]);
  }
  else {
    console.log('No elements ' + i);
  }
}*/




var openCloseButtonInfo = function (elem) {
  var openTab=true;
  if (elem.classList.contains('questions__btn--active')) {
    openTab = false;
  }
  for (var i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].classList.remove("questions__btn--active");
  }
  if (elem.className == 'questions__btn' && openTab) {
    elem.className += ' questions__btn--active';
    console.log('try to add class to elem');
  } else {
    elem.classList.remove ('questions__btn--active');
  }
};


for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    openCloseButtonInfo(this);
  });
}