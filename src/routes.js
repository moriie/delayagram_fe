import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Signup from './Signup/signup'
import Login from './Login/login'
import FrontPage from './FrontPage/frontpage'
import Footer from './Footer/footer'

const Routes = () => {

    return <Router>
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={FrontPage}/>
        </Switch>
        <Footer />
    </Router>
}

export default Routes
