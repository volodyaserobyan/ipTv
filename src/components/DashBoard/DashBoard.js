import React, { useState } from 'react'
import Asside from '../Asside/Asside'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Clients from '../Clients/Clients'
import Chanel from '../Chanel/Chanel'
import SubSellers from '../SubSellers/SubSellers'
import Settings from '../Settings/Settings'
import CreditLogs from '../CreditLogs/CreditLogs'
import Message from '../Message/Message'
import Notification from '../Notification/Notification'
import { withRouter } from "react-router";
import { Route } from 'react-router-dom';
import SubTub from './SubTub'
import Logs from './Logs'
import './DashBoard.scss'

const DashBoard = (props) => {
    const [isOpenAsside, setIsOpenAsside] = useState("");
    const [isOpenLogs, setIsOpenLogs] = useState(false)
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const [isOpenNotification, setIsOpenNotification] = useState(false)

    const handleClickAsside = () => {
        if (isOpenAsside == "") {
            setIsOpenAsside("open")
        }
        else {
            setIsOpenAsside("")
        }
    }

    const handleClickLogs = () => {
        setIsOpenLogs(!isOpenLogs)
    }

    const handleMessage = () => setIsOpenMessage(!isOpenMessage)
    const handleNotification = () => setIsOpenNotification(!isOpenNotification)

    return (
        <section className="Dashboard">
            <Asside
                isOpenAsside={isOpenAsside} />
            <div className="Dashboard-Main">
                <NavBar
                    handleClickAside={handleClickAsside}
                    isOpenAsside={isOpenAsside}
                    handleClickLogs={handleClickLogs}
                    isOpenLogs={isOpenLogs}
                    isOpenMessage={handleMessage}
                    isOpenNotification={handleNotification} />
                {isOpenMessage && <Message />}
                {isOpenNotification && <Notification />}
                <Route path={`${process.env.PUBLIC_URL}/dashboard/main`} component={Main} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/clients`} component={Clients} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/chanel`} component={Chanel} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubTub} />
                {/* <Route path={`${process.env.PUBLIC_URL}/dashboard/sub/details`} component={SubSellers} /> */}
                <Route path={`${process.env.PUBLIC_URL}/dashboard/creditslogs`} component={CreditLogs} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/settings`} component={Settings} />
                {isOpenLogs && <Logs handleClickLogs={handleClickLogs} />}
            </div>
        </section>
    )
}

export default withRouter(DashBoard)