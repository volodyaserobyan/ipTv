import React, { useState } from 'react'
import ipTv from '../../assets/iptv3.png'
import dashIcon from '../../assets/Group 19.png'
import tvIcon from '../../assets/VectorTv.png'
import userIcon from '../../assets/VectorUser.png'
import addUserIcon from '../../assets/VectoraddUser.png'
import settingsIcon from '../../assets/Settings.png'
import { NavLink } from 'react-router-dom';

import './Asside.scss'

const Asside = props => {

    return (
        <aside className={props.isOpen == "open" ? "active" : ""}>
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
                            <img src={dashIcon} alt="" /> {props.isOpen && <p>Dashboard</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/chanel`
                    }}
                        activeClassName="isActive">
                        <li>
                            <img src={tvIcon} alt="" /> {props.isOpen && <p>Chanel List</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/clients`
                    }}
                        activeClassName='isActive'>
                        <li>
                            <img src={userIcon} alt="" /> {props.isOpen && <p>Clients</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/subsellers`
                    }}
                        activeClassName="isActive">
                        <li>
                            <img src={addUserIcon} alt="" /> {props.isOpen && <p>Subsellers</p>}
                        </li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/settings`
                    }}
                        activeClassName='isActive'>
                        <li>
                            <img src={settingsIcon} alt="" />{props.isOpen && <p>Settings</p>}
                        </li>
                    </NavLink>
                </ul>
            </div>
        </aside>
    )
}

export default Asside