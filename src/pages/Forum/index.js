import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
// Content
import data from './content.json';
// Styles
import * as styles from './styles';

const {
    page,
    meta: {
        title,
        description
    },
    content

} = data;

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Forum = () => {
    return (
        <MainCol>
            <Hero title={title} />
        </MainCol>
    );
}

export default Forum;