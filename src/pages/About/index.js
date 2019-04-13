import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const About = () => {
    return (
        <MainCol>
            <Hero title='ABOUT PAGE' />


            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </MainCol>
    );
}

export default About;