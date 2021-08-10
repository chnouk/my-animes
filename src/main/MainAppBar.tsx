import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react';

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