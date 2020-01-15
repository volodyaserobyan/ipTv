import React, { useState } from 'react'
import './Item.scss'

const Item = props => {
    const [onlineRadio, setOnlineRadio] = useState(false)

    const handleRadioBtn = () => {
        if(onlineRadio) {
            setOnlineRadio(false)
        }
        else {
            setOnlineRadio(true)
        }
    }

    return (
        <div className="Item">
            <p className="Item_id">{props.id}</p>
            <p className="Item_address">Lorem</p>
            <p className="Item_owner">Lorem Ipsum</p>
            <p className="Item_status">Movies</p>
            <div>
                <label className="radioLabel">
                    <input type='radio' name={`online ${props.identifyerRadio}`} checked={onlineRadio == true} onChange={handleRadioBtn} />
                    <div className="check"></div>
                </label>
            </div>
            <div>
                <label className="radioLabel">
                    <input type='radio' name={`online ${props.identifyerRadio}`} checked={onlineRadio == false} onChange={handleRadioBtn} />
                    <div className="check"></div>
                    </label>
            </div>
            <p>2019/01/08</p>
            <p>Actions</p>
        </div>
    )
}

export default Item