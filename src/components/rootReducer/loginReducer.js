export const loginReducer = (state = {}, action) => {
console.log(action)
    switch (action.type) {
        case 'SUCCESS_LOGIN':
            return {
                ...state,
                info: action.info
            }
        default: return state;
    }
}