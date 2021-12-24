var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elSelect = document.querySelector(".select")
var elResult = document.querySelector(".result")

elForm.addEventListener ("submit", function (evt) {
    evt.preventDefault ()

    var result = Number (elInput.value) / Number (elSelect.value)

    elResult.textContent = result.toFixed (3)
})







