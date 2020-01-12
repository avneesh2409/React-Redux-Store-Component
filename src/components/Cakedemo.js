import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../redux/actions/LoginAction'
import IceCreamDemo from '../components/iceCreamDemo'


const CakeDemo = (props) => {

    return (
        <div className="container">
            <h1>No of cakes {props.noOfCakes}</h1>
            <button onClick={props.buyCake}>BUY CAKE</button>
            <IceCreamDemo />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(loginAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeDemo)