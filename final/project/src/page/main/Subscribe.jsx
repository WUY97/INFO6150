import React, { useState, useReducer } from 'react';

export default function Subscribe() {
    const formReducer = (state, event) => {
        return {
            ...state,
            [event.name]: event.value,
        };
    };

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                const nameError = document.getElementById('name-error');
                if (e.target.value === '') {
                    nameError.innerText = 'Please enter a name.';
                } else {
                    nameError.innerText = '';
                }
                break;
            case 'email':
                const emailError = document.getElementById('email-error');
                const regEmail =
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
                if (e.target.value === '' || !regEmail.test(e.target.value)) {
                    emailError.innerText =
                        'Please enter a valid e-mail address.';
                } else {
                    emailError.innerText = '';
                }
                break;
            case 'confirmEmail':
                const email = document.forms.subscribe.email;
                const confirmEmailError = document.getElementById(
                    'confirm-email-error'
                );
                if (e.target.value === '' || email.value !== e.target.value) {
                    confirmEmailError.innerText =
                        'Emails provided do not match. Please enter a valid e-mail address.';
                } else {
                    confirmEmailError.innerText = '';
                }
                break;
            default:
                break;
        }

        const isCheckbox = e.target.type === 'checkbox';
        setFormData({
            name: e.target.name,
            value: isCheckbox ? e.target.checked : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isFormInvalid = true;
        let isNameValid = false;
        let isEmailValid = false;
        let isConfirmEmailValid = false;
        let isAreaValid = false;

        const name = document.forms.subscribe.name;
        const email = document.forms.subscribe.email;
        const confirmEmail = document.forms.subscribe.confirmEmail;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        const area = document.forms.subscribe.area;

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const confirmEmailError = document.getElementById(
            'confirm-email-error'
        );
        const areaError = document.getElementById('area-error');

        if (name.value === '') {
            isNameValid = false;
            nameError.innerText = 'Please enter a name.';
        } else {
            isNameValid = true;
            nameError.innerText = '';
        }

        if (email.value === '' || !regEmail.test(email.value)) {
            isEmailValid = false;
            emailError.innerText = 'Please enter a valid e-mail address.';
        } else {
            isEmailValid = true;
            emailError.innerText = '';
        }

        if (confirmEmail.value === '' || email.value !== confirmEmail.value) {
            isConfirmEmailValid = false;
            confirmEmailError.innerText =
                'Emails provided do not match. Please enter a valid e-mail address.';
        } else {
            isConfirmEmailValid = true;
            confirmEmailError.innerText = '';
        }

        if (area.value === 'DEFAULT' || area.value === '') {
            isAreaValid = false;
            areaError.innerText = 'Please choose an area.';
        } else {
            isAreaValid = true;
            areaError.innerText = '';
        }

        if (isNameValid && isEmailValid && isConfirmEmailValid && isAreaValid) {
            isFormInvalid = false;
        } else {
            isFormInvalid = true;
        }

        if (isFormInvalid) {
            e.preventDefault();
        } else {
            setSubmitting(true);

            setTimeout(() => {
                setSubmitting(false);
            }, 10000);
        }
    };

    return (
        <main id='Subscribe'>
            <div className='main-container'>
                <h2>Get Adoption & Volunteer Program Updates 💌</h2>
                <div className='form-container'>
                    <h3>
                        Sign up so we can let you know about adoptable cats and
                        new volunteer roles!
                    </h3>
                    <form
                        onSubmit={handleSubmit}
                        name='subscribe'
                        id='form'
                        className='form'
                    >
                        <div className='form-text-item'>
                            <label htmlFor='name-input'>
                                Username{' '}
                                <i className='required-message'>* required</i>
                            </label>
                            <input
                                id='name-input'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                placeholder='Username'
                            />
                            <div
                                id='name-error'
                                className='error-message'
                            ></div>
                        </div>

                        <div className='form-text-item'>
                            <label htmlFor='email'>
                                E-mail{' '}
                                <i className='required-message'>* required</i>
                            </label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                onChange={handleChange}
                                placeholder='E-mail'
                            />
                            <div
                                id='email-error'
                                className='error-message'
                            ></div>
                        </div>

                        <div className='form-text-item'>
                            <label htmlFor='confirm-email'>
                                Confirm E-mail{' '}
                                <i className='required-message'>* required</i>
                            </label>
                            <input
                                type='text'
                                id='confirm-email'
                                name='confirmEmail'
                                onChange={handleChange}
                                placeholder='Confirm E-mail'
                            />
                            <div
                                id='confirm-email-error'
                                className='error-message'
                            ></div>
                        </div>

                        <div className='form-select-item'>
                            <label htmlFor='area'>
                                In what areas are you interessted in
                                volunteering?
                                <i className='required-message'>* required</i>
                            </label>
                            <select
                                id='area'
                                defaultValue={'DEFAULT'}
                                name='area'
                                onChange={handleChange}
                            >
                                <option disabled value='DEFAULT'>
                                    Plese select
                                </option>
                                <option value='1'>Foster</option>
                                <option value='2'>Animal Care</option>
                                <option value='3'>Customer Service</option>
                                <option value='4'>Support</option>
                            </select>
                            <div
                                id='area-error'
                                className='error-message'
                            ></div>
                        </div>

                        <div className='form-check-item'>
                            <input
                                type='checkbox'
                                id='wants-spam'
                                name='wantsSpam'
                                onChange={handleChange}
                            />
                            <label htmlFor='wants-spam'>
                                Do you want to receive offers and discounts from
                                nearby stores?
                            </label>
                        </div>
                        <button className='filled-button' aria-label='Submit form' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {submitting && (
                <div className='tertiary-container'>
                    You are submitting the following ✔️:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}>
                                <strong>{name}</strong>: {value.toString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
