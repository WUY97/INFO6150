import React from 'react';

function Footer({ setPage }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <footer>
            <div className='left-footer'>
                <p>55 River Oaks Place, CA 95134</p>
                <p>+1-408-799-2963</p>
                <a href='mailto:wu.yito@northeastern.edu'>
                    wu.yito@northeastern.edu
                </a>
            </div>
            <div className='right-footer'>
                <p>© 2022 Bay Cat Society - All rights reserved</p>
                <a href='' onClick={(e) => go(e, 'Privacy')}>Privacy Policy</a>
                <p>{' '}</p>
                <a href=''  onClick={(e) => go(e, 'Terms')}>Term of Use</a>
            </div>
        </footer>
    );
}

export default Footer;
