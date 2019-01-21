import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Blog = () => {
    return (
        <MainCol>
            <Hero title='BLOG PAGE' />
        </MainCol>
    );
}

export default Blog;