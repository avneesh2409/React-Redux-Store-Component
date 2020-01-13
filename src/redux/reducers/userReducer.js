//import React from 'react'
import { FETCH_USER_LOADING, FETCH_USER_SUCCEED, FETCH_USER_FAILD } from '../constants';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCEED:
            return {
                error: '',
                loading: false,
                users: action.payload
            }
        case FETCH_USER_FAILD:
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer