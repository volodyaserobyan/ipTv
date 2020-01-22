import React from 'react'
import userImage from '../../assets/userImage.png'

import './LogsItem.scss'

const LogsItem = props => {

    return (
        <div className="LogsItem">
            <div className="LogsItem_title">
                <div className="LogsItem_title_user">
                    <img src={userImage} alt='' />
                    <p>THEMOB4YOU</p>
                </div>
                <p>9-12-17 10:59</p>
            </div>
            {props.isLine ?
                <div className="LogsItem_info">
                    <p>Username: 1265551834</p>
                    <p>Password: 1265551834</p>
                    <p>[API -> New Line] with Package [1 YEAR | REGULAR]</p>
                    <p>Credits: 122 -> 108</p>
                </div>
                :
                <div className="LogsItem_info">
                    <p>Amount: -14</p>
                    <p>Reason: New Line</p>
                </div>}
        </div>
    )
}

export default LogsItem