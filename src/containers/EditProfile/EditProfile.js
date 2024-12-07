import { Card, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LDButton from '../../components/customs/LDButton';
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';
import { REACT_APP_UPDATE_ROUTE, REACT_APP_LOGIN_ROUTE, REACT_APP_WHOS_API, REACT_APP_IMG_ROUTE } from '../../constants/constants';
import { SET_LOGIN } from '../../redux/auth/authTypes';
import { validateUsername } from '../../services/validateService';

const useStyles = makeStyles({
    profile: {
        verticalAlign: 'middle',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '1px solid #ccc',
    },
    epContainer : {
        display: 'flex',
        flexDirection:'column',
        alignItems : 'center',
        justifyContent:'center',
        paddingBlock:'20px'
    }
})

const EditProfile = props => {
    const classes = useStyles();
    const usernameImg = useSelector(state => state.auth.userData.img);
    const currentUsername = useSelector(state => state.auth.userData.username);
    const isGoogle = useSelector(state => state.auth.userData.isGoogle);
    const imgUrl = isGoogle ? usernameImg : REACT_APP_WHOS_API + REACT_APP_IMG_ROUTE + usernameImg;
    
    const [ nextUsername, setNextUsername ] = useState();
    const [ file , setFile ] = useState()
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!nextUsername)
            setNextUsername(currentUsername)
    }, [currentUsername, nextUsername])

    const usernameChangeHandler = (event) =>{
        setNextUsername(event.target.value)
    }
    
    const fileHandler = event => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const onUpdateProfile = () => {
        if (validateUsername(nextUsername))
        {
            const obj = { username: nextUsername ,preUsername: currentUsername}
            const json = JSON.stringify(obj);

            const formData = new FormData();
            formData.append('file', file);
            formData.append('restData', json);

            axios.put(REACT_APP_WHOS_API+REACT_APP_UPDATE_ROUTE, formData)
                .then(response => {
                    dispatch({type : SET_LOGIN, userData : response.data})
                })
                .catch(err => console.log(err))
            }
    }

    return (
        <Container maxWidth="md">
            <Card className={classes.epContainer}>
                <ResponsiveTypography component="h1" variant="h5">עריכת פרופיל</ResponsiveTypography>
                <form action="#">
                    <div className="imgUpd">
                        
                        <img className={classes.profile} src={imgUrl} alt="profileImg" />
                        <Typography variant="h6">{currentUsername}</Typography>
                        <label htmlFor="upload-file">
                            <input id="upload-file" type="file" onChange={fileHandler} name="upload-file" accept="image/*" style={{ display: 'none' }} />
                            <LDButton startIcon={<PhotoCamera />} bgcolor1="#0079ED" color="white" component="span">העלאת תמונה</LDButton>
                        </label>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            helperText={nextUsername && !validateUsername(nextUsername) && " שם משתמש חייב להתחיל באות , להסתיים באות או ספרה ולהכיל בין 4-10 תווים"}
                            error={(nextUsername && !validateUsername(nextUsername))? true : false}
                            onChange={usernameChangeHandler}
                            name="username"
                            label={"שינוי שם משתמש"}
                            type="name"
                            id="username"
                            autoComplete="current-username" />
                        <LDButton fullWidth bgcolor1="#2b2b2b" color="white" onClick={onUpdateProfile}>עדכן</LDButton>
                    </div>
                </form>

            </Card>
        </Container>)
}
export default EditProfile;