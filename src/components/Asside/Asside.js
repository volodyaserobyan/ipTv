import React, { useState } from 'react'
import ipTv from '../../assets/iptv3.png'
import dashIcon from '../../assets/Group 19.png'
import tvIcon from '../../assets/VectorTv.png'
import userIcon from '../../assets/VectorUser.png'
import addUserIcon from '../../assets/VectoraddUser.png'
import settingsIcon from '../../assets/Settings.png'

import './Asside.scss'

const Asside = props => {

    const [dash, setDash] = useState(true);
    const [chanel, setChanel] = useState(false);
    const [clients, setClients] = useState(false);
    const [subSellers, setSubSellers] = useState(false);
    const [settings, setSettings] = useState(false);

    const handleClickLi = val => {
        switch (val) {
            case "dashboard":
                setDash(true)
                setChanel(false)
                setClients(false)
                setSubSellers(false)
                setSettings(false)
                props.callbackFunc("dashboard")
                break;
            case "chanel":
                setDash(false)
                setChanel(true)
                setClients(false)
                setSubSellers(false)
                setSettings(false)
                props.callbackFunc("chanel")
                break;
            case "clients":
                setDash(false)
                setChanel(false)
                setClients(true)
                setSubSellers(false)
                setSettings(false)
                props.callbackFunc("clients")
                break;
            case "subsellers":
                setDash(false)
                setChanel(false)
                setClients(false)
                setSubSellers(true)
                setSettings(false)
                props.callbackFunc("subsellers")
                break;
            case "settings":
                setDash(false)
                setChanel(false)
                setClients(false)
                setSubSellers(false)
                setSettings(true)
                props.callbackFunc("settings")
                break;
        }
    }

    return (
        <aside className={props.isOpen == "open" ? "active" : ""}>
            <div className="Dashboard-Navbar">
                <nav>
                    <img src={ipTv} alt="" />
                </nav>
            </div>
            <div className="Nav-Wrapper">
                <ul>
                    <li className={dash ? "isActive" : ""} onClick={() => handleClickLi("dashboard")}>
                        <img src={dashIcon} alt="" /> {props.isOpen && <p>Dashboard</p>}
                    </li>
                    <li className={chanel ? "isActive" : ""} onClick={() => handleClickLi("chanel")}>
                        <img src={tvIcon} alt="" /> {props.isOpen && <p>Chanel List</p>}
                    </li>
                    <li className={clients ? "isActive" : ""} onClick={() => handleClickLi("clients")}>
                        <img src={userIcon} alt="" /> {props.isOpen && <p>Clients</p>}
                    </li>
                    <li className={subSellers ? "isActive" : ""} onClick={() => handleClickLi("subsellers")}>
                        <img src={addUserIcon} alt="" /> {props.isOpen && <p>Subsellers</p>}
                    </li>
                    <li className={settings ? "isActive" : ""} onClick={() => handleClickLi("settings")}>
                        <img src={settingsIcon} alt="" />{props.isOpen && <p>Settings</p>}
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Asside