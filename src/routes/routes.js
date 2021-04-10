import React from 'react';
import { Route, Switch } from 'react-router';

const routes = props => {
    return (
        <Switch>
            <Route exact path = '/' render = {routeProps=> <Homepage route = {routeProps} {...props}/>}/>
        </Switch>
    )
}
export default routes;