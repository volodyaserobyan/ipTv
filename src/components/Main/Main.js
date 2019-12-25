import React from 'react'
import useIcons from '../../assets/VectorUserss.png'
import graph from '../../assets/VectorGraph.png'
import calendar from '../../assets/calendar.png'
import subIcon from '../../assets/subscription 1.png'
import Diagram from '../Diagram/Diagram'

import './Main.scss'

const Main = () => {

    return (
        <section className="Main">
            <div className="Main-Cont">
                <div className="Main-Cont-Cards">
                    <div className="Main-Cont-Cards_item">
                        <div>
                            <div className="Main-Cont-Cards_item_content">
                                <h1>250</h1>
                                <p>Online Users</p>
                            </div>
                            <img src={useIcons} alt="" />
                        </div>
                    </div>
                    <div className="Main-Cont-Cards_item">
                        <div>
                            <div className="Main-Cont-Cards_item_content">
                                <h1>30</h1>
                                <p>Sales Today</p>
                            </div>
                            <img src={graph} alt="" />
                        </div>
                    </div>
                    <div className="Main-Cont-Cards_item">
                        <div>
                            <div className="Main-Cont-Cards_item_content">
                                <h1>70%</h1>
                                <p>Sales This Month</p>
                            </div>
                            <img src={calendar} alt="" />
                        </div>
                    </div>
                    <div className="Main-Cont-Cards_item">
                        <div>
                            <div className="Main-Cont-Cards_item_content">
                                <h1>600</h1>
                                <p>Active Subscriptions</p>
                            </div>
                            <img src={subIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="Main-Cont-DiagramWrapper">
                    <div className="Main-Cont-DiagramWrapper_diagram">
                        <Diagram />
                    </div>
                    <div className="Fake">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main