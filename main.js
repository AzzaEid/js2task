var registerForm = document.querySelector(".convertForm");

registerForm.onsubmit =function (event) {
    event.preventDefault();
    var element = event.target.elements;
    var amount = element['amount'].value;
    var selector = element['exchange'].value;

    if (selector == 'dollar') {
        document.querySelector(".result").textContent = amount / 3.75;
    }
    if (selector == 'dinar') {
        document.querySelector(".result").textContent = amount / 5.25;
    }
    if (selector == 'nis') {
        document.querySelector(".result").textContent = amount;
    }

};
