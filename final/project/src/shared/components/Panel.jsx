import React from 'react';

function Panel({ shelter }) {
    return (
        <div className='panel'>
            <div className='panel-title'>
                <a href={shelter.website} title='Go to Official Site' aria-label='Go to Official Site'>
                    <h3>{shelter.title}</h3>
                </a>
            </div>
            <div className='panel-address'>
                <a href={shelter.redirect} title='View in Google Map' aria-label='View in Google Map'>
                    {shelter.address}
                </a>
            </div>

            <p className='panel-description'>{shelter.description}</p>
            <iframe
                className='panel-map'
                src={shelter.map}
                width='400'
                height='400'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title={shelter.title}
            />
        </div>
    );
}

export default Panel;
