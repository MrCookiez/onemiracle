import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const CardContainer = styled.div`
    ${styles.styledCardContainer};
`;

const StyledBlock = styled.div`
    ${styles.styledCardBlock};
`;

const StyledTitle = styled.h3`
    ${styles.styledTitle};
`;

const StyledDesc = styled.p`
    ${styles.styledCardDesc};
`;

const StyledLink = styled(NavLink)`
    @media(max-width: 768px){
        display: none;
    }
`;

const Card = ({ cardImg, cardTitle, cardText, to }) => (
    <CardContainer>
        <div className="img-container">
            {/* <img src={cardImg} alt="This is a coolImage" /> */}
        </div>
        <StyledBlock>
            <StyledTitle>{cardTitle}</StyledTitle>
            <StyledDesc>{cardText}</StyledDesc>
        </StyledBlock>
        <StyledLink to='/'>ΠΕΡΙΣΣΟΤΕΡΑ</StyledLink>
    </CardContainer>
);

export default Card;