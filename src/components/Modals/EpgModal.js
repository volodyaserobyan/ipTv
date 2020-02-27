import React from 'react'
import epgImg from '../../assets/epg.png'
import closeImg from '../../assets/VectorX.png'
import { connect } from 'react-redux'
import { isModalActiveDropDownEpg } from '../Action'
import './EpgModal.scss'

const EpgModal = props => {

    return (
        <section className='EpgModal'>
            <div className="EpgModal-Cont">
                <div className="EpgModal-Cont-Title">
                    <div>
                        <img src={epgImg} alt='' />
                        <h1>Actions > EPG</h1>
                    </div>
                    <img onClick={() => props.isModalOpenEpg(false)} src={closeImg} alt='' />
                </div>
                <div className="EpgModal-Cont-Context">
                    <div className="EpgModal-Cont-Context-Info">
                        <h1>Change Country</h1>
                        <div>
                            <p>http://liv3e.click:80/xmltv.php?username=KUd4Spk73M&password=SvbF</p>
                            <button>Copy</button>
                        </div>
                    </div>
                    <div className="EpgModal-Cont-Context-Close">
                        <button>Close</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenEpg: bool => dispatch(isModalActiveDropDownEpg(bool))
    }
}

export default connect(null, mapDispatchToProps)(EpgModal)