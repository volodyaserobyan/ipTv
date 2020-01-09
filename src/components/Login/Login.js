import React, { useState } from 'react'
import Logo from '../../assets/vector22 2.png'
import userIcon from '../../assets/Group 10.png'
import lockIcon from '../../assets/Group.png'
import { Redirect } from 'react-router-dom'

import './Login.scss'

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isRobot, setIsRobot] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        setIsAuth(true)
    }

    if (isAuth) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/main`
            }} />
        )
    }
    else {
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
                            type="text"
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

}

export default Login