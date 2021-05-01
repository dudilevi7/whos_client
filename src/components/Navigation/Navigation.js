import React, { useState } from 'react';
import { Avatar, Divider, Drawer, makeStyles, Typography } from '@material-ui/core';
import './Navigation.css';
import { Close } from '@material-ui/icons';
import LDButton from '../customs/LDButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/auth/authActions';
import { useHistory } from 'react-router';
import { IMG_API } from '../../constants/constants';

const useStyles = makeStyles({
    root : {
        cursor : 'pointer',
        boxShadow : '0px 0px 5px 0px #2b2b2b',
        '&:hover': {
            opacity : '75%'
        }
    },
    root2 : {
        cursor : 'pointer',
        boxShadow : '0px 0px 5px 0px #2b2b2b',
        '&:hover': {
            opacity : '75%'
        },
        marginInline : 'auto',
        marginBlock : '10px'
    }
})

const Navigation = props => {
    const [showDrawer, setShowDrawer] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const usernameImg = useSelector(state => state.auth.userData.img);
    const username = useSelector(state=> state.auth.userData.username);

    const dispatch = useDispatch();
    const classes = useStyles();
    let history = useHistory();

    const onLogoutClick = () => {
        dispatch(setLogout());
        history.push('/')
    }

    return (
        <div>
            <div className="webBar">
               
                <React.Fragment key="right">
                    <Drawer variant='persistent' anchor='right' open={showDrawer} onClose={() => setShowDrawer(false)}>
                        <Close htmlColor='black' onClick={() => setShowDrawer(false)} />
                        <Avatar className={classes.root2} src={IMG_API + usernameImg} onClick={() => setShowDrawer(true)}  />
                        <strong>{username}</strong>
                        <Divider/>
                        <div className="barBtn">בית</div>
                        <div className="barBtn">פרופיל</div>
                        <div className="barBtn">סטטיסטיקה</div>
                    </Drawer>
                </React.Fragment>
                {isLoggedIn &&
                    (
                        <div className="logout">
                            <Avatar className={classes.root} src={IMG_API + usernameImg} onClick={() => setShowDrawer(true)}  />
                            <LDButton onClick={onLogoutClick} startIcon={<ExitToAppIcon />} size="small" bgcolor1="whitesmoke" border="none" color="#0079ED" shadow='transparent'>התנתק</LDButton>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Navigation;
