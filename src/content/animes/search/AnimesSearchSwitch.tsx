import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnimesSearchPage from './AnimesSearchPage';


const AnimesSearchSwitch = () => {

    return (
    <Switch>
        
        <Route path="/animes/search">
            <AnimesSearchPage />
        </Route>

    </Switch>
    )

}

export default AnimesSearchSwitch