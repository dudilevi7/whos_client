import { makeStyles, Typography } from '@material-ui/core';
import { LaptopWindows } from '@material-ui/icons';
import React from 'react';
import davidLogo from '../../assests/david.png'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBlock: '10px',
    },
    img: {
        cursor: 'pointer',
        height: '42px',
        width: '160px'
    }
}))

const Copyright = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Typography variant="body2" align="center"> {'Copyright  © '}&nbsp;</Typography>
                <strong>{new Date().getFullYear()}{'.'}&nbsp;</strong>
                <img className={classes.img} src={davidLogo} onClick={() => window.open("https://davidlevi.netlify.app/")} />
            </div>
    );
}
export default Copyright;