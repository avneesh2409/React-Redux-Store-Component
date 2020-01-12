import React from 'react';
import { Fetch, CakeDemo, Customers } from '../components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const Router = () => {
    return (

        <Router>
            <Switch>
                <Route exact path='/cakedemo' component={CakeDemo} />
                {/* <Route exact path="/" render={() => (
              <Redirect to="/fetch" />
            )} /> */}
                <Route exact path='/customerlist' component={Customers} />
                <Route exact path='/fetch' component={Fetch} />
            </Switch>
        </Router>
    )
}

export default Router;