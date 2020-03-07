import { STORE_USERNAME, STORE_EMAIL, STORE_PASSWORD, STORE_DOB } from "./constant";

const initialState = {
    username: '',
    password: '',
    email: '',
    dob: ''
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case STORE_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case STORE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case STORE_DOB:
            return {
                ...state,
                dob: action.dob
            }
        default: return state
    }
}
export default registerReducer