import React from 'react';
import './Header.css'
import whos_logo from '../../assests/whos_logo.png'
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();
    
    const onLogoClick = () => {
        history.push('/')
    }
    return (
        <div>
            <Navigation/>
            <Logo src = {whos_logo} onClick={onLogoClick}/>
        </div>
    )

}

export default Header;