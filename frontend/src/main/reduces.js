import { combineReducers } from 'redux';
import todoReducer from '../main/todoReducer'


const rootReducers = combineReducers({
    todo: todoReducer
})

export default rootReducers;