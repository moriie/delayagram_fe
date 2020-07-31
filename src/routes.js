import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Login from './Login/login'
import Signup from './Signup/signup'

export const Routes = () => {

    return 
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </Router>
}

