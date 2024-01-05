var elHeading = document.querySelector(".heading")
var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var Pul = 3242424;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var Input = elInput.value.trim()

  if (isNaN(Input)) {
    elHeading.textContent = "Raqam kiriting"

    return
  }

  if (Input >= Pul) {
    elHeading.textContent = "Oq Yul"
  } else {
    elHeading.textContent = "Sabrli bo'l"
  }

})





