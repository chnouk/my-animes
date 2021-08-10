import { AppBar, Box, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


const MainAppBar = () => {

    return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <Box>Main App Bar</Box>
            </Toolbar>
        </AppBar>

    </>
    )

}

export default MainAppBar