import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as styles from './styles';
import htmlLogo from '../../assets/images/logos/html5.svg';

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

const StyledNavLink = styled(NavLink)`
    ${styles.styledNavLink};
`;

const BlockLeft = ({ id, heading, paragraph, techLogo, link, to }) => {
   return (
    <StyledBlockLeft id={id} >
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
                <StyledNavLink to={to}>ΠΕΡΙΣΣΟΤΕΡΑ</StyledNavLink>
            </StyledText>
        </StyledSubContainer>
    </StyledBlockLeft>
    );
};

export default BlockLeft;
