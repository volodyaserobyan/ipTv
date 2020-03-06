export const isModalActive = obj => {
    return {
        type: 'MODAL_OPEN',
        isModal: obj
    }
}

export const isModalActiveDropDown = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN',
        isModalDropDown: bool
    }
}

export const isModalActiveDropDownExtend = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN_EXTEND',
        isModalDropDownExtend: bool
    }
}

export const isModalActiveDropDownStat = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN_STAT',
        isModalDropDownStat: bool
    }
}

export const isModalActiveDropDownEpg = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN_EPG',
        isModalDropDownEpg: bool
    }
}

export const isModalActiveDropDownLink = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN_LINK',
        isModalDropDownLink: bool
    }
}

export const isModalActiveDropDownEdit = bool => {
    return {
        type: 'MODAL_OPEN_DROPDOWN_EDIT',
        isModalDropDownEdit: bool
    }
}

export const isAuthLogin = (url, infoObj) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoObj)
        }).then((response) => response.json())
            .then(info => {
                dispatch({
                    type: "SUCCESS_LOGIN",
                    info: info
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    info: error
                })
            })
    }
}

export const channelList = url => {

    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => response.json())
            .then(channel => {
                dispatch({
                    type: "GET_CHANNELS",
                    channel: channel
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    info: error
                })
            })
    }
}

export const LogOut = url => {
    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => response.json())
            .then(res => {
                return res
            }).then(logOut => {
                dispatch({
                    type: "SUCCESS_LOGOUT",
                    logOut: logOut
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    info: error
                })
            })
    }
}