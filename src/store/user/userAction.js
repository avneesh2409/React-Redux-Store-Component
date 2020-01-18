import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, Fetch_USER_REQUEST } from './userTypes'

export const fetchUsers = async (url) => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        return await fetch(url).then(response => response.json())
            .then(res => { dispatch(fetchUserSuccess(resp)) }).catch(error => {
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

