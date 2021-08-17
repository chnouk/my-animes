import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnimesDetailPage from './AnimesDetailPage';


const AnimesDetailSwitch = () => {

    return (
    <Switch>
        
        <Route exact path="/animes/Detail">
            <AnimesDetailPage />
        </Route>

    </Switch>
    )

}

export default AnimesDetailSwitch