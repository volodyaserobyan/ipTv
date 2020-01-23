import React from 'react'

import './Item.scss'

const Item = props => {
    return (
        <div className="Item">
            <p className="Item_id">{props.id}</p>
            <p className="Item_address">Lorem</p>
            <p className="Item_owner">Lorem Ipsum</p>
            <p className="Item_status">Movies</p>
            <p>2019/01/08</p>
            <p>Actions</p>
        </div>
    )
}

export default Item