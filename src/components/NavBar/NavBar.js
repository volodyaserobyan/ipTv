import React from 'react'
import userImage from '../../assets/userImage.png'
import notIcon from '../../assets/Group 1.png'
import LogOutIcon from '../../assets/LogOutIcon.png'
import arrowIcon from '../../assets/arrow.png'
import dolarIcon from '../../assets/VectorDolar.png'
import './NavBar.scss'

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <div onClick={() => props.handleClick()} className={`m-lines ${props.isOpen}`}>
                <div className="">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </div>

            <div className="NavBar_balance">
                <span><img src={dolarIcon} alt="" /> <p>Balance: 122 Credits</p></span>
                <span><img src={notIcon} alt="" /></span>
                <span><img className="User-Image" src={userImage} alt="" /> <p>Alex Mendes</p></span>
                <span className="LogOutSpan"><img alt="" src={LogOutIcon} /> <p>Logs <img alt="" src={arrowIcon} /></p></span>
            </div>
        </nav>
    )
}

export default NavBar