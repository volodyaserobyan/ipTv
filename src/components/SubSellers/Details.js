import React from 'react'

const Details = () => {

    return (
        <form className="SubSellers-Cont-Context">
            <input className='inp' type='text' placeholder='Username' />
            <input className='inp' type='text' placeholder='Password' />
            <input className='inp' type='text' placeholder='Email Address' />
            <input className='inp' type='text' placeholder='Reseller DNS' />
            <textarea placeholder='notes' />
            <input type='submit' className='SubSellers-Cont-Context_submit' value='next' />
        </form>
    )
}

export default Details