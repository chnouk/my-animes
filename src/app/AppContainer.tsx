import React from 'react';
import MainAppBar from '../main/MainAppBar';
import MainContent from '../main/MainContent';
import { Container } from '@material-ui/core';
import MainBreadcrumbs from '../main/MainBreadcrumbs';

const AppContainer = () => {

    return (
    <Container maxWidth='lg'>

        <MainAppBar />

        <MainBreadcrumbs />

        <MainContent />
        
    </Container>
    )

}

export default AppContainer