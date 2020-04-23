import React, { useEffect } from 'react'
import Radio from './Radio'
import { connect } from 'react-redux'
import { channelList } from '../Action'
import './Chanel.scss'
let _ = require('lodash')

const Chanel = props => {

    useEffect(() => {
        if (_.isEmpty(props.channelReducer)) {
            props.channelData('http://greatexpertdev.site/laravel/ip-tv/public/api/channels')
        }
    }, [])

    if(props.channelReducer === undefined) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <section className="Chanel">
            <div className="Chanel-Cont"> 
                {props.channelReducer.channels.map(item => <Radio item={item} />)}
                {/* <Radio />
                <Radio isRadio={true} /> */}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        channelReducer: state.channelReducer.channel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        channelData: url => dispatch(channelList(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chanel)