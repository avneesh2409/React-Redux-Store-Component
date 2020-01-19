import { combineReducers } from 'redux'
import { reducer } from './user/userReducer'


const rootReducer = combineReducers({
    userReducer: reducer
})

export default rootReducer