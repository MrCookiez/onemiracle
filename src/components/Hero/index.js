import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import Button from './components/HeroButton';

const Title = ({ title }) => <span>{title}</span>;

const HomeHero = styled.div`
    ${styles.stylesHero};
`;

const CurrentLocation = styled(Title)`
    width: '100%';
    text-align: center;
    display: block;
`;
const HeroButton = styled(Button)`
    ${styles.stylesButton};
`;

const Hero = ({ title, label }) => {

    let mainHeader =  <span dangerouslySetInnerHTML={{__html: title}} />;

    return (
        <Fragment>
            <HomeHero>
                <Title title={mainHeader} />
                {/* <HeroButton text={label} /> */}
            </HomeHero>
            {/* <CurrentLocation title={title} /> */}
        </Fragment>
    );
};

export default Hero;