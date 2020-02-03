import React, { useState } from 'react'
import ipTv from '../../assets/iptv3.png'
import dashIcon from '../../assets/Group 19.png'
import tvIcon from '../../assets/VectorTv.png'
import userIcon from '../../assets/VectorUser.png'
import addUserIcon from '../../assets/VectoraddUser.png'
import settingsIcon from '../../assets/Settings.png'
import RightArrow from '../../assets/RightArrow.png'
import TopArrow from '../../assets/TopArrow.png'
import CreditLogsImage from '../../assets/CreditLogsImage.png'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import './Asside.scss'
import { LogOut } from '../Action'

const Asside = props => {

    const [isDropDown, setDropDown] = useState(false)

    const handleDropDown = identifier => {
        if (identifier == 1) {
            setDropDown(false)
        }
        else if (identifier == 2) {
            setDropDown(true)
        }
    }

    const handleLogOut = () => {
        props.logOut('http://192.168.0.121:8000/api/logout')
    }

    return (
        <aside className={props.isOpenAsside == "open" ? "active" : ""}>
            <div className="Dashboard-Navbar">
                <nav>
                    <img src={ipTv} alt="" />
                </nav>
            </div>
            <div className="Nav-Wrapper">
                <ul>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/main`
                    }}
                        activeClassName="isActive">
                        <li>
                            <img src={dashIcon} alt="" /> {props.isOpenAsside && <p>Dashboard</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/chanel`
                    }}
                        activeClassName="isActive">
                        <li>
                            <img src={tvIcon} alt="" /> {props.isOpenAsside && <p>Chanel List</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/clients/onlineusers`
                    }}
                        activeClassName='isActive'
                        className={window.location.href.includes('/dashboard/clients/') ? 'isActive' : ''}>
                        <li className="Nav-Wrapper-Clients">
                            <div>
                                <img src={userIcon} alt="" /> {props.isOpenAsside && <p>Clients {isDropDown ? <img className="TopArrow" src={TopArrow} onClick={() => handleDropDown(1)} /> :
                                    <img className="RighntArrow" src={RightArrow} onClick={() => handleDropDown(2)} />}</p>}
                            </div>
                        </li>
                    </NavLink>
                    {isDropDown && <div className="Dropdown">
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/dashboard/clients/onlineusers`
                        }}
                            activeClassName='isActiveList'>
                            Online Users
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/dashboard/clients/lines`
                        }}
                            activeClassName='isActiveList'>
                            Manage Lines
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/dashboard/clients/mag`
                        }}
                            activeClassName='isActiveList'>
                            Manage MAG
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/dashboard/clients/preactive`
                        }}
                            activeClassName='isActiveList'>
                            Preactive codes
                        </NavLink>
                    </div>}
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/subsellers/details`
                    }}
                        activeClassName="isActive"
                        className={window.location.href.includes('/dashboard/subsellers/') ? 'isActive' : ''}>
                        <li>
                            <img src={addUserIcon} alt="" /> {props.isOpenAsside && <p>Subsellers</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/creditslogs`
                    }}
                        activeClassName='isActive'>
                        <li>
                            <img src={CreditLogsImage} alt="" />{props.isOpenAsside && <p>Credits Logs</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/settings`
                    }}
                        activeClassName='isActive'>
                        <li>
                            <img src={settingsIcon} alt="" />{props.isOpenAsside && <p>Settings</p>}
                        </li>
                    </NavLink>

                    <button onClick={handleLogOut}>Log out</button>
                </ul>
            </div>
        </aside >
    )
}

const mapStateToProps = state => {
    return {
        logOutReducer: state.logOutReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: url => dispatch(LogOut(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Asside)