import React, { useState } from 'react';

import {
    validateUsername,
    validateEmail,
    validateConfirmEmail,
} from '../utils/validators';

function InputWithLabel(props) {
    const {
        value,
        setValue,
        name,
        handleChange,
        label,
        type,
        placeholder,
        errorMessage,
        id,
        required,
    } = props;

    const [valid, setValid] = useState(false);

    return (
        <div>
            <label htmlfor={id}>
                {label}
                {required ? <i> * Required</i> : ''}
            </label>
            <input
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
            />
            {!valid ? <i>{errorMessage}</i> : ''}
        </div>
    );
}

export default InputWithLabel;
