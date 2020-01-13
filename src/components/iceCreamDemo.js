import React, { Component } from 'react'
import { connect } from 'react-redux'
import { iceCreamAction } from '../redux/actions/iceCreamAction'
import UserDemo from './userDemo';

class IceCreamDemo extends Component {

    render() {
        return (
            <div className="container">
                <h1>Hey Its Working {this.props.noOfIceCream}</h1>
                <button onClick={this.props.buyIceCream}>Buy IceCream</button>

                <UserDemo />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noOfIceCream: state.iceCream.noOfIceCream
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(iceCreamAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamDemo)