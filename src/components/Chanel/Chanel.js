import React from 'react'
import Tv from './Tv'
import Radio from './Radio'
import './Chanel.scss'

const Chanel = () => {

    return (
        <section className="Chanel">
            <div className="Chanel-Cont">
                <Radio />
                <Radio isRadio={true}/>
            </div>
        </section>
    )
}

export default Chanel