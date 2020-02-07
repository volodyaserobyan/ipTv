import React, { useState } from 'react'
import { connect } from 'react-redux'
import { isModalActive } from '../Action'
import Select from 'react-select'
import VectorX from '../../assets/VectorX.png'
import DolarSign from '../../assets/DolarSign.png'
import HourSign from '../../assets/HourSign.png'
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

    console.log(props)

    return (
        <div className="NewLineModal">
            <div onClick={e => e.stopPropagation()} className="NewLineModal-Cont">
                <div className="NewLineModal-Cont-Title">
                    <h1>New Line</h1>
                    <img onClick={() => props.isModalOpen({
                        isModal: false,
                        isMag: undefined
                    })} src={VectorX} alt='' />
                </div>
                <form className="NewLineModal-Cont-Context">
                    <div className="NewLineModal-Cont-Context_elm">
                        <div><img src={DolarSign} alt='' /> <p>You have 108 credits available</p></div>
                        <div><img src={HourSign} alt='' /> <p>You can create 100 trials today</p></div>
                    </div>
                        <div>
                            <input placeholder='Email' />
                            <input placeholder="Select Package" />
                            <input placeholder="Number of Codes" />
                            <textarea placeholder="Number of Codes" />
                        </div>
                    <input type='submit' className='NewLineModal-Cont-Context-Submit' value='EDIT BOUQUETS' />
                    <div className='NewLineModal-Cont-Footer'>
                        <div>
                            <div>
                                <p>0 Credits</p>
                            </div>
                            <div>
                                <p>Create Line</p>
                            </div>
                            <div className='NewLineModal-Cont-Footer-Close'>
                                <p>Close</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOpenModal: state.modalReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpen: obj => dispatch(isModalActive(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLineModal)