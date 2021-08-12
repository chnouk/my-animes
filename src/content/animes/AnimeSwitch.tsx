import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnimeHomePage from './AnimeHomePage';
import AnimesDetailSwitch from './detail/AnimesDetailSwitch';
import AnimesSearchSwitch from './search/AnimesSearchSwitch';


const AnimeSwitch = () => {

    return (
    <Switch>
        
        <Route path="/animes">
            <AnimeHomePage />
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