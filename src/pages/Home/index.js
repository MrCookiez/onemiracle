import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardBlock from '../../components/CardBlock';
import BlockLeft from '../../components/BlockLeft';
import BlockRight from '../../components/BlockRight';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
// Content
import data from './content.json';
// Images
import images from './images';
// Styles
import * as styles from './styles';

const {
    blockImages,
    cardImages,
} = images;


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
        buttonTitle,
        section
    },
    content,
    cards,

} = data;

const BlockContainer = styled.div`
`;

const Home = () => (
    <Page>
        <Hero title={title} subTitle={subTitle} />
        <BlockContainer>

            {cards.map((card, index) => {
                return (
                    <div key={index}>
                        <Card cardImg={cardImages[card.id]} cardTitle={card.cardTitle} cardText={card.cardText} />
                    </div>
                )    
            })}

            {content.map((item, index) => {
                return (
                    <div key={index}>
                        { item.type === 'left' && <BlockLeft techLogo={blockImages[item.id]} heading={item.heading} to={item.to} /> }
                        { item.type === 'right' && <BlockRight techLogo={blockImages[item.id]} heading={item.heading} to='/' /> }
                    </div>
                )
            })}

        </BlockContainer>
        <Footer />
    </Page>
);

export default Home;