"use strict";
let inputArray = Array.from(document.querySelectorAll("input"));
inputArray.forEach((inputElement) => {
    inputElement.addEventListener("input", checkInput);
});
function checkInput(event) {
    let target = event.target;
    if (target.validity.patternMismatch) {
        target.setCustomValidity(`That's not correct ${target.id}!`);
    }
    else {
        target.setCustomValidity("");
    }
}
let nameInput = document.getElementById("name");
let email = document.getElementById("email");
let phoneCode = document.getElementById("phone-code");
let phone = document.getElementById("phone");
function setValues() {
    localStorage.setItem("firstValue", nameInput.value);
    localStorage.setItem("secondValue", email.value);
    if (phone.value) {
        localStorage.setItem("thirdValue", phoneCode.value);
        localStorage.setItem("lastValue", phone.value);
    }
}
