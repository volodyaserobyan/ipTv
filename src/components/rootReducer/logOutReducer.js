export const logOutReducer = (state = {}, action) => {
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