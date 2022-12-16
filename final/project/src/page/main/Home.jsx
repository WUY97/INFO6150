import React from 'react';

function Home({ setPage }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }
    return (
        <main id='Home'>
            <h2>Help Cats in the Bay Area 😸</h2>
            <div className='card1'>
                <div className='home-card-content'>
                    <img
                        className='card1-image'
                        src='./images/kittens.jpg'
                        alt='Kittens'
                    />
                    <h2>Adopt a Cat</h2>
                    <p>Give hope to homeless pets this holiday season.</p>
                    <p>
                        Find your new furry friend by visiting our animal
                        shelters or applying to meet animals available.
                    </p>
                    <button className='filled-button' onClick={(e) => go(e, 'AvailableCats')}  aria-label='Go to adoptable cat page'>Go to Adopt</button>
                </div>
            </div>
            <hr />
            <div className='card2'>
                <img
                    className='card2-image'
                    src='./images/cat-and-human.jpg'
                    alt='Cat in Snow'
                />
                <h2>Volunteer Opportunities</h2>
                <p>
                    Volunteers make an incredible difference in the lives of the
                    homeless animals that come in through our doors everyday.
                </p>
                <p>
                    There are dozens of roles available for volunteers – find
                    out more about some of the different areas where volunteers
                    can make a difference!
                </p>
                <button className='filled-button' onClick={(e) => go(e, 'Volunteer')} aria-label='Go to volunteer opportunities page'>Go to Volunteer</button>
            </div>
        </main>
    );
}

export default Home;
