import React from 'react'
import { connect } from 'react-redux'
import VectorX from '../../assets/VectorX.png'
import { isModalActiveMag } from '../Action'
import DolarSign from '../../assets/DolarSign.png'
import HourSign from '../../assets/HourSign.png'
import ModalFooter from './ModalFooter'
import './MagModal.scss'

const MagModal = props => {
    return (
        <section className='MagModal'>
            <div className='MagModal-Cont' onClick={e => e.stopPropagation()}>
                <div className="MagModal-Cont-Title">
                    <h1>New Mag</h1>
                    <img onClick={() => props.isModalOpen(false)} src={VectorX} alt='' />
                </div>
                <form className="MagModal-Cont-Context">
                    <div className="MagModal-Cont-Context_elm">
                        <div><img src={DolarSign} alt='' /> <p>You have 108 credits available</p></div>
                        <div><img src={HourSign} alt='' /> <p>You can create 100 trials today</p></div>
                    </div>
                    <div className="MagModal-Cont-Context-1">
                        <input placeholder='Email' />
                        <input placeholder="MAC Address" />
                        <input placeholder="Select Package" />
                        <input placeholder="Max Connections" />
                        <p>+ 0 Credits</p>
                    </div>
                    <div className='MagModal-Cont-Context-2'>
                        <p>Any lock added to the line will
                             take effect on the first connection.</p>
                        <input placeholder='Lock to IP Address' />
                        <input placeholder='Lock to ISP' />
                        <input placeholder='Lock to Country' />
                        <textarea placeholder='Notes' />
                    </div>
                    <input type='submit'
                        className='MagModal-Cont-Context-Submit'
                        value='EDIT BOUQUETS' />
                        <ModalFooter />
                </form>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpen: obj => dispatch(isModalActiveMag(obj))
    }
}

export default connect(null, mapDispatchToProps)(MagModal)