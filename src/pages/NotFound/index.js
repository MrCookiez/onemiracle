import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import HeroRocket from '../../components/HeroRocket';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const NotFound = () => {
    return (
        <MainCol>
            <Hero title='PAGE LOST IN SPACE' />
            <br/>
            <HeroRocket/>
        </MainCol>
    );
}

export default NotFound;