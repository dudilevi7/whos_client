import { useEffect, useState } from "react";
import CustomTable from "../../components/Table/CustomTable"
import './Register.css'
import axios from "axios";
import { Avatar, Card, Container, FormControlLabel, Input, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/auth/authActions";
import { WHOS_API } from "../../constants/constants";
import fetchData from "../../services/fetchData";
import ResponsiveTypography from "../../components/customs/ResponsiveTypography";
import LDButton from "../../components/customs/LDButton";
import { AddCircle, PhotoCamera } from "@material-ui/icons";
import { validatePassword, validateUsername } from "../../services/validateService";
import { SET_LOGIN } from "../../redux/auth/authTypes";
import { useHistory } from "react-router";

const Register = props => {

    const [data, setData] = useState([]);
    const [file, setFile] = useState();

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchQues = async () => {
            const newData = await fetchData(WHOS_API);
            if (newData) setData(newData)
        }
        fetchQues();
    }, [])

    
    const usernameChangeHandler = event => { setUsername(event.target.value) }
    const passwordChangeHandler = event => { setPassword(event.target.value) }

    // const onDelete = id => {
    //     const updatedData = data.filter(ques => ques._id !== id)
    //     setData(updatedData);
    // }
    // const onUpdate = id => {
    //     const updatedIndex = data.findIndex(elem => elem._id === id);
    //     const element = { _id: 'update!', username: 'test', Type: 'test' }
    //     const updatedArray = [...data];
    //     updatedArray[updatedIndex] = element;
    //     setData(updatedArray)
    // }
    // const onAdd = () => {
    //     const element = { _id: 'test', username: 'test', Type: 'test' }
    //     const updatedArray = [...data].concat(element);
    //     setData(updatedArray)
    // }


    const fileHandler = event => {
        const newFile = event.target.files[0];
        console.log(newFile)
        setFile(newFile);
    }
    const onRegisterClick = () => {

        const obj = { username: username, password: password , highScore: { result: '0' } }
        const json = JSON.stringify(obj);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('restData', json);

        axios.post("http://localhost:3001/user/register", formData)
            .then(response => {
                dispatch({type : SET_LOGIN, userData : response.data})
            })
            .catch(err => console.log(err))
    }

    const onLogoutClick = () => {
        dispatch(setLogout())
    }

    return (
        <Container maxWidth="md">
            <Card className="cardContainer">
                <ResponsiveTypography component="h1" variant="h5">הרשמה מהירה</ResponsiveTypography>
                <form action="#">
                    <div className="imgUpd">
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
                        <label htmlFor="upload-file">
                            <input id="upload-file" type="file" onChange={fileHandler} name="upload-file" accept="image/*" style={{ display: 'none' }} />
                            <LDButton  startIcon={<PhotoCamera/>}  bgcolor1="#0079ED" color="white" component="span">העלאת תמונה</LDButton>
                        </label>


                    </div>
                    <LDButton fullWidth bgcolor1="#2b2b2b" color="white" onClick={onRegisterClick}>הירשם</LDButton>
                </form>

            </Card>
        </Container>
    )
}
export default Register;