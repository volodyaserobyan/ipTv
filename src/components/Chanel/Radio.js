import React, { useState, useEffect, useRef } from 'react'
import Tvv from '../../assets/Tvv.png'
import TvIcon from '../../assets/Group 4.png'
import Mark from '../../assets/Mark.png'
import Label from '../../assets/Label.png'
import microphone from '../../assets/microphone.png'
import Select from 'react-select'
import Item from './Item'
import "./Radio.scss"

const Radio = props => {
    const [select, setSelect] = useState(6)
    const [width, setWidth] = useState(null)
    const [isActive, setIsActive] = useState('isActive')

    const toggleWidth = (width) => {
        setWidth(width)
    }

    const handleClick = event => {
        setIsActive('isActive')
    }

    const options = [
        { value: 4, label: 'Show 4  entries' },
        { value: 5, label: 'Show 5  entries' },
        { value: 6, label: 'Show 6  entries' },
    ];

    const handleChange = selectedOption => {
        setSelect(selectedOption)
    }

    return (
        <div className="Radio">
            <div className="Radio-Select">
                <div className="Radio-Select-1">
                    {!props.item.type == 'RADIO_TYPE' ? <img src={Tvv} alt="" /> : <img src={microphone} alt="" />}
                    <h1>{props.item.type == 'RADIO_TYPE' ? "Radio" : "Tv"}</h1>
                </div>
                <div className="Radio-Select-2">
                    <Select
                        value={select}
                        className="SelectNpm"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Show 6 entries"
                    />
                </div>
            </div>
            <div className="Radio-Title">
                <div className="Wrapper-Left">
                    <img src={TvIcon} alt="" />
                </div>
                <div style={{
                    width: width,
                    display: "flex",

                }} className="Wrapper-Right">
                    <div>
                        <img className="Wrapper-Right-1" src={Mark} alt="" />
                    </div>
                    <div>
                        <img className="Wrapper-Right-2" src={Label} alt="" />
                    </div>
                </div>
            </div>
            {props.item.data.data.map(item => <Item
                key={item.id}
                item={item}
                toggleWidth={toggleWidth} />)}
            <div className="Radio-Pagination">
            </div>
        </div>
    )
}

export default Radio