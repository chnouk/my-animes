import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfileSwitch from './profile/UserProfileSwitch';
import UserHomePage from './UserHomePage';


const UserSwitch = () => {

    return (
    <Switch>
        
        <Route exact path="/user">
            <UserHomePage />
        </Route>

        <Route path="/user/profile">
            <UserProfileSwitch />
        </Route>

    </Switch>
    )

}

export default UserSwitch