import React, { useEffect, useRef } from 'react'
import LogoIcon from '../../assets/Rectangle 36.png'
import './Item.scss'

const Item = props => {

    const ref = useRef(null);

    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        props.toggleWidth(width)
    }, [ref.current])

    console.log(props)

    return (
        <div className="Item">
            <div className="Wrapper-Left">
                <img src={LogoIcon} />
                <p>{props.item !== undefined ? props.item.streamName : 'UFC 245: Usman vs. Covington [2019]'}</p>
            </div>
            <div ref={ref} className="Wrapper-Right">
                <p>{props.item !== undefined ? props.item.category : 'Movies'}</p>
                <p>{props.item !== undefined ? props.item.type : 'Movies'}</p>
            </div>
        </div>
    )
}

export default Item