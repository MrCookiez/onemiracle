import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Forum = () => {
    return (
        <MainCol>
            <Hero title='FORUM PAGE' />
        </MainCol>
    );
}

export default Forum;