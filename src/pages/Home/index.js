import React from 'react';
import styled from 'styled-components';
import BlockContainer from '../../components/BlockContainer';
import Hero from '../../components/Hero';
import * as images from '../../assets/images/logos';
// Content
import data from './content.json';
// Styles
import * as styles from './styles';

const Page = styled.div`
    text-align: center;
    margin: auto;
`;

const {
    page,
    meta: {
        description
    },
    hero: {
        title,
        subTitle,
        buttonTitle
    },
    content,

} = data;


const Home = () => (
    <Page>
        <Hero title={title} subTitle={subTitle} />
        <BlockContainer data={content} />
    </Page>
);

export default Home;