import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SearchHomePage from './SearchHomePage';


const SearchSwitch = () => {

    return (
    <Switch>
        
        <Route path="/search">
            <SearchHomePage />
        </Route>

    </Switch>
    )

}

export default SearchSwitch