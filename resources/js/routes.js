// resources/js/components/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Add more routes here */}
            </Switch>
        </Router>
    );
};

export default Routes;
