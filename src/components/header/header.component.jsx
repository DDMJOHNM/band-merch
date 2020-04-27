import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link to="/">
            <span className="logo">{"MY STORE"}</span>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;