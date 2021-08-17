import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AnimesSearchPage from './AnimesSearchPage';


const AnimesSearchSwitch = () => {

    const location = useLocation()
    console.log("AnimesSearchSwitch", location);

    return (
    <Switch>
        
        <Route exact path="/animes/search">
            <AnimesSearchPage />
        </Route>

    </Switch>
    )

}

export default AnimesSearchSwitch