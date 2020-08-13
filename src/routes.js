import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from './Home/home'

const Routes = () => {

    return <Router>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
}

export default Routes
