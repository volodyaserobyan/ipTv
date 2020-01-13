import React, { useState } from 'react'
import Asside from '../Asside/Asside'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Clients from '../Clients/Clients'
import Chanel from '../Chanel/Chanel'
import SubSellers from '../SubSellers/SubSellers'
import Settings from '../Settings/Settings'
import { withRouter } from "react-router";
import { Route } from 'react-router-dom';
import './DashBoard.scss'

const DashBoard = (props) => {
    const [isOpen, setIsOpen] = useState("");

    const handleClick = () => {
        if (isOpen == "") {
            setIsOpen("open")
        }
        else {
            setIsOpen("")
        }
    }

    return (
        <section className="Dashboard">
            <Asside
                isOpen={isOpen} />
            <div className="Dashboard-Main">
                <NavBar
                    handleClick={handleClick}
                    isOpen={isOpen} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/main`} component={Main} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/clients`} component={Clients} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/chanel`} component={Chanel} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubSellers} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/settings`} component={Settings} />
            </div>
        </section>
    )
}

export default withRouter(DashBoard)