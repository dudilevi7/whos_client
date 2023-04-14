import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: props => `${props.bgcolor1}`,
        border: props => `2px solid ${props.border}`,
        position: 'relative',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        letterSpacing: '0.11em',
        outline: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.8s ease',
        borderRadius: 3,
        color: props => `${props.color}`,
        boxShadow: props => `0px 3px 5px 2px ${props.shadow}`,
        padding: '10px 10px',
        margin: 8,
        '&:hover': {
            background: props => `${props.color}`,
            color: props => `${props.bgcolor1}`,
            border: props => `1px solid ${props.bgcolor1}`,
            fontWeight: 'bold'
        }
    },
    btnVertical: {},
    btnHorizontal: {},
}) 

const LDButton = props => {
    const { color, children, ...other } = props;
    const classes = useStyles(props);
    return (
            <Button className={classes.btn} {...other}>
                {children}
            </Button>
    )

}
LDButton.defaultProps = {
    color: 'black',
    bgcolor1: 'white',
    bgcolor2: 'white',
    shadow: 'white',
    border: 'transparent'
}
export default LDButton;