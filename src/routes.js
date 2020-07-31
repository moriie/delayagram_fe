import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Login from './Login/login'
import Signup from './Signup/signup'
import Home from './Home/home'

const Routes = () => {

    return <Router>
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
        </Switch>
    </Router>
}

export default Routes
