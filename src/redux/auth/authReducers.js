import { loadFromLocalStorage, removeFromLocalStorage } from "../../services/validateService";
import { LOGIN_FAILED, LOGIN_START, SET_LOGIN, SET_LOGOUT } from "./authTypes";

const initialState = {
    isLoggedIn : false,
    userData : {},
    token : '', 
    error : '',
    isLoading : false,
}

const authReducer = (state = initialState , action = {} ) => {
    switch(action.type){
        case SET_LOGIN : {
           return {
               ...state , isLoggedIn : true ,userData : action.userData , token: '', error : '',  isLoading : false
           } 
        }
        case LOGIN_FAILED : {
            return {
                ...state ,isLoggedIn : false , error : action.error , isLoading : false
            }
        }
        case LOGIN_START : {
            return {
                ...state ,isLoggedIn : false , error : '' ,isLoading : true
            }
        }
        case SET_LOGOUT : {
            removeFromLocalStorage('userData')
            return {
                ...state, isLoggedIn : false , error : '', token : '', isLoading : false , userData : {} 
            }
        }
        
        default : {
            const userData = loadFromLocalStorage('userData')
            if(userData)
                return {
                    ...state , isLoggedIn : true ,userData : userData , token: '', error : '',  isLoading : false
                }
            return state
        }
    }
}

export default authReducer ;