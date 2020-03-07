import { combineReducers } from 'redux'
import { reducer } from './user/userReducer'
import registerReducer from './register/reducer'

const rootReducer = combineReducers({
    userReducer: reducer,
    register: registerReducer
})

export default rootReducer