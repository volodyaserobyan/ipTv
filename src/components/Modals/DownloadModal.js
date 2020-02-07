import React from 'react'
import { connect } from 'react-redux'
import './DownloadModal.scss'

const DownloadModal = () => {

    return (
        <section className="DownloadModal">

        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(DownloadModal)