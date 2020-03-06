import { combineReducers } from 'redux'
import { modalReducer } from './modalReducer'
import { loginReducer } from './loginReducer'
import { logOutReducer } from './logOutReducer'
import { channelReducer } from './channelReducer'

const appReducer = combineReducers({
    modalReducer,
    loginReducer,
    logOutReducer,
    channelReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'SUCCESS_LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action)
}

export default rootReducer