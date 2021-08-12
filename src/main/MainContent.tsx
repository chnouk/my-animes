import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import MainContentSwitch from './MainContentSwitch';


const MainContent = () => {

    return (
    <Container maxWidth='xl'>
        <Grid container xs={12}>

            <Grid item container xs={12}>
                <Box>MainContent</Box>
            </Grid>

            <Grid item xs={2} />

            <Grid item container xs={2}>
                <Grid item xs={12}>
                    <Button>
                        <Link to="/animes/search">Search</Link>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button>
                        <Link to="/user/profile">Profile</Link>
                    </Button>
                </Grid>
            </Grid>

            <Grid item container xs={4} />
                    <MainContentSwitch />
            <Grid item xs={2} />

        </Grid>
    </Container>
    )

}

export default MainContent