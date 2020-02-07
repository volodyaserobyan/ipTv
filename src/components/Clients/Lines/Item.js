import React, { useState } from 'react'
import logo from '../../../assets/Acunetix_logo 1.png'
import italyFlag from '../../../assets/italyFlag.png'
import arrowDawn from '../../../assets/arrowDown.png'
import topArrow from '../../../assets/TopArrow.png'
import ActionDropDwon from '../../DropDowns/ActionDropwDown'
import './Item.scss'

const Item = props => {

    const [isDropDown, setIsDropDown] = useState(false)

    const handleDropDown = () => {
        if(!isDropDown) {
            setIsDropDown(true)
        }
        else {
            setIsDropDown(false)
        }
    }

    return (
        <div className="Lines-Table-Item">
            <p className="Lines-Table-Item_id">{props.id}</p>
            <p>vcxhsdvc</p>
            <p>Mike22</p>
            <p>5665cddced</p>
            <p><img className='Lines-Table-Item-Logo' src={logo} alt="" /></p>
            <p></p>
            <p></p>
            <p>2020-01-27 11:38:52</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p><img src={italyFlag} alt='' /></p>
            <div onClick={handleDropDown}>
                Actions {isDropDown ? <img src={arrowDawn} alt='' /> : <img src={topArrow} alt='' />}
                {isDropDown && <ActionDropDwon />}
            </div>
        </div>
    )
}

export default Item