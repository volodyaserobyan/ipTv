import React from 'react'
import DownloadIcon from '../../assets/DownloadIcon.png'
import DisableIcon from '../../assets/disableIcon.png'
import EditIcon from '../../assets/editIcon.png'
import { connect } from 'react-redux'
import './ActionDropDown.scss'
import changePassword from '../../assets/changePassword.png'
import epg from '../../assets/epg.png'
import extend from '../../assets/extend.png'
import isp from '../../assets/isp.png'
import link from '../../assets/link.png'
import stat from '../../assets/stat.png'
import {
    isModalActiveDropDown,
    isModalActiveDropDownEdit,
    isModalActiveDropDownStat,
    isModalActiveDropDownExtend,
    isModalActiveDropDownLink,
    isModalActiveDropDownEpg
} from '../Action'
import { Link } from 'react-router-dom'

const ActionDropDown = props => {

    return (
        <section className="ActionDropDown">
            {props.isMag &&
                <Link to={{
                    pathname: `${process.env.PUBLIC_URL}/dashboard/clients/mag/order`
                }}>
                    <div>
                        <p>BQT ORDER</p>
                    </div>
                </Link>}
            <div onClick={() => props.isModalOpenDownload(true)}>
                <img src={DownloadIcon} alt='' /> <p>Download</p>
            </div>
            <div><img src={DisableIcon} alt='' /> <p>Disable</p></div>
            <div onClick={() => props.isModalOpenEdit(true)}><img src={EditIcon} alt='' /> <p>Edit</p></div>
            <div><img src={changePassword} alt='' /> <p>Change Password</p></div>
            <div onClick={() => props.isModalOpenExtend(true)}><img src={extend} alt='' /><p>Extend</p></div>
            <div onClick={() => props.isModalOpenStat(true)}><img src={stat} alt='' /><p>Stats</p></div>
            <div onClick={() => props.isModalOpenLink(true)}><img src={link} alt='' /><p>Link M3U</p></div>
            <div onClick={() => props.isModalOpenEpg(true)}><img src={epg} alt='' /><p>EPG</p></div>
            <div><img src={isp} alt='' /><p>Reset ISP Lock</p></div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpenDownload: bool => dispatch(isModalActiveDropDown(bool)),
        isModalOpenEdit: bool => dispatch(isModalActiveDropDownEdit(bool)),
        isModalOpenExtend: bool => dispatch(isModalActiveDropDownExtend(bool)),
        isModalOpenStat: bool => dispatch(isModalActiveDropDownStat(bool)),
        isModalOpenLink: bool => dispatch(isModalActiveDropDownLink(bool)),
        isModalOpenEpg: bool => dispatch(isModalActiveDropDownEpg(bool)),
    }
}

export default connect(null, mapDispatchToProps)(ActionDropDown)