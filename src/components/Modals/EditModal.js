import React from 'react'
import closeImg from '../../assets/VectorX.png'
import ModalFooter from './ModalFooter'
import { connect } from 'react-redux'
import './EditModal.scss'
import { isModalActiveDropDownEdit } from '../Action'

const EditModal = props => {

    return (
        <section className="EditModal">
            <div className="EditModal-Cont">
                <div className="EditModal-Cont-Title">
                    <h1>Actions MAG Editor</h1>
                    <img onClick={() => props.isModalOpenEdit(false)} src={closeImg} alt='' />
                </div>
                <form className="EditModal-Cont-Context">
                    <div>
                        <label>Email</label>
                        <input placeholder="Email" />
                    </div>
                    <div>
                        <label>MAC Adddress</label>
                        <input placeholder="MAC Adress" />
                    </div>
                    <div>
                        <label>Notes</label>
                        <textarea placeholder="Notes" />
                    </div>
                    <input type="submit" value='Edit Bouquets' />
                </form>
                <div className="EditModal-Cont-Footer">
                    <ModalFooter />
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenEdit: bool => dispatch(isModalActiveDropDownEdit(bool))
    }
}

export default connect(null, mapDispatchToProps)(EditModal)