import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Home = () => {
    return (
        <MainCol>
            <Hero title='ΑΡΧΙΚΗ ΣΕΛΙΔΑ' />
        </MainCol>
    );
}

export default Home;