export const modalReducer = (state = {}, action) => {

    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state,
                isModal: action.isModal
            }
        default: return state;
    }
}