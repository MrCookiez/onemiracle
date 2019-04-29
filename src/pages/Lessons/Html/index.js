import React from 'react';
import styled from 'styled-components';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';

const SubContainer = styled.div`
    display: grid;
`;

const Preloader = styled.div`
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23101921' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23152a3c' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23163d59' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23125178' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23006699' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-size: cover;
    border-top: 5px solid white;
    box-sizing: border-box;
    iframe {
        margin-bottom: -5px;
        height: 80vh;
        width: 100%;
    }
`;

const HtmlLessons = () => (
    <div>
        <Hero title='ΜΑΘΗΜΑΤΑ - HTML' height={100} />
        {/** THE CHANGES WILL APPLY BELOW */}
        <SubContainer>
            <Preloader>
                <iframe title='srimba' src="https://scrimba.com/p/p7P5Hd/cWab7AV" />
            </Preloader>
        </SubContainer>
        {/** THE CHANGES WILL APPLY ABOVE */}
        <Footer />
    </div>
);

export default HtmlLessons;