import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';


const UserProfileSwitch = () => {

    return (
    <Switch>
        
        <Route exact path="/user/profile">
            <UserProfilePage />
        </Route>

    </Switch>
    )

}

export default UserProfileSwitch