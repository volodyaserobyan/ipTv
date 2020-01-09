import React, { useState } from 'react'
import Asside from '../Asside/Asside'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Clients from '../Clients/Clients'
import Chanel from '../Chanel/Chanel'
import SubSellers from '../SubSellers/SubSellers'
import Settings from '../Settings/Settings'
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './DashBoard.scss'

const DashBoard = (props) => {
    const [isOpen, setIsOpen] = useState("");
    const [section, setSection] = useState("dashboard")

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

    // let rend = <></>

    // switch (section) {
    //     case "dashboard": {
    //         rend = <Main />
    //         props.history.push('dashboard/main')
    //         break
    //     }
    //     case "clients": {
    //         rend = <Clients />
    //         props.history.push('clients')
    //         break;
    //     }
    //     case "chanel": {
    //         rend = <Chanel />
    //         props.history.push('chanel')
    //         break
    //     }
    //     case "subsellers": {
    //         rend = <SubSellers />
    //         props.history.push('subsellers')
    //         break
    //     }
    //     case "settings": {
    //         rend = <Settings />
    //         props.history.push('settings')
    //         break
    //     }
    // }

    return (
        <section className="Dashboard">
            <Asside
                isOpen={isOpen}
                callbackFunc={callbackFunc} />
            <div className="Dashboard-Main">
                <NavBar
                    handleClick={handleClick}
                    isOpen={isOpen} />
                {/* <BrowserRouter> */}
                    {/* <Switch> */}
                        <Route path={`${process.env.PUBLIC_URL}/dashboard/main`} component={Main} />
                        <Route path={`${process.env.PUBLIC_URL}/dashboard/clients`} component={Clients} />
                        <Route path={`${process.env.PUBLIC_URL}/dashboard/chanel`} component={Chanel} />
                        <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubSellers} />
                        <Route path={`${process.env.PUBLIC_URL}/dashboard/settings`} component={Settings} />
                    {/* </Switch> */}
                {/* </BrowserRouter> */}
                {/* {rend} */}
            </div>
        </section>
    )
}

export default withRouter(DashBoard)