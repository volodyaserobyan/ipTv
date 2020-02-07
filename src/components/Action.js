export const isModalActiveDropDown = data => {
    return {
        type: 'MODAL_OPEN_DROPDOWN',
        isModalDropDown: data
    }
}

export const isModalActive = obj => {
    return {
        type: 'MODAL_OPEN',
        isModal: obj
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
                console.log(error)
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
                console.log(error)
                dispatch({
                    type: 'ERROR',
                    info: error
                })
            })
    }
}