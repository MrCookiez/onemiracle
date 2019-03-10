import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as styles from './styles';
import cssLogo from '../../assets/images/logos/css3.svg';

const StyledBlockRight = styled.div`
    ${styles.styledBlockRight};
`;

const StyledSubContainer = styled.div`
    ${styles.styledSubContainer};
`;

const StyledTechLogo = styled.div`
    ${styles.styledTechLogo};
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

const StyledText = styled.div`
    ${styles.stylesText};
`;

const BlockLeft = ({ id, heading, paragraph, techLogo, link, to }) => {
   return (
    <StyledBlockRight id={id}>
        <StyledSubContainer>
            <StyledText>
                <StyledHeading>{heading}</StyledHeading>
                <StyledParagraph>{paragraph}</StyledParagraph>
                <StyledNavLink to={to}>ΠΕΡΙΣΣΟΤΕΡΑ</StyledNavLink>
           </StyledText>
           <StyledTechLogo>
                <NavLink to='/'>
                    {link}
                    <StyledLogo src={ cssLogo } alt="#" />
                </NavLink>
            </StyledTechLogo>
        </StyledSubContainer>
    </StyledBlockRight>
    );
};

export default BlockLeft;
