export const logOutReducer = (state = {}, action) => {
    console.log(action)
        switch (action.type) {
            case 'SUCCESS_LOGOUT':
                return {
                    ...state,
                    logOut: action.logOut
                }
            default: return state;
        }
    }