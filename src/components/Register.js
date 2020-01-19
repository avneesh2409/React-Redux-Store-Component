import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            dob: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = () => {
        console.log(this.state);
        window.location.href = '/login'
    }
    render() {
        return (
            <div className='jumbotron'>
                <h5 className='text-center text-primary'>Register here</h5>
                <p>Username  :-<input type='text' name='username' onChange={this.changeHandler} /></p>
                <p>password  :-<input type='password' name='password' onChange={this.changeHandler} /></p>
                <p>DOB       :-<input type='date' name='dob' onChange={this.changeHandler} /></p>
                <p>email  :-<input type='email' name='email' onChange={this.changeHandler} /></p>
                <p><button className='btn btn-primary' onClick={this.submitHandler}>Sign Up</button></p>
            </div>


        )
    }
}
