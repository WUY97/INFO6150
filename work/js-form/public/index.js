'use strict';

const nameInput = document.getElementById('name-input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
    const name = document.forms.registration.Name;
    const nameError = document.getElementById('name-error');

    if (name.value == '') {
        nameError.style.display = 'inline';
    } else {
        nameError.style.display = 'none';
    }    
});

form.addEventListener('submit', (event) => {
    let isFormInvalid = true;
    let isNameValid = false;
    let isEmailValid = false;
    let isConfirmEmailValid = false;

    const name = document.forms.registration.Name;
    const email = document.forms.registration.Email;
    const confirmEmail = document.forms.registration.ConfirmEmail;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const confirmEmailError = document.getElementById('confirm-email-error');

    if (name.value == '') {
        isNameValid = false;
        nameError.style.display = 'inline';
    } else {
        isNameValid = true;
        nameError.style.display = 'none';
    }

    if (email.value == '' || !regEmail.test(email.value)) {
        isEmailValid = false;
        emailError.innerText = 'Please enter a valid e-mail address.';
    } else {
        isEmailValid = true;
        emailError.innerText = '';
    }

    if (confirmEmail.value == '' || email.value != confirmEmail.value) {
        isConfirmEmailValid = false;
        confirmEmailError.innerText =
            'Emails provided do not match. Please enter a valid e-mail address.';
    } else {
        isConfirmEmailValid = true;
        confirmEmailError.innerText = '';
    }

    if (isNameValid && isEmailValid && isConfirmEmailValid) {
        isFormInvalid = false;
    } else {
        isFormInvalid = true;
    }

    if (isFormInvalid) {
        event.preventDefault();
    }
});
