import React, { useState } from 'react';

function DarkMode({theme, setTheme}) {
    // const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };

    return (
        <button className='text-button' aria-label='Switch theme' onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark 🌒' : 'Light ☀️'} Theme</button>
    );
}

export default DarkMode;
