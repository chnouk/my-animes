import { AppBar, Box, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProfilPage from './ProfilPage';
import SearchPage from './SearchPage';

const HomePage = () => {

    return (
    <>
        {/* <AppBar>
            <Toolbar>
                <Box>
                    coucou
                </Box>
            </Toolbar>
        </AppBar> */}
        <Grid container xs={12}>
            <Grid item container xs={12} style={{height:'10vh', backgroundColor:'lightblue'}}>
                <Grid item xs={12}>
                    <Button>
                        <Link to="/home">HomePage</Link>
                    </Button> 
                </Grid>
            </Grid>
            <Grid item container xs={2}>

                <Grid item xs={12}>
                    <Button>
                        <Link to="/search">SearchPage</Link>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button>
                        <Link to="/profil">ProfilPage</Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Switch>
                     <Route path="/search">
                       <SearchPage />
                     </Route>
                     <Route path="/profil">
                       <ProfilPage />
                     </Route>
                </Switch>
            </Grid>

        </Grid>
    </>
    )

}

export default HomePage