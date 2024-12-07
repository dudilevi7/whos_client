import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import EditProfile from '../containers/EditProfile/EditProfile';
import GamePage from '../containers/GamePage/GamePage';
import Homepage from '../containers/Homepage/Homepage';
import Login from '../containers/Login/Login';
import Register from '../containers/Register/Register';
import Statistics from '../containers/Statistics/Statistics';
import AddQuestion from "../containers/AddQuestion/AddQuestion";

const Routes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isAdmin = useSelector(state => state.auth.isAdmin);
    return (
        <Switch>
            <Route exact path = '/' render = {() => (isLoggedIn ? <Redirect to= "/gamepage" /> : <Homepage/>)}/>
            <Route exact path = '/gamepage' render =  {() => (isLoggedIn ? <GamePage/> : <Redirect to= "/" />)}/>
            <Route exact path = '/homepage' render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Homepage/>  )}/>
            <Route exact path="/login" render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Login/>  )}/>
            <Route exact path="/register" render = {() => (isLoggedIn ? <Redirect to= "/gamepage"/> : <Register/>  )}/>
            <Route exact path = '/statistics' render = {() => (isLoggedIn ? <Statistics/> : <Redirect to= "/"/> )}/>
            <Route exact path = '/add-question' render = {() => (isLoggedIn && isAdmin ? <AddQuestion /> : <Redirect to= "/"/> )}/>
            <Route exact path = '/ep' render = {() => (isLoggedIn ? <EditProfile/> : <Redirect to= "/"/> )}/>
        </Switch>
    )
}
export default Routes