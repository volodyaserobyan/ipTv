import React from 'react'

import './Settings.scss'

const Settings = () => {

    return (
        <section className="Settings">
            <div className="Settings-Cont">
                <div className="Settings-Cont-Title">
                    <h1>Settings</h1>
                    <p>Update Settings</p>
                </div>
                <div className="Settings-Cont-Context">
                    <div className="Settings-Cont-Context-TimeZone item">
                        <div className="Settings-Cont-Context-TimeZone-Title title">
                            <h1>Timezone</h1>
                            <h3>Your Timezone</h3>
                            <p>This neccesary so that the creation and expiry times are correct.</p>
                        </div>
                        <div className="Settings-Cont-Context-TimeZone-Card card">
                            <input placeholder="Username" />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Date item">
                        <div className="Settings-Cont-Context-Date-Title title">
                            <h1>Date</h1>
                            <h3>Date Format</h3>
                            <p>The way you would like the date displayed.</p>
                        </div>
                        <div className="Settings-Cont-Context-Date-Card card">
                            <input type='date' />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Recovery item">
                        <div className="Settings-Cont-Context-Recovery-Title title">
                            <h1>Recovery</h1>
                            <h3>Email Address</h3>
                            <p>Email address used for password reset and important notifications.</p>
                        </div>
                        <div className="Settings-Cont-Context-Recovery-Card card">
                            <input placeholder='ceapaaa@yahoo.com' />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-DNS item">
                        <div className="Settings-Cont-Context-DNS-Title title">
                            <h1>DNS</h1>
                            <h3>Reseller DNS</h3>
                            <p>The default domain name for resellers.</p>
                        </div>
                        <div className="Settings-Cont-Context-DNS-Card card">
                            <input placeholder='liv3e.click' />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Expired item">
                        <div className="Settings-Cont-Context-Expired-Title title">
                            <h1>Expired / Unused Account Deletion</h1>
                            <h3>Delete Expired Accounts</h3>
                            <p>The amount of days to wait before expired accounts are automatically deleted. 0 to disable delete.</p>
                        </div>
                        <div className="Settings-Cont-Context-Expired-Card card">
                            <input type='number' />
                        </div>
                    </div>
                    <div className="Settings-Cont-Context-Delete item">
                        <div className="Settings-Cont-Context-Delete-Title title">
                            <h1>Delete Expired</h1>
                            <h3>Delete Expired Trials</h3>
                            <p>The amount of days to wait before expired trials are automatically deleted.0 to disable delete.</p>
                        </div>
                        <div className="Settings-Cont-Context-Delete-Card card">
                            <input type='number' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings