import React, { Component } from 'react'


export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandler = () => {
        console.log(this.state)
        localStorage.setItem('isLoggedIn', true)
        window.location.href = '/home'
    }

    render() {
        if (!localStorage.getItem('isLoggedIn')) {
            return (
                < div className="jumbotron">

                    <p>Enter Username     :- <input type="text" name="username" onChange={this.onChangeHandler} /></p>
                    <p>Enter Password     :- <input type="password" name="password" onChange={this.onChangeHandler} /></p>
                    <p><button onClick={this.onSubmitHandler}>Sign In</button></p>

                </div >
            )
        }
        return (
            <div>
                <h1>Sorry you are not logged in </h1>
            </div>
        )
    }
}
