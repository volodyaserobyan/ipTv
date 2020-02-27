import React from 'react'
import './ModalFooter.scss'
let classNames = require('classnames');

const ModalFooter = props => {

    return (
        <section className="ModalFooter">
            <div className="ModalFooter-Cont">
                <div className={classNames({
                    extends: props.extends
                })}>
                    <p>{props.credit != undefined ? props.credit : '0 Credits'}</p>
                </div>
                <div className={classNames({
                    extends: props.extends
                })}>
                    <p>{props.line != undefined ? props.line : 'Create Line'}</p>
                </div>
                <div className={'ModalFooter-Close', classNames({
                    extends: props.extends
                })}>
                    <p>Close</p>
                </div>
            </div>
        </section>
    )
}

export default ModalFooter