import React, { Component } from 'react'
import { connect } from 'react-redux'
import { iceCreamAction } from '../redux/actions/iceCreamAction'

const mapStateToProps = (state) => {
    return {
        noOfIceCream: state.noOfIceCream
    }
}
const mapStateToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch()
    }
}
class IceCreamDemo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1>Hey Its Working {this.props.iceCream.noOfIceCream}</h1>
            <button onClick={this.props.buyIceCream}>Buy IceCream</button>
        )
    }
}

