import React from 'react'
import VectorBack from '../../../../assets/VectorBack.png'
import { withRouter } from 'react-router'
import './BQTorder.scss'

const BQTorder = props => {
    return (
        <section className='BQTorder'>
            <div className='BQTorder-Cont'>
                <div className='BQTorder-Cont-Title'>
                    <div onClick={() => props.history.goBack()} className='BQTorder-Cont-Title-Back'>
                        <div>
                            <img src='VectorBack' alt='' />
                            <p>Back</p>
                        </div>
                    </div>
                    <div className='BQTorder-Cont-Title_1'>
                        <div>
                            <h1>Bouquet Editor</h1>
                            <p>Here you can arrange the order of the channel groups.</p>
                        </div>
                        <button>Update Group Order</button>
                    </div>
                </div>
                <div className='BQTorder-Cont-Context'>
                    <div className='BQTorder-Cont-Context-Item'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(BQTorder)