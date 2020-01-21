export const isModalActive = bool => {
    return {
        type: 'MODAL_OPEN',
        isModal: bool
    }
}