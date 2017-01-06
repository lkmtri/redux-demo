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

// inject storeDispatcher as props to Button component
const mapDispatchToProps = dispatch => {
    return {
        storeDispatcher: dispatch
    }
}

// First argument is null since this component doesn't listen to the store
export default connect(null, mapDispatchToProps)(Button)
