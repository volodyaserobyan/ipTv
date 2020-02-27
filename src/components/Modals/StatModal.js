import React from 'react'
import statImg from '../../assets/stat.png'
import closeImg from '../../assets/VectorX.png'
import { connect } from 'react-redux'
import { isModalActiveDropDownStat } from '../Action'
import './StatModal.scss'

const StatModal = props => {

    return (
        <section className='StatModal'>
            <div className='StatModal-Cont'>
                <div className='StatModal-Cont-Title'>
                    <div>
                        <img src={statImg} alt='' />
                        <h1>Actions > Stats</h1>
                    </div>
                    <img onClick={() => props.isModalOpenStat(false)} src={closeImg} alt='' />
                </div>
                <div className="StatModal-Cont-Context">
                    <div className="StatModal-Cont-Context-Info">
                        <h1>Stream name</h1>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="StatModal-Cont-Context-Info">
                        <h1>Time</h1>
                        <p>{new Date().getTime()}</p>
                    </div>
                    <div className='StatModal-Cont-Context-Close'>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenStat: bool => dispatch(isModalActiveDropDownStat(bool))
    }
}

export default connect(null, mapDispatchToProps)(StatModal)