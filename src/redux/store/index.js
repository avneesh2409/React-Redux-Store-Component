// import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { loginReducer } from '../reducers/LoginReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import iceCreamReducer from '../reducers/iceCreamReducer'
import userReducer from '../reducers/userReducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    cake: loginReducer,
    iceCream: iceCreamReducer,
    users: userReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;

