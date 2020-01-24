import React, { useState } from 'react'
import logo from '../../../assets/Acunetix_logo 1.png'
import italyFlag from '../../../assets/italyFlag.png'
import './Item.scss'

const Item = props => {
    const [checkBox, setCheckbox] = useState(false)
    const [radio, setRadio] = useState(true)

    // const handleCheckBox = () => {
    //     console.log('check')
    //     setCheckbox(!checkBox)
    // }

    // const handleClickRadio = () => {
    //     if (radio) {
    //         setRadio(false)
    //     }
    //     else {
    //         setRadio(true)
    //     }
    // }
    // className="Lines-Table-Item_id"
    // className="Lines-Table-Item_owner"
    // className="Lines-Table-Item_address"
    // className="Lines-Table-Item_status"
    return (
        <div className="Lines-Table-Item">
            <p className="Lines-Table-Item_id">{props.id}</p>
            <p>vcxhsdvc</p>
            <p>Mike22</p>
            <p>5665cddced</p>
            <img className='Lines-Table-Item-Logo' src={logo} alt="" />
            <p></p>
            <p></p>
            <p>2020-01-27 11:38:52</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p><img src={italyFlag} alt='' /></p>
            <p>Actions</p>
            {/* <div>
                <label className="checkBoxLabel">
                    <input checked={checkBox} onChange={handleCheckBox} type='checkbox' />
                    <div className="checkCheckBox"></div>
                </label>
            </div>

            <div onClick={handleClickRadio} className={`Lines-Table-Item-On ${radio && 'off'}`}>
                <span></span>
            </div> */}
            {/* <p>sdsd</p>
            <p>ons</p>
            <p>dfd</p>
            <p>dfs</p>
            <p>Acs</p> */}
        </div>
    )
}

export default Item