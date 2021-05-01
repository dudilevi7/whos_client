import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/auth/authActions';
import { validateEmail, validatePassword, validateUsername } from '../../services/validateService';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : 'white',
        padding : '10px 20px',
        borderRadius : '10px',
        boxShadow : '0px 0px 3px 0px #2b2b2b'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#0079ED',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
       
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#0079ED',
        '&:hover':{
            backgroundColor : '#2b2b2b'
        }
    },
}));

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch();
    const classes = useStyles();

    const usernameChangeHandler = event => { setUsername(event.target.value) }
    const passwordChangeHandler = event => { setPassword(event.target.value) }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (validateUsername(username) && validatePassword(password))
            dispatch(setLogin(username , password , rememberMe));
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    כניסה
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            helperText={username && !validateUsername(username) && " שם משתמש חייב להתחיל באות , להסתיים באות או ספרה ולהכיל בין 4-10 תווים"}
                            error={(username && !validateUsername(username))? true : false}
                            onChange={usernameChangeHandler}
                            name="password"
                            label="שם משתמש"
                            type="name"
                            id="username"
                            autoComplete="current-password" />
                      <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            helperText={password && !validatePassword(password) && "סיסמה חייבת להכיל אות גדולה אחת באנגלית , מספר ואורך של בין 8-10 תווים"}
                            error={(password && !validatePassword(password))? true : false}
                            onChange={passwordChangeHandler}
                            name="password"
                            label="סיסמה"
                            type="password"
                            id="password"
                            autoComplete="current-password" />
                    <FormControlLabel className={classes.label} control={<Checkbox value="remember" color="secondary" onClick={() => setRememberMe(prev => !prev)} />} label="זכור אותי" />
                    <Button className={classes.submit} startIcon={<VpnKeyIcon/>} fullWidth variant="contained" color="secondary" onClick={onSubmit} >
                        התחבר
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Login;