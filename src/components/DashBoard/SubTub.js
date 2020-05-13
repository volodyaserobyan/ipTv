import React from 'react'
import { Route } from 'react-router-dom'
import SubSellers from '../SubSellers/SubSellers'
import SubSellersClient from '../SubSellers/SubSellersClients'

const SubTub = () => {
    return (
        <section className='Sub'>
            <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubSellersClient} exact />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers/add`} component={SubSellers} />
        </section>
    )
}

export default SubTub