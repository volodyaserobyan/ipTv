import React from 'react'
import Tv from './Tv'
import Radio from './Radio'
import './Chanel.scss'

const Chanel = () => {

    return (
        <section className="Chanel">
            <div className="Chanel-Cont">
                {/* <div className="Chanel-Cont-Tv">
                    <div className="Chanel-Cont-Tv-Select">
                        <div className="Chanel-Cont-Tv-Select-1">
                            <img src={Tvv} alt="" />
                            <h1>TV</h1>
                        </div>
                        <div className="Chanel-Cont-Tv-Select-2">
                            <p>Show 60 entries</p>
                        </div>
                    </div>
                    <div className="Chanel-Cont-Tv-Title">
                        <div className="Wrapper-Left">
                            <img src={TvIcon} alt="" />
                        </div>
                        <div className="Wrapper-Right">
                            <img className="Wrapper-Right-1" src={Mark} alt="" />
                            <img className="Wrapper-Right-2" src={Label} alt="" />
                        </div>
                    </div>
                    {renderTodos}
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div> */}
                <Radio />
                <Radio isRadio={true}/>
            </div>
        </section>
    )
}

export default Chanel