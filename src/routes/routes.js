import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import GamePage from '../containers/GamePage/GamePage';
import Homepage from '../containers/Homepage/Homepage';
import Login from '../containers/Login/Login';
import Register from '../containers/Register/Register';

const Routes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Switch>
            <Route exact path = '/' render = {() => (isLoggedIn ? <Redirect to= "/gamepage" /> : <Homepage/>)}/>
            <Route exact path = '/gamepage' render =  {() => (isLoggedIn ? <GamePage/> : <Redirect to= "/" />)}/>
            <Route exact path = '/homepage' render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Homepage/>  )}/>
            <Route exact path="/login" render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Login/>  )}/>
            <Route exact path="/register" render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Register/>  )}/>
        </Switch>
    )
}
export default Routes;