export const logOutReducer = (state = {}, action) => {
    console.log(action, 'LogOut')
        switch (action.type) {
            case 'SUCCESS_LOGOUT': {
                localStorage.clear()
                return {
                    ...state,
                    logOut: action.logOut
                }
            }
            default: return state;
        }
    }