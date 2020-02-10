import React from 'react'
import './ModalFooter.scss'

const ModalFooter = () => {
    return (
        <section className="ModalFooter">
            <div>
                <div>
                    <p>0 Credits</p>
                </div>
                <div>
                    <p>Create Line</p>
                </div>
                <div className='ModalFooter-Close'>
                    <p>Close</p>
                </div>
            </div>
        </section>
    )
}

export default ModalFooter