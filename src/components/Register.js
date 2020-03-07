import React, { Component } from 'react'
import { connect } from 'react-redux'
import { storeDob, storeEmail, storePassword, storeUsername } from '../store/register'
class Register extends Component {
    changeHandler = (e) => {
        switch (e.target.name) {
            case "username":
                this.props.storeUsername(e.target.value); break;
            case "password":
                this.props.storePassword(e.target.value); break;
            case "email":
                this.props.storeEmail(e.target.value); break;
            case "dob":
                this.props.storeDob(e.target.value); break;
            default:




        }
    }
    submitHandler = () => {
        console.log(this.props.data);
        this.props.storeDob('')
        this.props.storeEmail('')
        this.props.storePassword('')
        this.props.storeUsername('')

    }
    render() {
        return (
            <div className='jumbotron'>
                <h5 className='text-center text-primary'>Register here</h5>
                <p>Username  :-<input type='text' name='username' value={this.props.data.username} onChange={this.changeHandler} /></p>
                <p>password  :-<input type='password' name='password' value={this.props.data.password} onChange={this.changeHandler} /></p>
                <p>age       :-<input type='text' name='dob' value={this.props.data.dob} onChange={this.changeHandler} /></p>
                <p>email  :-<input type='email' name='email' value={this.props.data.email} onChange={this.changeHandler} /></p>
                <p><button className='btn btn-primary' onClick={this.submitHandler}>Sign Up</button></p>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.register
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeDob: (dob) => dispatch(storeDob(dob)),
        storeEmail: (email) => dispatch(storeEmail(email)),
        storePassword: (password) => dispatch(storePassword(password)),
        storeUsername: (username) => dispatch(storeUsername(username))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)