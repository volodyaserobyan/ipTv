export const channelReducer = (state = {}, action) => {
        switch (action.type) {
            case 'GET_CHANNELS':
                return {
                    ...state,
                    channel: action.channel
                }
            default: return state;
        }
    }