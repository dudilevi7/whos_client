import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxThunk from 'redux-thunk';
import authReducer from "./auth/authReducers";

const rootReducer = combineReducers({
    auth : authReducer
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))


export default store;