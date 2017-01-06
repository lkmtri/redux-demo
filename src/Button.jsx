import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounterAction, decreaseCounterAction } from './Action'

class Button extends Component {
    increase = () => {
        this.props.storeDispatcher(increaseCounterAction())
    }
    decrease = () => {
        this.props.storeDispatcher(decreaseCounterAction())
    }
    render() {
        return (
            <div>
                <button onClick = { this.increase }>inc</button>
                <button onClick = { this.decrease }>dec</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeDispatcher: dispatch
    }
}

export default connect(null, mapDispatchToProps)(Button)
