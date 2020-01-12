import React, { Component } from 'react';


class OneSignal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            url: '',
            image: '',
            platform: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(e) {
        // console.log(e);
        if (e.target.name === "image") {
            this.setState({
                [e.target.name]: e.target.files[0].name
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }
    onSubmitHandler() {
        console.log(this.state);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Hi its Working</h1>
                <p>
                    <input type='text' name="content" placeholder="message" onChange={this.onChangeHandler} />
                </p>
                <p>
                    <input type='file' name="image" onChange={this.onChangeHandler} />
                </p>
                <p>
                    <select name="platform" onChange={this.onChangeHandler}>
                        <option value='android'>android</option>
                        <option value="ios">IOS</option>
                        <option value="chrome" > CHROME</option>
                        <option value="apple">APPLE</option>
                    </select>
                </p>
                <p>
                    <input type='text' name="title" placeholder="title" onChange={this.onChangeHandler} />
                </p>
                <p>
                    <input type='text' name="url" placeholder="url" onChange={this.onChangeHandler} />
                </p>
                <p>
                    <button onClick={this.onSubmitHandler} className="btn btn success">Submit</button>
                </p>

            </div>

        )
    }
}

export default OneSignal;