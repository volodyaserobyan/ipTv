import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { getSettings, postSettings } from '../Action'
import './Settings.scss'
let _ = require('lodash')

const Settings = props => {
    const [selectedOption, setSelectedOption] = useState({ value: '', label: '' })
    const [option, setOption] = useState([])
    const [timezone, setTimezone] = useState('')
    const [accounts, setAccounts] = useState(0)
    const [trials, setTrials] = useState(0)
    const [mail, setMail] = useState('')
    const [dns, setDns] = useState('')

    useEffect(() => {
        if (_.isEmpty(props.settingsGET)) {
            props.getSettings('http://greatexpertdev.site/laravel/ip-tv/public/api/settings')
        }
    }, [])

    useEffect(() => {
        if (props.settingsGET !== undefined) {

            setOption(JSON.parse(props.settingsGET.dateFormatTypes))

            if (props.settingsGET.data !== undefined) {
                let obj = {}
                JSON.parse(props.settingsGET.dateFormatTypes).map(item => {
                    if (item.value === JSON.parse(props.settingsGET.data.date_format).value) {
                        obj = item
                    }
                })
                setMail(props.settingsGET.data.email)
                setDns(props.settingsGET.data.dns)
                setTimezone(props.settingsGET.data.timezone)
                setAccounts(props.settingsGET.data.delete_expired_accounts)
                setTrials(props.settingsGET.data.delete_expired_trails)
                setSelectedOption({ value: obj.value, label: obj.label })
            }
        }
    }, [props.settingsGET])

    useEffect(() => {
        if (props.settingsPOST !== undefined) {
            if (props.settingsPOST.success) {
                alert(props.settingsPOST.message)
                props.getSettings('http://greatexpertdev.site/laravel/ip-tv/public/api/settings')
            }
        }
    }, [props.settingsPOST])

    const handleChangeSelect = selectedOption => {
        setSelectedOption({ value: selectedOption.value, label: selectedOption.label })
    }

    const handleClick = () => {
        const sendObj = {
            email: mail,
            timezone: timezone,
            date_format: selectedOption.value,
            dns: dns,
            delete_expired_accounts: accounts,
            delete_expired_trails: trials
        }
        if (props.settingsGET.data !== undefined) {
            props.postSettings(`http://greatexpertdev.site/laravel/ip-tv/public/api/settings/${props.settingsGET.data.id}`, sendObj, true)
        } else {
            props.postSettings('http://greatexpertdev.site/laravel/ip-tv/public/api/settings', sendObj)
        }
    }

    if (_.isEmpty(props.settingsGET) || option.length == 0) {
        return (<div>Loading...</div>)
    }

    const handleTimezone = e => {
        setTimezone(e.target.value)
    }
    return (
        <section className="Settings">
            <div className="Settings-Cont">
                <div className="Settings-Cont-Title">
                    <h1>Settings</h1>
                    <p onClick={handleClick}>Update Settings</p>
                </div>
                <div className="Settings-Cont-Context">
                    <div className="Settings-Cont-Context-TimeZone item">
                        <div className="Settings-Cont-Context-TimeZone-Title title">
                            <h1>Timezone</h1>
                            <h3>Your Timezone</h3>
                            <p>This neccesary so that the creation and expiry times are correct.</p>
                        </div>
                        <div className="Settings-Cont-Context-TimeZone-Card card">
                            <input
                                placeholder="Timezone"
                                value={timezone}
                                onChange={handleTimezone} />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Date item">
                        <div className="Settings-Cont-Context-Date-Title title">
                            <h1>Date</h1>
                            <h3>Date Format</h3>
                            <p>The way you would like the date displayed.</p>
                        </div>
                        <div className="Settings-Cont-Context-Date-Card card">
                            <Select
                                value={selectedOption}
                                options={option}
                                onChange={handleChangeSelect}
                                className="Select"
                                placeholder="Select Type" />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Recovery item">
                        <div className="Settings-Cont-Context-Recovery-Title title">
                            <h1>Recovery</h1>
                            <h3>Email Address</h3>
                            <p>Email address used for password reset and important notifications.</p>
                        </div>
                        <div className="Settings-Cont-Context-Recovery-Card card">
                            <input
                                placeholder='ceapaaa@yahoo.com'
                                value={mail}
                                onChange={e => setMail(e.target.value)} />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-DNS item">
                        <div className="Settings-Cont-Context-DNS-Title title">
                            <h1>DNS</h1>
                            <h3>Reseller DNS</h3>
                            <p>The default domain name for resellers.</p>
                        </div>
                        <div className="Settings-Cont-Context-DNS-Card card">
                            <input
                                placeholder='liv3e.click'
                                value={dns}
                                onChange={e => setDns(e.target.value)} />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Expired item">
                        <div className="Settings-Cont-Context-Expired-Title title">
                            <h1>Expired / Unused Account Deletion</h1>
                            <h3>Delete Expired Accounts</h3>
                            <p>The amount of days to wait before expired accounts are automatically deleted. 0 to disable delete.</p>
                        </div>
                        <div className="Settings-Cont-Context-Expired-Card card">
                            <input
                                type='number'
                                value={accounts}
                                onChange={e => setAccounts(e.target.value)} />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Delete item">
                        <div className="Settings-Cont-Context-Delete-Title title">
                            <h1>Delete Expired</h1>
                            <h3>Delete Expired Trials</h3>
                            <p>The amount of days to wait before expired trials are automatically deleted.0 to disable delete.</p>
                        </div>
                        <div className="Settings-Cont-Context-Delete-Card card">
                            <input
                                type='number'
                                value={trials}
                                onChange={e => setTrials(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        settingsGET: state.settingsReducer.getSetting,
        settingsPOST: state.settingsReducer.postSetting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSettings: url => dispatch(getSettings(url)),
        postSettings: (url, body, put) => dispatch(postSettings(url, body, put))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)