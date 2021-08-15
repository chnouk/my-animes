import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import MainContentSwitch from './MainContentSwitch';

const MainContent = () => {

    return (
    <Paper>
        <Container maxWidth='xl'>
            <Grid container>
                <MainContentSwitch />
            </Grid>
        </Container>
    </Paper>    
    )
}

export default MainContent