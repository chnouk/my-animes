import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilSwitch from '../content/user/profile/UserProfileSwitch';
import SearchSwitch from '../content/animes/search/AnimesSearchSwitch';


const MainContentSwitch = () => {

    return (
    <Switch>
        
        <Route path="/search">
            <SearchSwitch />
        </Route>

        <Route path="/profil">
            <ProfilSwitch />
        </Route>

    </Switch>
    )

}

export default MainContentSwitch