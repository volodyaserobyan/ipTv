import React from 'react'
import userImage from '../../assets/userImage.png'
import notIcon from '../../assets/NotIcon.png'
import messageIcon from '../../assets/GroupMessage.png'
import LogOutIcon from '../../assets/LogOutIcon.png'
import arrowIcon from '../../assets/arrow.png'
import dolarIcon from '../../assets/VectorDolar.png'
import './NavBar.scss'

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <div onClick={() => props.handleClickAside()} className={`m-lines ${props.isOpenAsside}`}>
                <div className="">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </div>

            <div className="NavBar_balance">
                <span><img src={dolarIcon} alt="" /> <p>Balance: 122 Credits</p></span>
                <span><img onClick={() => props.isOpenMessage()} src={messageIcon} alt="" /></span>
                <span><img onClick={() => props.isOpenNotification()} src={notIcon} alt="" /></span>
                <span><img className="User-Image" src={userImage} alt="" /> <p>{localStorage.getItem('userName')}</p></span>
                <span onClick={() => props.handleClickLogs()} className="LogOutSpan"><img alt="" src={LogOutIcon} /> <p>Logs <img alt="" src={arrowIcon} /></p></span>
            </div>
        </nav>
    )
}

export default NavBar