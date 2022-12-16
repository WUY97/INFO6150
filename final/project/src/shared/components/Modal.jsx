import React from 'react';
import ButtonMailTo from './ButtonMailTo';

function Modal({ handleClose, cat }) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <img className='modal-image' src={cat.image} alt={cat.name} />
                <div className='modal-text'>
                    <h3>{cat.name}</h3>
                    <p>ID#: {cat.id}</p>
                    <p>Age: {cat.age}</p>
                    <p>Breed: {cat.breed}</p>
                    <p>Weight: {cat.weight}</p>
                    <p>Sex: {cat.sex}</p>
                    <p>Location: {cat.location}</p>
                    <h4>About me</h4>
                    <p>{cat.description}</p>
                    <div className='buttons'>
                        <ButtonMailTo
                            email='wu.yito@northeastern.edu'
                            label='Email for Availability'
                            subject={`Inquiry for ${cat.id} ${cat.name}`}
                        />
                        <button
                            className='outlined-button'
                            onClick={handleClose}
                            aria-label='Close'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
