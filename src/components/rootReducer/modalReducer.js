export const modalReducer = (state = {}, action) => {

    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state,
                isModal: action.isModal
            }
        case 'MODAL_OPEN_DROPDOWN':
            return {
                ...state,
                isModalDropDown: action.isModalDropDown
            }
        case 'MODAL_OPEN_DROPDOWN_EDIT':
            return {
                ...state,
                isModalDropDownEdit: action.isModalDropDownEdit
            }
        default: return state;
    }
}