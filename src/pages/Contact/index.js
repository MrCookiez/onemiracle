import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Contact = () => {
    return (
        <MainCol>
            <Hero title='ΕΠΙΚΟΙΝΩΝΙΑ' />
        </MainCol>
    );
}

export default Contact;