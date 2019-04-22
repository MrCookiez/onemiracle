import React from 'react';
import styled from 'styled-components';
import SidebarLessons from '../../../components/Lessons/Sidebar';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import bgScrimba from '../../../assets/images/lessons/scrimba-loading-screen.gif';

const SubContainer = styled.div`
`;

const Preloader = styled.div`
    background: url(${bgScrimba});
    background-size: cover;
    border: 3px solid #006699;
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
        <SubContainer>
            <Preloader>
                <iframe title='srimba' src="https://scrimba.com/p/p7P5Hd/cWab7AV" />
            </Preloader>
        </SubContainer>
        <Footer />
    </div>
);

export default HtmlLessons;