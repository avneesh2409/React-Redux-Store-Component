import React from 'react'
import { fetchUsers } from '../store/user/userAction'
import { useSelector } from 'react-redux';
import { connect } from 'react-redux'

export const Contact = (props) => {
    const payload = useSelector(state => state.userReducer)
    let url = 'http://localhost:2002/products/get'
    //    const fetchUser = useDispatch(dispatch => dispatch(fetchUsers()))
    return (
        <div classname='jumbotron'>
            <h1>I am inside Contact page</h1>
            <button onClick={() => props.fetchUser(url)} className='pull-center'>click here to dispatch the function</button>
            <button onClick={() => console.log(payload)} className='pull-right'>click here to fetch users</button>
            <button onClick={() =>
                window.location.href = '/home'} classname='pull-left'>Go back</button>
        <div cla
        </div >

    )
}

// const mapStateToProps = (state) => {
//     return {
//         payload: state.userReducer
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (url) => dispatch(fetchUsers(url))
    }
}

export default connect(null, mapDispatchToProps)(Contact)
