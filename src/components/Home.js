import React, { Fragment, Component } from 'react'
import { ShowData } from '../components'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/user/userAction'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        this.props.fetchUser(url)

    }
    render() {

        return (
            <Fragment>
                <div className="jumbotron"><button className="pull-right" onClick={() => {
                    localStorage.clear()
                    window.location.href = '/login'
                }}>logout</button> <button className='pull-left' onClick={() =>
                    window.location.href = '/contact'}>Click Here</button></div>
                <button onClick={this.clickHandler} className='btn btn-success'>click me for dispatching</button>

                <div className="container">
                    {
                        (this.state.data) ? <ShowData data={this.props.data} /> : <div className='loader'></div>
                    }

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.userReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (url) => dispatch(fetchUsers(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)