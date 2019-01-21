import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const About = () => {
    return (
        <MainCol>
            <Hero title='ABOUT PAGE' />
        </MainCol>
    );
}

export default About;