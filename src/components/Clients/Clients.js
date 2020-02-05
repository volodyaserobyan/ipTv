import React, { useState, useEffect } from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import OnlineUsers from './OnlineUsers/OnlineUsers'
import Lines from './Lines/Lines'
import Mag from './Mag/Mag'
import Preactive from './Preactive/Preactive'
import { withRouter } from 'react-router-dom';
import './Clients.scss'

const Clients = (props) => {
    return (
        <section className="Clients">
                    <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/onlineusers`} component={OnlineUsers} />
                    <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/lines`} component={() => <Lines isLines={true} />} />
                    <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/mag`} component={() => <Lines isMag={true} />} />
                    <Route path={`${process.env.PUBLIC_URL}/dashboard/clients/preactive`} component={Preactive} />
        </section>
    )
}

export default withRouter(Clients)