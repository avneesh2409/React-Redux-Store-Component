// import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { loginReducer } from '../reducers/LoginReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(loginReducer,
    composeWithDevTools(applyMiddleware(logger)));

export default store;

