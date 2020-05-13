import React from 'react'
import Search from './Search/Search'
import Select from 'react-select'
import { NavLink } from 'react-router-dom'
import { options } from './Const/Const'
import './DashboardTitle.scss'

const DashboardTitle = props => {

    return (
        <div className="DashboardTitle">
            <h1>{props.isMag ? 'Manage Mag' : props.isLines ? 'Manage Lines' : props.isSubSeller ? 'SubSellers' : 'Online Users'}</h1>
            <Search setTodos={props.setTodos} />
            {props.isSubSeller &&
                <NavLink to={{
                    pathname: `${process.env.PUBLIC_URL}/dashboard/subsellers/add/details`
                }}>
                    <button>ADD SubSeller</button>
                </NavLink>
            }
            <Select
                value={props.select}
                className="SelectNpm"
                classNamePrefix="SelectNpm-Inner"
                onChange={e => props.handleChange(e)}
                options={options}
                placeholder="Show 6 entries"
            />
        </div>
    )
}

export default DashboardTitle