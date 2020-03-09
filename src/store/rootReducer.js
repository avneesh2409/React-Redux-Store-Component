import { combineReducers } from 'redux'
import { reducer } from './user/userReducer'
import registerReducer from './register/reducer'
import platformReducer from './graph/reducer';

const rootReducer = combineReducers({
    userReducer: reducer,
    register: registerReducer,
    graph: platformReducer
})

export default rootReducer