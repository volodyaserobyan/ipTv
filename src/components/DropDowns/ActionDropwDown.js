import React from 'react'
import DownloadIcon from '../../assets/DownloadIcon.png'
import DisableIcon from '../../assets/disableIcon.png'
import EditIcon from '../../assets/editIcon.png'
import { connect } from 'react-redux'
import './ActionDropDown.scss'
import { isModalActiveDropDown } from '../Action'

const ActionDropDown = props => {

    const handleDownload = () => {
        if (!props.isModalDropDown) {
            props.isModalOpenDownload(true)
        } else {
            props.isModalOpenDownload(false)
        }
    }

    return (
        <section className="ActionDropDown">
            <div onClick={handleDownload}><img src={DownloadIcon} alt='' /> <p>Download</p></div>
            <div><img src={DisableIcon} alt='' /> <p>Disable</p></div>
            <div><img src={EditIcon} alt='' /> <p>Edit</p></div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isOpenModal: state.modalReducer.isModalDropDown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenDownload: data => dispatch(isModalActiveDropDown(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionDropDown)