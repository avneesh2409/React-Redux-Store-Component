//import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger'
import rootReducer from './rootReducer'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import { history } from './history'

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);

export default store