import React from 'react'

const Purchase = () => {

    return (
        <div className='SubSellers-Cont-Purchase'>
            <div className='SubSellers-Cont-Purchase-Title'>
                <p>Total Credits</p>
                <p>Purchase Cost</p>
                <p>Remaining CRedits</p>
            </div>
            <div className="SubSellers-Cont-Purchase-Item">
                <p>0.00</p>
                <p>1.00</p>
                <p>-1.00</p>
            </div>
            <div className="SubSellers-Cont-Purchase-Item">
                <p>0.00</p>
                <p>1.00</p>
                <p>-1.00</p>
            </div>
            <div className="SubSellers-Cont-Purchase-Item">
                <p>0.00</p>
                <p>1.00</p>
                <p>-1.00</p>
            </div>

            <button>Purchase</button>
        </div>
    )
}

export default Purchase