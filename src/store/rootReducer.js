import { combineReducers } from 'redux'
import { reducer } from './user/userReducer'
import { history } from './history'
import { connectRouter } from 'connected-react-router'
const rootReducer = combineReducers({
    userReducer: reducer,
    router: connectRouter(history)
})

export default rootReducer