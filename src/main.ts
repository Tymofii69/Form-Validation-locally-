let inputArray: HTMLInputElement[] = Array.from(document.querySelectorAll("input"));

inputArray.forEach((inputElement: HTMLInputElement) => {
    inputElement.addEventListener("input", checkInput);
})

function checkInput(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.validity.patternMismatch) {
        target.setCustomValidity(`That's not correct ${target.id}!`);
    } else {
        target.setCustomValidity("");
    }
}


let nameInput = document.getElementById("name") as HTMLInputElement;
let email = document.getElementById("email") as HTMLInputElement;
let phoneCode = document.getElementById("phone-code") as HTMLInputElement;
let phone = document.getElementById("phone") as HTMLInputElement;

function setValues(){
    localStorage.setItem("firstValue", nameInput.value);
    localStorage.setItem("secondValue", email.value);
    if (phone.value){
        localStorage.setItem("thirdValue", phoneCode.value);
        localStorage.setItem("lastValue", phone.value);
    }
}

