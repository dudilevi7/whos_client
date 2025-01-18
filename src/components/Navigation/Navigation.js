import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Close, DashboardOutlined } from '@material-ui/icons';
import LDButton from '../customs/LDButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/auth/authActions';
import { useHistory } from 'react-router';
import { REACT_APP_WHOS_API, REACT_APP_IMG_ROUTE } from '../../constants/constants';
import './Navigation.css';

const imgServer = REACT_APP_WHOS_API + REACT_APP_IMG_ROUTE;

const Navigation = props => {
    const [showDrawer, setShowDrawer] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const usernameImg = useSelector(state => state.auth.userData.img);
    const username = useSelector(state => state.auth.userData.username);
    const isGoogle = useSelector(state => state.auth.userData.isGoogle);
    const isAdmin = useSelector(state => state.auth.isAdmin) || false;
    const imgUrl = `${isGoogle ?  "" : imgServer }` + usernameImg;


    const dispatch = useDispatch();
    const history = useHistory();

    const onLogoutClick = () => {
        dispatch(setLogout());
        history.push('/')
    }
    const onStatsClick = () => onChangeScreen('statistics')
    const onEditProfileClick = () => {
        history.push('/ep')
    }
    const onHomeClick = () => onChangeScreen('homepage')
    const onChangeScreen = (path) => {
        setShowDrawer(false);
        history.push(`/${path}`);
    }
    const onAddQuestions = () => onChangeScreen('add-question') 
    return (
        <div>
            <div className="webBar">
                <React.Fragment key="right">
                        {showDrawer && 
                        <div className="col g5 drawers">
                            <Close htmlColor='black' className='closeIcon' onClick={() => setShowDrawer(false)} />
                            <Avatar className="userImg drawer" src={imgUrl} onClick={() => setShowDrawer(true)}  />
                            <strong className='drawers__username'>{username}</strong>
                            {isAdmin && <div className="barBtn row g5" onClick={onAddQuestions}>
                                פאנל ניהול
                                <DashboardOutlined className="regularIcon" />
                                </div>
                                }
                            <div className="barBtn" onClick={onHomeClick}>בית</div>
                            {!isGoogle && <div className="barBtn" onClick={onEditProfileClick}>פרופיל</div>}
                            <div className="barBtn stats" onClick={onStatsClick}>סטטיסטיקה</div>
                        </div>}
                </React.Fragment>
                {isLoggedIn &&
                    (
                        <div className="logout">
                            <Avatar className="userImg pointer" src={imgUrl} onClick={() => setShowDrawer(true)}  />
                            <LDButton onClick={onLogoutClick} startIcon={<ExitToAppIcon />} size="small" bgcolor1="whitesmoke" border="none" color="#0079ED" shadow='transparent'>התנתק</LDButton>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Navigation;
