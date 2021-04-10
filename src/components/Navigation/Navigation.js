import React, { useState } from 'react';
import {  Drawer } from '@material-ui/core';
import './Navigation.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Close } from '@material-ui/icons';

const Navigation = props =>{
    const [showDrawer,setShowDrawer] = useState(false);
    return (
        <div>
            <div className="webBar">
                <div className="barBtn">בית</div>
                <div className="barBtn">פרופיל</div>
                <div className="barBtn">סטטיסטיקה</div>
            </div>
            <div className="mobileBar">
                    <MenuIcon htmlColor='white' onClick={()=>setShowDrawer(true)}/>
                    <React.Fragment key = "right">
                        <Drawer variant='persistent' anchor='right' open={showDrawer} onClose={()=>setShowDrawer(false)}>
                            <Close htmlColor='black' onClick={()=>setShowDrawer(false)}/>
                            <div className="barBtn">בית</div>
                            <div className="barBtn">פרופיל</div>
                            <div className="barBtn">סטטיסטיקה</div>
 
                        </Drawer>
                    </React.Fragment>
            </div>
        </div>
      
    )
}

export default Navigation;
