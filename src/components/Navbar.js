import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'
import { ReactComponent as Logo } from './logo.svg'
const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <div>
                <Link to="Gallery">Gallery</Link>
                <a className="galactikka" href="https://galactikka.com">Galactikka</a>
            </div>
        </nav>
    );
}
export default Navbar;