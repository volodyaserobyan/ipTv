import React from 'react'
import { Route } from 'react-router-dom';
import OnlineUsers from './OnlineUsers/OnlineUsers'
import Lines from './Lines/Lines'
import Mag from './Mag/Mag'
import BQTorder from './Mag/BQT/BQTorder'
import Preactive from './Preactive/Preactive'
import { withRouter } from 'react-router-dom';
import './Clients.scss'

const Clients = (props) => {
    return (
        <section className="Clients">
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/onlineusers`} component={OnlineUsers} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/lines`} component={Lines} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/mag`} component={Mag} exact />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/mag/order`} component={BQTorder} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/preactive`} component={Preactive} />
        </section>
    )
}

export default withRouter(Clients)