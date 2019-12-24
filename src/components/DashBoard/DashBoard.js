import React, { useState } from 'react'
import Asside from '../Asside/Asside'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Clients from '../Clients/Clients'
import Chanel from '../Chanel/Chanel'
import SubSellers from '../SubSellers/SubSellers'
import Settings from '../Settings/Settings'
import './DashBoard.scss'

const DashBoard = ({ children }) => {
    const [isOpen, setIsOpen] = useState("");
    const [section, setSection] = useState("")

    const handleClick = () => {
        if (isOpen == "") {
            setIsOpen("open")
        }
        else {
            setIsOpen("")
        }
    }

    const callbackFunc = data => {
        setSection(data)
    }

    let rend = <Main />

    switch (section) {
        case "dashboard":
            rend = <Main />
            break
        case "clients":
            rend = <Clients />
            break;
        case "chanel":
            rend = <Chanel />
            break
        case "subsellers":
            rend = <SubSellers />
            break
        case "settings":
            rend = <Settings />
            break
    }

    return (
        <section className="Dashboard">
            <Asside
                isOpen={isOpen}
                callbackFunc={callbackFunc} />
            <div className="Dashboard-Main">
                <NavBar
                    handleClick={handleClick}
                    isOpen={isOpen} />
                {rend}
            </div>
        </section>
    )
}

export default DashBoard