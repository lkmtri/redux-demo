import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                { this.props.connectToCounter }
            </div>
        )
    }
}

// only listen to changes in the counter field of the store
// pass the value of the counter field as connectToCounter props to the Counter component
const mapStateToProps = state => {
    return {
        connectToCounter: state.counter
    }
}

export default connect(mapStateToProps)(Counter)
