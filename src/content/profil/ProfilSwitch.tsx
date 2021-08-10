import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilHomePage from './ProfilHomePage';


const ProfilSwitch = () => {

    return (
    <Switch>
        
        <Route path="/profil">
            <ProfilHomePage />
        </Route>

    </Switch>
    )

}

export default ProfilSwitch