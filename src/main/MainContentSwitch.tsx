import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilSwitch from '../content/profil/ProfilSwitch';
import SearchSwitch from '../content/search/SearchSwitch';


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