import React from 'react';

function ButtonMailTo({ email, label, subject }) {
    return (
        <button
            className='filled-button'
            onClick={(e) => {
                window.location = 'mailto:' + email.toString() + '?subject=' + subject;
            }}
            aria-label='Send Email'
        >
            {label}
        </button>
    );
}

export default ButtonMailTo;
