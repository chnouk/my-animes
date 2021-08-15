import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AnimePage from './AnimePage';
import AnimesDetailSwitch from './detail/AnimesDetailSwitch';
import AnimesSearchSwitch from './search/AnimesSearchSwitch';


const AnimeSwitch = () => {

    const location = useLocation()
    console.log("AnimeSwitch", location);
    
    return (
    <Switch>
        
        <Route exact path="/animes">
            <AnimePage />
        </Route>

        <Route path="/animes/search">
            <AnimesSearchSwitch />
        </Route>

        <Route path="/animes/detail">
            <AnimesDetailSwitch />
        </Route>

    </Switch>
    )

}

export default AnimeSwitch