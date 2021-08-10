import { Box, Grid } from '@material-ui/core';
import React from 'react';

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