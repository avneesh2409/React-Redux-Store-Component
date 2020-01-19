import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, Fetch_USER_REQUEST } from './userTypes'
import axios from 'axios'

export const fetchUsers = (url) => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get(url)
            .then(response => { dispatch(fetchUserSuccess(response.data)) })
            .catch(error => {
                dispatch(fetchUserFailure(error.message))
            })
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        data: data
    }
}
export const fetchUserFailure = (message) => {
    return {
        type: FETCH_USER_FAILURE,
        error: message
    }
}

export const fetchUserRequest = () => {
    return {
        type: Fetch_USER_REQUEST
    }
}

