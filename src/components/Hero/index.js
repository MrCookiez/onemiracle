import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as styles from './styles';
import Button from './components/HeroButton';
import JumpArrow from './components/JumpArrow';

const Title = ({ title }) => <span>{title}</span>;
const SubTitle = ({ subTitle }) => <span>{subTitle}</span>;

const MainHero = styled.div`
     position: relative;
`;

const HomeHero = styled.div`
    ${styles.stylesHero};
`;

const StyledJumpArrow = styled(JumpArrow)`
   position: absolute;
   top: 170px;
`;
const HeroButton = styled(Button)`
    ${styles.stylesButton};
`;

const StyledSubTitle = styled(SubTitle)`
    ${styles.stylesSubTitle};
`;

const Hero = ({ title, subTitle, label, height }) => {

    let mainHeader =  <span dangerouslySetInnerHTML={{__html: title}} />;
    
    return (
        <MainHero>
            <HomeHero height={height}>
                <div>
                    <Title title={mainHeader} />
                    <StyledSubTitle subTitle={subTitle} />
                    <StyledJumpArrow />
                </div>
            </HomeHero>
        </MainHero>
    );
};

Hero.defaultProps = {
    height: '500',
};

Hero.propTypes  = {
    height: PropTypes.string,
};

export default Hero;