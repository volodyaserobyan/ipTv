import { combineReducers } from 'redux'
import { modalReducer } from './modalReducer'
import { loginReducer } from './loginReducer'
import { logOutReducer } from './logOutReducer'

const rootReducer = combineReducers({
    modalReducer,
    loginReducer,
    logOutReducer
})

export default rootReducer