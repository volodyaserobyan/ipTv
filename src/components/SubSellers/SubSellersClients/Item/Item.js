import React, { useState } from 'react'
import ActionDropDwon from '../../../DropDowns/ActionDropwDown'
import arrowDawn from '../../../../assets/arrowDown.png'
import topArrow from '../../../../assets/TopArrow.png'
import './Item.scss'

const Item = props => {
    const [onlineRadio, setOnlineRadio] = useState(false)
    const [isDropDown, setIsDropDown] = useState(false)

    return (
        <div className="Item">
            <p className="Item_id">{props.id}</p>
            {/* <p className="Item_address">Lorem</p>
            <p className="Item_owner">Lorem Ipsum</p> */}
            <p className="Item_status">Movies</p>
            {/* <div>
                <label className="radioLabel">
                    <input type='radio' name={`online ${props.identifyerRadio}`}
                        checked={onlineRadio == true}
                        onChange={() => setOnlineRadio(!onlineRadio)} />
                    <div className="check"></div>
                </label>
            </div>
            <div>
                <label className="radioLabel">
                    <input type='radio' name={`online ${props.identifyerRadio}`}
                     checked={onlineRadio == false} onChange={() => setOnlineRadio(!onlineRadio)} />
                    <div className="check"></div>
                </label>
            </div> */}
            <p>2019/01/08</p>
            <div className='Action'>
                Block
            </div>
        </div>
    )
}

export default Item