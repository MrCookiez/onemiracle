import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as styles from './styles';
import htmlLogo from '../../assets/images/logos/photoshop-cc.svg';

const StyledBlockLeft = styled.div`
    ${styles.styledBlockLeft};
`;

const StyledSubContainer = styled.div`
    ${styles.styledSubContainer};
`;

const StyledTechLogo = styled.div`
    ${styles.styledTechLogo};
`;

const StyledText = styled.div`
    ${styles.stylesText};
`;

const StyledLogo = styled.img`
    ${styles.stylesImg};
`;

const StyledHeading = styled.h3`
    ${styles.styledHeading};
`;

const StyledParagraph = styled.p`
    ${styles.styledParagraph};
`;

const BlockLeft = ({ heading, paragraph, techLogo, link }) => {
   return (
    <StyledBlockLeft>
        <StyledSubContainer>
            <StyledTechLogo>
                <NavLink to='/'>
                    {link}
                    <StyledLogo src={ htmlLogo } alt="#" />
                </NavLink>
            </StyledTechLogo>
            <StyledText>
                <StyledHeading>{heading}</StyledHeading>
                <StyledParagraph>{paragraph}</StyledParagraph>
            </StyledText>
        </StyledSubContainer>
    </StyledBlockLeft>
    );
};

export default BlockLeft;
