import { AppBar, Box, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


const MainBreadcrumbs = () => {

    return (
    <Grid container xs={12}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}><Box>MainBreadcrumbs</Box></Grid>
        <Grid item xs={6}></Grid>
    </Grid>
    )

}

export default MainBreadcrumbs