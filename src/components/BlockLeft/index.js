import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as styles from './styles';

const StyledBlockLeft = styled.div`
    ${styles.styledBlockLeft};
`;

const StyledSubContainer = styled.div`
    ${styles.styledSubContainer};
`;

const StyledTechLogo = styled.div`
    ${styles.styledTechLogo};
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
            <StyledHeading>{heading}</StyledHeading>
            <StyledParagraph>{paragraph}</StyledParagraph>
            <StyledTechLogo>
                <NavLink to='/'>
                    {link}
                    <img src={ techLogo } alt="#" />
                </NavLink>
            </StyledTechLogo>
        </StyledSubContainer>
    </StyledBlockLeft>
    );
};

export default BlockLeft;
