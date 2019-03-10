import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as styles from './styles';
import cssLogo from '../../assets/images/logos/js.svg';

const StyledBlockRight = styled.div`
    ${styles.styledBlockRight};
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

const StyledText = styled.div`
    ${styles.stylesText};
`;

const BlockLeft = ({ heading, paragraph, techLogo, link }) => {
   return (
    <StyledBlockRight>
        <StyledSubContainer>
            <StyledText>
                <StyledHeading>{heading}</StyledHeading>
                <StyledParagraph>{paragraph}</StyledParagraph>
           </StyledText>
            <StyledTechLogo>
                <NavLink to='/'>
                    {link}
                    <img src={ cssLogo } alt="#" width="200"/>
                </NavLink>
            </StyledTechLogo>
        </StyledSubContainer>
    </StyledBlockRight>
    );
};

export default BlockLeft;
