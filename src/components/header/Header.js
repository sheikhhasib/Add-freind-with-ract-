import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="main-header">
            <div className="header">
                <div className="nav-bar">
                    <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Our Service</a>
                    </nav>
                </div>
                <div className="SignIn">
                    <button className="btn"><FontAwesomeIcon icon={ faSignInAlt }/> Sign in</button>
                </div>
                
            </div>
        </div>
    );
};

export default Header;