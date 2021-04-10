import React from 'react';
import './Header.css'
import whos_logo from '../../assests/whos_logo.png'
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation/>
            <Logo src = {whos_logo}/>
        </div>
    )

}

export default Header;