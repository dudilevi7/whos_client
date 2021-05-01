import { LOGIN_API } from "../../constants/constants"
import fetchData from "../../services/fetchData"
import { saveToLocalStorage } from "../../services/validateService"
import { LOGIN_FAILED, LOGIN_START, SET_LOGIN, SET_LOGOUT } from "./authTypes"

export const setLogin = (username , password , rememberMe) => {
    return async dispatch => {
        dispatch({type : LOGIN_START})
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        const data = await fetchData(LOGIN_API, options)
            if (data) {
                dispatch({type : SET_LOGIN , userData : data })
                if (rememberMe)
                    saveToLocalStorage('userData', data)
            }
            else 
                dispatch({type : LOGIN_FAILED , error : 'Login has been failed!'})
    }
}
export const setLogout = () => ({
    type : SET_LOGOUT
})