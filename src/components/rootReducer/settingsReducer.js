// GET_SETTINGS

export const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SETTINGS': {
            return {
                ...state,
                getSetting: action.getSetting
            }
        }
        case 'POST_SETTINGS': {
            return {
                ...state,
                postSetting: action.postSetting
            }
        }
        default: return state;
    }
}