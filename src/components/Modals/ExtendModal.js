import React, { useState } from 'react'
import ModalFooter from './ModalFooter'
import closeImg from '../../assets/VectorX.png'
import Select from 'react-select'
import { connect } from 'react-redux'
import { isModalActiveDropDownExtend } from '../Action'
import extendImg from '../../assets/extend.png'
import { options } from '../Const/Const'
import './ExtendModal.scss'

const ExtendModal = props => {
    const [select, setSelect] = useState(6)

    const handleChange = (selectedOption) => {
        setSelect(selectedOption)
    }
    return (
        <section className="ExtendModal">
            <div className="ExtendModal-Cont">
                <div className="ExtendModal-Cont-Title">
                    <div>
                        <img src={extendImg} alt='' />
                        <h1>Actions > Extend > Renew User</h1>
                    </div>
                    <img onClick={() => props.isModalOpenExtend(false)} src={closeImg} alt='' />
                </div>
                <div className="ExtendModal-Cont-Context">
                    <p>Package</p>
                    <Select
                        value={select}
                        className="ExtendModal-Cont-Context-Select"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Select"
                    />
                </div>
                <div className="ExtendModal-Cont-Footer">
                    <ModalFooter extends={true} />
                </div>
            </div>
        </section>)
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenExtend: bool => dispatch(isModalActiveDropDownExtend(bool))
    }
}

export default connect(null, mapDispatchToProps)(ExtendModal)