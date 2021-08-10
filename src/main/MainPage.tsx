import React from 'react';
import MainAppBar from './MainAppBar';
import MainContent from './MainContent';
import MainCrumBread from './MainBreadcrumbs';

const MainPage = () => {

    return (
    <>
        <MainAppBar />

        <MainCrumBread />

        <MainContent />
    </>
    )

}

export default MainPage