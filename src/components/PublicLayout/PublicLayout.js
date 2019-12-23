import React from 'react'
import dolarIcon from '../../assets/vectorDolar.png'
import ipTv from '../../assets/iptv3.png'
import dashIcon from '../../assets/Group 19.png'
import tvIcon from '../../assets/VectorTv.png'
import userIcon from '../../assets/VectorUser.png'
import addUserIcon from '../../assets.VectoraddUser.png'
import settingsIcon from '../../assets/Settings.png'
import './PublicLayout.scss'

const PublicLayout = ({children}) => {

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
                        <li><img src={dashIcon} /></li>
                        <li><img src={tvIcon} /></li>
                        <li><img src={userIcon} /></li>
                        <li><img src={addUserIcon} /></li>
                        <li><img src={settingsIcon} /></li>
                    </ul>
                </div>
            </aside>
            <nav className="Navbar">
                <div className="Navbar-Balance">
                    <img src={dolarIcon} alt="" />
                    <p></p>
                </div>
            </nav>
        </section>
    )
}

export default PublicLayout