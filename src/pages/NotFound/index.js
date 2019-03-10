import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import HeroRocket from '../../components/HeroRocket';

const MainCol = styled.div`
    margin: auto;
    text-align: center;

    h1 {
        color: white;
        margin: auto;
        text-align: center;
    }
`;

const NotFound = () => {
    return (
        <MainCol>
           <HeroRocket/>
        </MainCol>
    );
}

export default NotFound;