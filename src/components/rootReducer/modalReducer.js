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
        case 'MODAL_OPEN_DROPDOWN_EXTEND':
            return {
                ...state,
                isModalDropDownExtend: action.isModalDropDownExtend
            }
        case 'MODAL_OPEN_DROPDOWN_STAT':
            return {
                ...state,
                isModalDropDownStat: action.isModalDropDownStat
            }
        case 'MODAL_OPEN_DROPDOWN_EPG':
            return {
                ...state,
                isModalDropDownEpg: action.isModalDropDownEpg
            }
        case 'MODAL_OPEN_DROPDOWN_LINK':
            return {
                ...state,
                isModalDropDownLink: action.isModalDropDownLink
            }
        default: return state;
    }
}