import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import Details from './Details'
import Purchase from './Purchase'
import './SubSellers.scss'

const SubSellers = () => {

    return (
        <section className="SubSellers">
            <div className='SubSellers-Cont'>
                <div className='SubSellers-Cont-Control'>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/subsellers/details`
                    }}
                        activeClassName="isActive"
                        className="SubSellers-Cont-Control-Href">
                        <p>Details</p>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/subsellers/purchase`
                    }}
                        activeClassName="isActive"
                        className="SubSellers-Cont-Control-Href">
                        <p>Review Purchase</p>
                    </NavLink>
                </div>
                <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers/details`} component={Details} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers/purchase`} component={Purchase} />
            </div>
        </section>
    )
}

export default SubSellers