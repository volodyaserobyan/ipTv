import React, { useState } from 'react'
import { connect } from 'react-redux'
import { isModalActive } from '../../Action'
import Select from 'react-select'
import VectorX from '../../../assets/VectorX.png'
import DolarSign from '../../../assets/DolarSign.png'
import HourSign from '../../../assets/HourSign.png'
import './NewLineModal.scss'

const NewLineModal = props => {
    const [select, setSelect] = useState(6)

    const handleChange = selectedOption => {
        setSelect(selectedOption)
    }

    const options = [
        { value: 4, label: 'Show 4  entries' },
        { value: 5, label: 'Show 5  entries' },
        { value: 6, label: 'Show 6  entries' },
    ];

    return (
        <div className="NewLineModal">
            <div onClick={e => e.stopPropagation()} className="NewLineModal-Cont">
                <div className="NewLineModal-Cont-Title">
                    <h1>New Line</h1>
                    <img onClick={() => props.isModalOpen(false)} src={VectorX} alt='' />
                </div>
                <form className="NewLineModal-Cont-Context">
                    <div className="NewLineModal-Cont-Context_elm">
                        <div><img src={DolarSign} alt='' /> <p>You have 108 credits available</p></div>
                        <div><img src={HourSign} alt='' /> <p>You can create 100 trials today</p></div>
                    </div>
                    <input placeholder='Email' />
                    {/* <Select
                        value={select}
                        className="SelectModal"
                        classNamePrefix="SelectModal-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Select Package" /> */}
                        <input placeholder="Select Package" />
                    <input placeholder="Number of Codes" />
                    <textarea placeholder="Number of Codes" />
                    <input type='submit' className='NewLineModal-Cont-Context-Submit' value='EDIT BOUQUETS' />
                </form>
                <div className='NewLineModal-Cont-Footer'>
                    <div>
                        <p>0 Credits</p>
                    </div>
                    <div>
                        <p>Create Line</p>
                    </div>
                    <div>
                        <p>Close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpen: bool => dispatch(isModalActive(bool))
    }
}

export default connect(null, mapDispatchToProps)(NewLineModal)