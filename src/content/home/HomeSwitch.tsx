import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './HomePage';


const HomeSwitch = () => {

    const location = useLocation()
    console.log("MainContentSwitch", location);

    return (
    <Switch>
        
        <Route exact path="/">
            <HomePage />
        </Route>


    </Switch>
    )

}

export default HomeSwitch