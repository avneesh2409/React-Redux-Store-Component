import React from 'react';
import { LoginForm, Home, Contact } from '../components'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const isLoggedIn = (localStorage.isLoggedIn) ? true : false

const Routers = () => {
    return (

        <Router>
            {(!isLoggedIn) ?
                <Switch>
                    <Route exact path='/login' component={LoginForm} />
                </Switch>
                :
                <Switch>

                    <Route exact path='/home' component={Home} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path="/" render={() => (
                        <Redirect to="/home" />
                    )} />
                </Switch>
            }
        </Router>
    )
}

export default Routers;