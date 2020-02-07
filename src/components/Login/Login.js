import React, { useState, useEffect } from 'react'
import Logo from '../../assets/vector22 2.png'
import userIcon from '../../assets/Group 10.png'
import lockIcon from '../../assets/Group.png'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth } from '../../helpers/Utilities'
import './Login.scss'
import { isAuthLogin } from '../Action'
let _ = require('lodash')

const Login = props => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isRobot, setIsRobot] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        const sendObj = {
            email: userName,
            password: password
        }

        props.fetchData('http://192.168.0.139:8000/api/login', sendObj)
        console.log(sendObj)
    }

    useEffect(() => {
        if (props.loginReducer != undefined) {
            localStorage.setItem('token', props.loginReducer.success.access_token)
            localStorage.setItem('userName', props.loginReducer.user.name)
            setIsSuccess(true)
        }
    }, [props.loginReducer != undefined && props.loginReducer.success])

    if (isAuth()) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/main`
            }} />
        )
    }

    return (
        <section className="Login">
            <div className="Login-Img">
                <img src={Logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="Login-Form">
                <div className="Login-Form-Inp">
                    <img src={userIcon} alt="" />
                    <input
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Login"
                        name="userName"
                        type="email"
                        required />
                </div>
                <div className="Login-Form-Inp">
                    <img src={lockIcon} alt="" />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        name="password"
                        type="password"
                        required />
                </div>
                <div className="Login-Form-Checkbox">
                    <input
                        value={isRobot}
                        onChange={() => setIsRobot(!isRobot)}
                        type="checkbox"
                        defaultChecked={isRobot} />
                    <p>I’m not a robot</p>
                </div>
                <input
                    className="Login-Form-Submit"
                    type="submit"
                    value="Log In" />
            </form>
        </section>
    )

}

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, infoObj) => dispatch(isAuthLogin(url, infoObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)