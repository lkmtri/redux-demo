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

const mapStateToProps = state => {
    return {
        connectToCounter: state.counter
    }
}

export default connect(mapStateToProps)(Counter)
