import { FETCH_USER_SUCCEED, FETCH_USER_FAILD, FETCH_USER_LOADING } from '../constants'


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userRequest)
        fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
            const user = response.data
            console.log(user)
            dispatch(userSuccess(user))
        }).catch(err => {
            console.log(err)
            dispatch(err.message)
        })
    }
}


export const userRequest = () => {
    return {
        type: FETCH_USER_LOADING
    }
}

export const userSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCEED,
        payload: users
    }
}

export const userLoading = (err) => {
    return {
        type: FETCH_USER_FAILD,
        payload: err
    }
}