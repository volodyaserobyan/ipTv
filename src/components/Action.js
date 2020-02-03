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
            .then(res => {
                // console.log(res)
                return res
            }).then(info => {
                // console.log(info)
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
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => response.json())
            .then(res => {
                // console.log(res)
                return res
            }).then(logOut => {
                // console.log(logOut)
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