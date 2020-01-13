import React from 'react'
import { Route } from 'react-router-dom';
import OnlineUsers from './OnlineUsers/OnlineUsers'
import Lines from './Lines/Lines'
import Mag from './Mag/Mag'
import Preactive from './Preactive/Preactive'
import './Clients.scss'

const Clients = () => {
    return (
        <section className="Clients">
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/onlineusers`} component={OnlineUsers} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/lines`} component={Lines} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/mag`} component={Mag} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/preactive`} component={Preactive} />
        </section>
    )
}

export default Clients