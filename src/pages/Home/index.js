import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
`;

const Home = () => {
    return (
        <MainCol>
            <Hero title='HOME PAGE' />
        </MainCol>
    );
}

export default Home;