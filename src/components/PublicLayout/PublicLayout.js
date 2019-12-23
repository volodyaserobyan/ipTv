import React from 'react'
import dolarIcon from '../../assets/VectorDolar.png'
import ipTv from '../../assets/iptv3.png'
import dashIcon from '../../assets/Group 19.png'
import tvIcon from '../../assets/VectorTv.png'
import userIcon from '../../assets/VectorUser.png'
import addUserIcon from '../../assets/VectoraddUser.png'
import settingsIcon from '../../assets/Settings.png'
import './PublicLayout.scss'

const PublicLayout = ({ children }) => {

    return (
        <section>
            <aside>
                <div className="Main-Navbar">
                    <nav>
                        <img src={ipTv} alt="" />
                    </nav>
                </div>
                <div className="Nav-Wrapper">
                    <ul>
                        <li><img src={dashIcon} alt="" /></li>
                        <li><img src={tvIcon} alt="" /></li>
                        <li><img src={userIcon} alt="" /></li>
                        <li><img src={addUserIcon} alt="" /></li>
                        <li><img src={settingsIcon} alt="" /></li>
                    </ul>
                </div>
            </aside>
            <div>
                <nav className="Navbar">
                    <img src={dolarIcon} alt="" />
                </nav>
            </div>
        </section>
    )
}

export default PublicLayout