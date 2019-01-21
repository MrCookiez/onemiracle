import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import HeroRocket from '../../components/HeroRocket';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Error = () => {
    return (
        <MainCol>
            <Hero title='PAGE LOST IN SPACE' />
            <HeroRocket/>
        </MainCol>
    );
}

export default Error;