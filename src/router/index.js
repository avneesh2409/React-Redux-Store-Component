import React from 'react';
import { NewGraph } from '../components/newGraph';
import { LoginForm, Contact, Home, Register, TestApi, Moment } from '../components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OneSignal from '../components/oneSignalApi';
const isLoggedIn = (localStorage.isLoggedIn) ? true : false

const Routers = () => {
    return (

        <Router>
            {(!isLoggedIn) ?
                <Switch>
                    <Route exact path='/login' component={LoginForm} />
                    <Route exact path='/register' component={Register} />

                </Switch>
                :
                <Switch>
                    <Route exact path='/newgraph' component={NewGraph} />
                    <Route exact path='/onesignal' component={OneSignal} />
                    <Route exact path='/moment' component={Moment} />
                    <Route exact path='/testapi' component={TestApi} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            }
        </Router>
    )
}

export default Routers;