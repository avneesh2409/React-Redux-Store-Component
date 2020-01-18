import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, Fetch_USER_REQUEST } from './userTypes'

const initialState = {
    loading: false,
    error: '',
    data: []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: true

            }
        case Fetch_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                error: action.message,
                loading: false
            }
        default: return state
    }
}