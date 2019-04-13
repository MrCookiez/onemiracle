import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Lessons = () => {
    return (
        <MainCol>
            <Hero title='ΜΑΘΗΜΑΤΑ' />
            <Footer />
        </MainCol>
    );
}

export default Lessons;