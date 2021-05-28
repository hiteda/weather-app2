import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper App-header blue-grey darken-3">
                <a href="/" className="brand-logo">Weather App</a>
            </div>
        </nav>
    );
};

export default Header;