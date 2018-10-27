var checkupForm = document.querySelector('.service__form');
var formPages = checkupForm.querySelectorAll('.service__form-tab');

//Turn off all form pages
for (var i = 0; i < formPages.length; i++) {
  formPages[i].classList.toggle("service__form-tab--inactive");
}
//add page form counter and show first(zero) page
var formPageNumber = 0;
formPages[formPageNumber].classList.remove("service__form-tab--inactive");

//function that lists pages forward
var changeFormPagesForward = function () {
  formPages[formPageNumber].classList.toggle("service__form-tab--inactive");
  formPageNumber+=1;
  if (formPageNumber >= formPages.length ) {formPageNumber = 0};
  formPages[formPageNumber].classList.toggle("service__form-tab--inactive");
};
//find all buttons for list page forward
var formNextButtons = checkupForm.querySelectorAll('.service__next--js');
//add onckick event to all these buttons
for (var i = 0; i < formNextButtons.length; i++) {
  formNextButtons[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    changeFormPagesForward();
  });
}
//function that lists pages backward
var changeFormPagesBack = function () {
  formPages[formPageNumber].classList.toggle("service__form-tab--inactive");
  formPageNumber-=1;
  // if (formPageNumber >= formPages.length ) {formPageNumber = 0};
  formPages[formPageNumber].classList.toggle("service__form-tab--inactive");
};
//find all buttons for list pages backward
var formPrevButtons = checkupForm.querySelectorAll('.service__back');


//add onckick event to all these buttons
for (var i = 0; i < formPrevButtons.length; i++) {
  formPrevButtons[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    changeFormPagesBack();
  });
}

//Add and remove class name
/*
formPages[0].className += " service__form-tab--inactive";
formPages[0].classList.remove("service__form-tab--inactive");*/

//it can be done with only one command
// formPages[0].classList.toggle("service__form-tab--inactive");

