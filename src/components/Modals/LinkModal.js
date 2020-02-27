import React from 'react'
import linkImg from '../../assets/link.png'
import closeImg from '../../assets/VectorX.png'
import { connect } from 'react-redux'
import './LinkModal.scss'
import { isModalActiveDropDownLink } from '../Action'

const LinkModal = props => {

    return (
        <section className='LinkModal'>
            <div className='LinkModal-Cont'>
                <div className="LinkModal-Cont-Title">
                    <div>
                        <img src={linkImg} alt='' />
                        <h1>Actions > EPG</h1>
                    </div>
                    <img onClick={() => props.isModalOpenLink(false)} src={closeImg} alt='' />
                </div>
                <div className="LinkModal-Cont-Context">
                    <p>You are about to link a MAG device to a new M3U line with username:
                         BpeT3skgE5. User details and expiration date will remain the same.</p>
                    <div className="LinkModal-Cont-Context-Info">
                        <h1>ID</h1>
                        <p>398275</p>
                    </div>
                    <div className="LinkModal-Cont-Context-Info">
                        <h1>Username</h1>
                        <p>Lorem</p>
                    </div>
                    <div className="LinkModal-Cont-Context-Info">
                        <h1>MAC Address being paired.</h1>
                        <p>00:3A:59:21:77:31</p>
                    </div>
                    <div className="LinkModal-Cont-Context-Close">
                        <button className="LinkModal-Cont-Context-Close-Conf">Confirm</button>
                        <button className="LinkModal-Cont-Context-Close-Cl">Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenLink: bool => dispatch(isModalActiveDropDownLink(bool))
    }
}

export default connect(null, mapDispatchToProps)(LinkModal)