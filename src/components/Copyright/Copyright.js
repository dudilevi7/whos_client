import { Typography } from '@material-ui/core';
import React from 'react';
import davidLogo from '../../assests/david.png';
import useStyles from './Copyright.css';


const Copyright = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Typography variant="body2" align="center"> {'Copyright  © '}&nbsp;</Typography>
                <strong>{new Date().getFullYear()}{'.'}&nbsp;</strong>
                <img className={classes.img} alt='davidlevi' src={davidLogo} onClick={() => window.open("https://davidlevi.netlify.app/")} />
            </div>
    );
}
export default Copyright;