import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
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

const CardSection = styled.div`
    background-image: linear-gradient(#00101f, rgba(0,0,0,0.5), rgba(41,162,204,0.99));
`;

const CardRow = styled.div`
    ${styles.cardRow};
`;

const Home = () => (
    <Page>
        <Hero title={title} subTitle={subTitle} />
        <BlockContainer>
            
            <CardSection>
                {cards.map((card, index) => {
                    return (
                        <CardRow key={index}>
                            <Card  cardTitle={card.cardTitle} cardText={card.cardText} />
                        </CardRow>
                    )    
                })}
            </CardSection>

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