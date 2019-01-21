import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Lessons = () => {
    return (
        <MainCol>
            <Hero title='ΜΑΘΗΜΑΤΑ' />
        </MainCol>
    );
}

export default Lessons;