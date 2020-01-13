import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/actions/userAction';



const UserDemo = (props) => {
    const clickhandler = () => {
        props.callApi()
    }
    return (
        (props.loading) ?
            <h1>Loading.......</h1>
            :
            (props.error) ?
                <h1>error occured while fetching</h1>
                :
                <div>
                    <h1>its working here i am</h1>
                    <button onClick={clickhandler}>click here</button>
                </div>

    )
}


const mapStateToProps = (state) => {
    return {
        loading: state.users.loading,
        error: state.users.error,
        user: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        callApi: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDemo)