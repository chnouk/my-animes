import React from 'react';
import MainAppBar from './MainAppBar';
import MainContent from './MainContent';
import MainBreadcrumbs from './MainBreadcrumbs';
import { Container } from '@material-ui/core';

const MainPage = () => {

    return (
    <Container maxWidth='lg'>

        <MainAppBar />

        <MainBreadcrumbs />

        <MainContent />
        
    </Container>
    )

}

export default MainPage