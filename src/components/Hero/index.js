import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => <h1>{title}</h1>;

const HeroTitle = styled(Title)`
    text-align: center;
`;

const Hero = (props) =>  {  
    return (
        <div>
            <HeroTitle title={ props.title } />
        </div>
    );
};

export default Hero;