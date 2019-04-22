import React from 'react';
import styled from 'styled-components';
import SidebarLessons from '../../../components/Lessons/Sidebar';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';

const SubContainer = styled.div`
    display: grid;
`;

const HtmlLessons = () => (
    <div>
        <Hero title='ΜΑΘΗΜΑΤΑ - HTML' height={100} />
        <SubContainer>
            <div>SIDE - MENU</div>
            <div>CONTENT</div>
            <div>SIDE - MENU</div>
        </SubContainer>
        <Footer />
    </div>
);

export default HtmlLessons;