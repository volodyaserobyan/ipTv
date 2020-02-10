import React, { useState } from 'react'
import { connect } from 'react-redux'
import './DownloadModal.scss'
import { isModalActiveDropDown } from '../Action'
import Select from 'react-select'
import closeImg from '../../assets/VectorX.png'
import { options } from '../Const/Const'

const DownloadModal = props => {
    const [select, setSelect] = useState(6)

    const handleChange = (selectedOption) => {
        setSelect(selectedOption)
    }

    return (
        <section className="DownloadModal">
            <div onClick={e => e.stopPropagation()} className="DownloadModal-Cont">
                <div onClick={() => props.isModalOpenDownload(false)} className="DownloadModal-Cont-Title">
                    <p>Actions Download Scripts</p>
                    <img src={closeImg} alt="" />
                </div>
                <div className="DownloadModal-Cont-Context">
                    <p>Choose your device</p>
                    <Select
                        value={select}
                        className="DownloadModal-Cont-Context-Select"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Choose Device"
                    />
                    <div className="DownloadModal-Cont-Context-Buttons">
                        <button>Download</button>
                        <button onClick={() => props.isModalOpenDownload(false)}>Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenDownload: bool => dispatch(isModalActiveDropDown(bool))
    }
}

export default connect(null, mapDispatchToProps)(DownloadModal)