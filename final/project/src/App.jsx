import React, { useState } from 'react';

import './App.css';

import Header from './page/header/Header';
import Home from './page/main/Home';
import AvailableCats from './page/main/AvailableCats';
import Volunteer from './page/main/Volunteer';
import Footer from './page/footer/Footer';
import Subscribe from './page/main/Subscribe';
import Terms from './page/main/Terms';
import Privacy from './page/main/Privacy';

function App() {
    const [page, setPage] = useState('Home');
    const [theme, setTheme] = useState('light');

    return (
        <div className={`app ${theme}`}>
            <Header page={page} setPage={setPage} theme={theme} setTheme={setTheme} />
            {page === 'Home' && <Home setPage={setPage} />}
            {page === 'AvailableCats' && <AvailableCats />}
            {page === 'Volunteer' && <Volunteer />}
            {page === 'Subscribe' && <Subscribe />}
            {page === 'Privacy' && <Privacy />}
            {page === 'Terms' && <Terms />}
            <Footer setPage={setPage} />
        </div>
    );
}

export default App;
