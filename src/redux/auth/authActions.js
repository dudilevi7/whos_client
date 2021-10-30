import { REACT_APP_WHOS_API, REACT_APP_LOGIN_ROUTE, GOOGLE_LOGIN_PATH } from "../../constants/constants"
import fetchData from "../../services/fetchData"
import { saveToLocalStorage } from "../../services/validateService"
import { LOGIN_FAILED, LOGIN_START, SET_LOGIN, SET_LOGOUT } from "./authTypes"

export const setLogin = (username, password, rememberMe) => {
    return async dispatch => {
        dispatch({ type: LOGIN_START })
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        const data = await fetchData(REACT_APP_WHOS_API + REACT_APP_LOGIN_ROUTE, options)
        if (data) {
            dispatch({ type: SET_LOGIN, userData: data })
            if (rememberMe)
                saveToLocalStorage('userData', data)
        }
        else
            dispatch({ type: LOGIN_FAILED, error: 'Login has been failed!' })
    }
}
export const setGoogleLogin = (data, rememberMe) => {
    return async dispatch => {
        // dispatch({type: LOGIN_START}) 
        // const options = {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }
        // const res = await fetchData(REACT_APP_WHOS_API+GOOGLE_LOGIN_PATH, options)
        // if (res) {
        //     dispatch({type : SET_LOGIN , userData : data })
        //     if (rememberMe)
        //         saveToLocalStorage('userData', data)
        // }
        // else 
        //     dispatch({type : LOGIN_FAILED , error : 'Login has been failed!'})

        return Promise.resolve(dispatch({ type: SET_LOGIN, userData: data.profile }))
    }
}
export const setLogout = () => ({
    type: SET_LOGOUT
})