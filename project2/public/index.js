'use strict';

// Dropdown Menu
const dropdown = document.querySelector('#dropbtn');

dropdown.onclick = () => {
    const dropdownList = document.querySelector('#dropdownList');
    if (dropdownList.classList.contains('show')) {
        dropdownList.classList.remove('show');
    } else {
        dropdownList.classList.toggle('show');
    }
};

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 32) {
        const dropdownList = document.querySelector('#dropdownList');
        if (dropdownList.classList.contains('show')) {
            dropdownList.classList.remove('show');
        } else {
            dropdownList.classList.toggle('show');
        }
    }
});

// Modal
const modal = document.getElementById('subscribeModal');
const links = document.getElementsByClassName('subscribeLink');
const cancel = document.getElementById('close');

for (let i = 0; i < links.length; i++)
    (function (i) {
        let link = links[i];
        link.onclick = function () {
            modal.style.display = 'block';
        };
    })(i);

cancel.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
        modal.style.display = 'none';
    }
});

// Form Validation
const emailInput = document.getElementById('email-input');
const confirmEmailInput = document.getElementById('confirm-email-input');
const form = document.querySelector('form');

emailInput.addEventListener('input', () => {
    const email = document.forms.subscription.Email;
    const emailError = document.getElementById('email-error');
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (email.value == '') {
        emailError.innerText = 'This field is required';
    } else if (!regEmail.test(email.value)) {
        emailError.innerText =
            'This field be a valid email address including a @';
    } else {
        emailError.innerText = '';
    }
});

confirmEmailInput.addEventListener('input', () => {
    const email = document.forms.subscription.Email;
    const confirmEmail = document.forms.subscription.ConfirmEmail;
    const confirmEmailError = document.getElementById('confirm-email-error');

    if (confirmEmail.value == '' || email.value != confirmEmail.value) {
        confirmEmailError.innerText =
            'This field must match the provided email address';
    } else {
        confirmEmailError.innerText = '';
    }
});

form.addEventListener('submit', (event) => {
    let isFormInvalid = true;
    let isEmailValid = false;
    let isConfirmEmailValid = false;

    const email = document.forms.subscription.Email;
    const confirmEmail = document.forms.subscription.ConfirmEmail;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    const emailError = document.getElementById('email-error');
    const confirmEmailError = document.getElementById('confirm-email-error');

    if (email.value == '') {
        isEmailValid = false;
        emailError.innerText = 'This field is required';
    } else if (!regEmail.test(email.value)) {
        isEmailValid = false;
        emailError.innerText =
            'This field be a valid email address including a @';
    } else {
        isEmailValid = true;
        emailError.innerText = '';
    }

    if (confirmEmail.value == '' || email.value != confirmEmail.value) {
        isConfirmEmailValid = false;
        confirmEmailError.innerText =
            'This field must match the provided email address';
    } else {
        isConfirmEmailValid = true;
        confirmEmailError.innerText = '';
    }

    if (isEmailValid && isConfirmEmailValid) {
        isFormInvalid = false;
    } else {
        isFormInvalid = true;
    }

    if (isFormInvalid) {
        event.preventDefault();
    }
});
