import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import HeroButton from './components/HeroButton';

const Title = ({ title }) => <h1>{title}</h1>;

const HomeHero = styled.div`
    ${styles.stylesHero};
`;

const HeroTitle = styled(Title)`
    text-align: center;
`;
const Container = styled.div`
    ${styles.styledContainer};
`;
const SectionA = styled.div`
`;
const SectionB = styled.div`
`;
const SectionC = styled.div`
`;
const SectionD = styled.div`
`;
const SectionE = styled.div`
`;

const Hero = (props) =>  {  
    return (
        <Fragment>
            
            <HomeHero>
                <HeroTitle title={ props.title } />
            </HomeHero>
            <HeroButton/>
            <Container>
                SECTION CONTAINER
            </Container>
        </Fragment>

    );
};

export default Hero;