import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AnimeSwitch from '../content/anime/AnimeSwitch';
import HomeSwitch from '../content/home/HomeSwitch';
import UserSwitch from '../content/user/UserSwitch';


const MainContentSwitch = () => {

    const location = useLocation()
    console.log("MainContentSwitch", location);
    
    return (
    <Switch>

        <Route exact path="/">
            <HomeSwitch />
        </Route>

        <Route path="/animes">
            <AnimeSwitch />
        </Route>

        <Route path="/user">
            <UserSwitch />
        </Route>

    </Switch>
    )

}

export default MainContentSwitch