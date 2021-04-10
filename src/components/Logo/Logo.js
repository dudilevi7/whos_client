import React from 'react';
import './Logo.css'

const Logo = props => {
    const {src , ...other} = props;
    
    return(
            
                   <div>
                        <img className="logo" alt="logo" src={src} {...other}/>
                    </div> 
           )
}
export default Logo;