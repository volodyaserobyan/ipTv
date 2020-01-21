import React, { useState } from 'react'
import './Item.scss'

const Item = props => {
    const [checkBox, setCheckbox] = useState(false)
    const [radio, setRadio] = useState(true)

    const handleCheckBox = () => {
        console.log('check')
        setCheckbox(!checkBox)
    }

    const handleClickRadio = () => {
        if(radio) {
            setRadio(false)
        }
        else {
            setRadio(true)
        }
    }

    return (
        <div className="Lines-Table-Item">
            <p className="Lines-Table-Item_id">{props.id}</p>
            <div>
                <label className="checkBoxLabel">
                    <input checked={checkBox} onChange={handleCheckBox} type='checkbox' />
                    <div className="checkCheckBox"></div>
                </label>
            </div>

            <div onClick={handleClickRadio} className={`Lines-Table-Item-On ${radio && 'off'}`}>
                <span></span>
            </div>
            <p className="Lines-Table-Item_address">Lorem</p>
            <p className="Lines-Table-Item_owner">Lorem Ipsum</p>
            <p className="Lines-Table-Item_status">Movies</p>
            <p>2019/01/08</p>
            <p>sdsd</p>
            <p>ons</p>
            <p>dfd</p>
            <p>dfs</p>
            <p>Acs</p>
            <p>Actions</p>
        </div>
    )
}

export default Item