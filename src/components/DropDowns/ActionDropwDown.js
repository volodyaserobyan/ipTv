import React from 'react'
import DownloadIcon from '../../assets/DownloadIcon.png'
import DisableIcon from '../../assets/disableIcon.png'
import EditIcon from '../../assets/editIcon.png'
import { connect } from 'react-redux'
import './ActionDropDown.scss'
import { isModalActiveDropDown, isModalActiveDropDownEdit, isModalActiveDropDownDisable } from '../Action'

const ActionDropDown = props => {

    return (
        <section className="ActionDropDown">
            <div onClick={() => props.isModalOpenDownload(true)}><img src={DownloadIcon} alt='' /> <p>Download</p></div>
            <div><img src={DisableIcon} alt='' /> <p>Disable</p></div>
            <div onClick={() => props.isModalOpenEdit(true)}><img src={EditIcon} alt='' /> <p>Edit</p></div>
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
        isModalOpenDownload: bool => dispatch(isModalActiveDropDown(bool)),
        isModalOpenEdit: bool => dispatch(isModalActiveDropDownEdit(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionDropDown)