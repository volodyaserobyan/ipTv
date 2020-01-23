import React, { useState } from 'react'
import Asside from '../Asside/Asside'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Clients from '../Clients/Clients'
import Chanel from '../Chanel/Chanel'
import SubSellers from '../SubSellers/SubSellers'
import Settings from '../Settings/Settings'
import CreditLogs from '../CreditLogs/CreditLogs'
import { withRouter } from "react-router";
import { Route } from 'react-router-dom';
import Logs from './Logs'
import './DashBoard.scss'

const DashBoard = (props) => {
    const [isOpenAsside, setIsOpenAsside] = useState("");
    const [isOpenLogs, setIsOpenLogs] = useState(false)

    const handleClickAsside = () => {
        if (isOpenAsside == "") {
            setIsOpenAsside("open")
        }
        else {
            setIsOpenAsside("")
        }
    }

    const handleClickLogs = () => {
        if (isOpenLogs) {
            setIsOpenLogs(false)
        }
        else {
            setIsOpenLogs(true)
        }
    }

    return (
        <section className="Dashboard">
            <Asside
                isOpenAsside={isOpenAsside} />
            <div className="Dashboard-Main">
                <NavBar
                    handleClickAside={handleClickAsside}
                    isOpenAsside={isOpenAsside}
                    handleClickLogs={handleClickLogs}
                    isOpenLogs={isOpenLogs} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/main`} component={Main} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/clients`} component={Clients} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/chanel`} component={Chanel} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubSellers} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/creditslogs`} component={CreditLogs} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/settings`} component={Settings} />
                {isOpenLogs && <Logs handleClickLogs={handleClickLogs} />}
            </div>
        </section>
    )
}

export default withRouter(DashBoard)