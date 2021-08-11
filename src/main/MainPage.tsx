import React from 'react';
import MainAppBar from './MainAppBar';
import MainContent from './MainContent';
import MainCrumBread from './MainBreadcrumbs';
import { Container } from '@material-ui/core';

const MainPage = () => {

    return (
    <Container maxWidth='lg'>
        <MainAppBar />
        <MainCrumBread />
        <MainContent />
    </Container>
    )

}

export default MainPage