import React from 'react';

import Menu from '../../shared/components/Menu';


function Header({ page, setPage, theme, setTheme }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <header className='nav-bar'>
            <div className='nav-left'>
                <div className='header'>
                    <a href='' onClick={(e) => go(e, 'Home')} aria-label="Go Home">
                        <img
                            className='header-logo'
                            src='./images/logo.png'
                            alt='Cat-logo'
                        />
                    </a>
                    <h1 className='header-text'>Bay Cat Society</h1>
                </div>
            </div>
            <nav className='nav-right'>
                <Menu page={page} setPage={setPage} theme={theme} setTheme={setTheme} />
            </nav>
        </header>
    );
}

export default Header;
