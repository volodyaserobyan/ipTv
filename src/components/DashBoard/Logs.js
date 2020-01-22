import React, { useState } from 'react'
import arrowIcon from '../../assets/arrow.png'
import LogOutIcon from '../../assets/LogOutIcon.png'
import VectorX from '../../assets/VectorX.png'
import Search from '../Search/Search'
import LogsItem from './LogsItem'

import './Logs.scss'

const Logs = props => {

    const [isLine, setIsline] = useState(true)

    return (
        <div className="Logs">
            <div className="Logs-Title">
                <span className="LogOutSpan"><img alt="" src={LogOutIcon} /> <p>Logs <img alt="" src={arrowIcon} /></p></span>
                <img onClick={() => props.handleClickLogs()} src={VectorX} alt='' />
            </div>
            <div className="Logs-Act">
                <p onClick={() => setIsline(true)} className={isLine && 'isActiveLog'}>Line Activity</p>
                <p onClick={() => setIsline(false)} className={!isLine && 'isActiveLog'}>Credit Logs</p>
            </div>
            <div className="Logs-Search">
                <Search />
            </div>

            <div className="Logs-Context">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(id => <LogsItem isLine={isLine} />)}
            </div>
        </div>
    )
}

export default Logs