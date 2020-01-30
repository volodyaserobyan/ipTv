import React, { useState } from 'react'
import userImage from '../../assets/userImage.png'
import XIcon from '../../assets/XXVector.png'
import './Message.scss'

const Message = props => {

    const [itemsArr, setItemsArr] = useState([{
        id: 0,
        name: 'McKenzie Inverness',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        when: '08 Hours ago'
    },
    {
        id: 1,
        name: 'McKenzie Inverness',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        when: '09 Hours ago'
    },
    {
        id: 2,
        name: 'McKenzie Inverness',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        when: '10 Hours ago'
    },
    {
        id: 3,
        name: 'McKenzie Inverness',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        when: '11 Hours ago'
    }])
    const [test, setTest] = useState(1)

   const deleteIcon = position => {
        let newArr = itemsArr
        // let index = newArr.indexOf(item)
        if (position !== -1) {
            newArr.splice(position, 1)
            setTest(test + 1)
            setItemsArr(newArr)
        }
    }

    return (
        <div className="Message">
            {itemsArr.map((item, id) =>
                <div key={id} className="Message-Item">
                    <img className="User-Image" src={userImage} alt="" />
                    <div className="Message-Item-Context">
                        <div className="Message-Item-Context-Title">
                            <h1>{item.name}</h1>
                            <img onClick={() => deleteIcon(id)} src={XIcon} alt="" />
                        </div>
                        <h6>{item.message}</h6>
                        <p>{item.when}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Message