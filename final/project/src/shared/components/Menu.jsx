import React, { useState } from 'react';

import SkipLink from './SkipLink';
import DarkMode from './DarkMode';

function Menu({ page, setPage, theme, setTheme }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='dropdown'>
            <button
                id='dropbtn'
                className='text-button'
                onClick={handleOpen}
                aria-label='Open Menu'
            >
                <i className='gg-menu'></i>
            </button>
            <div className={`dropdown-content ${open ? 'show' : ''}`}>
                <SkipLink page={page} />
                <button
                    className='text-button'
                    onClick={(e) => go(e, 'Home')}
                    aria-label='Go Home'
                >
                    Home
                </button>

                <button
                    className='text-button'
                    onClick={(e) => go(e, 'AvailableCats')}
                    aria-label='Go to adoptable cats page'
                >
                    Available Cats
                </button>
                <button
                    className='text-button'
                    onClick={(e) => go(e, 'Volunteer')}
                    aria-label='Go to volunteer opportunities page'
                >
                    Volunteer
                </button>
                <button
                    className='text-button'
                    href=''
                    onClick={(e) => go(e, 'Subscribe')}
                    aria-label='Go to subscribe page'
                >
                    Subscribe
                </button>
                <DarkMode theme={theme} setTheme={setTheme} />
            </div>
        </div>
    );
}

export default Menu;
