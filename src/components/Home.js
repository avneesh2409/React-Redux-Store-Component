import React, { Component, Fragment } from 'react'
import { ShowData } from '../components'
import { fetchUsers } from '../api';
//import { useHistory, useLocation } from 'react-router'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        this.getData(url)
    }
    getData = async (url) => {
        let element = null
        let response = await fetchUsers(url)
        console.log(response)
        if (response) {
            element = response.map((e, i) => {
                return (
                    <div className="jumbotron" key={i}>
                        {e.userId}  ==> {e.title}
                    </div>
                )
            })

        }

        this.setState({
            data: element
        })
    }
    render() {
        return (
            <Fragment>
                <div className="jumbotron"><button className="pull-right" onClick={() => {
                    localStorage.clear()
                    window.location.href = '/login'
                }}>logout</button></div>
                <div className="container">
                    {
                        (this.state.data) ? <ShowData data={this.state.data} /> : <div className="loader"></div>
                    }
                    <button onClick={() =>
                        window.location.href = '/contact'}>Click Here</button>
                </div>
            </Fragment>
        )
    }

}

