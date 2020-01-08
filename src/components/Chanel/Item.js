import React from 'react'
import LogoIcon from '../../assets/Rectangle 36.png'
import './Item.scss'

const Item = () => {
    return (
        <div className="Item">
            <div className="Wrapper-Left">
                <img src={LogoIcon} />
                <p>UFC 245: Usman vs. Covington [2019]</p>
            </div>
            <div className="Wrapper-Right">
                <p>Sport</p>
                <p>Movies</p>
            </div>
        </div>
    )
}

export default Item