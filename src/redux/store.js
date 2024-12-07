import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxThunk from 'redux-thunk';
import authReducer from "./auth/authReducers";
import questionsReducer from "./questions/reducer";
import statsReducer from "./stats/reducer";

const rootReducer = combineReducers({
    auth : authReducer, 
    questions: questionsReducer,
    stats: statsReducer,
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))


export default store;