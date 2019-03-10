import React from 'react';
import styled from 'styled-components';
import BlockContainer from '../../components/BlockContainer';
import Hero from '../../components/Hero';
// import ScrollUpButton from "../../components/ScrollToTopButton";
// Content
import data from './content.json';
// Styles
import * as styles from './styles';

// const test  = require( "../../assets/js/test");
const Page = styled.div`
    text-align: center;
    margin: auto;
`;

const StyledCodeContainer = styled.code`
    ${styles.styledCodeContainer}
`;

const StyledMainContainer = styled.div`
    width: 60%;
    margin: auto;
    text-align: justify;
    padding: 50px 0;
`;

const {
    page,
    meta: {
        title,
        description
    },
    hero: {
        buttonTitle
    },
    content,

} = data;


const Home = () => (
    <Page>
        <Hero title={title} />
        <BlockContainer data={content} />
    </Page>
);

export default Home;