import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/graph'>Graph</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
