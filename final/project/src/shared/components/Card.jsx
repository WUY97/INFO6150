import React from 'react';

function Card({ cat, handleOpen }) {
    return (
        <div className='card'>
            <img className='card-image' src={cat.image} alt={cat.name} />
            <h2 className='card-title'>{cat.name}</h2>
            <p>
                {cat.breed}, {cat.age}
            </p>
            <button className='filled-button' onClick={() => handleOpen(cat.id)} aria-label='Open Full Profile'>
                View Full Profile
            </button>
        </div>
    );
}

export default Card;
