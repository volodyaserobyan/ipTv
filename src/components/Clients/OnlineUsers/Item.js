import React, { useState } from 'react'
import './Item.scss'

const Item = props => {
    const [onlineRadio, setOnlineRadio] = useState(null)

    return (
        <div className="Item">
            <p className="Item_id">{props.id}</p>
            <p className="Item_address">Lorem</p>
            <p className="Item_owner">Lorem Ipsum</p>
            <p className="Item_status">Movies</p>
            <div>
                <input type='radio' name='online' checked={onlineRadio == true} onChange={() => { setOnlineRadio(true) }} />
            </div>
            <div>
                <input type='radio' name='online' checked={onlineRadio == false} onChange={() => { setOnlineRadio(false) }} />
            </div>
            <p>2019/01/08</p>
            <p>Actions</p>
        </div>
    )
}

export default Item