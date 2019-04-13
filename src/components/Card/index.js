import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import images from '../../assets/images/cards';
import styles from './styles';

const CardContainer = styled.div`
    ${styles.styledCardContainer};
    background: ${props => `url(${props.bgImg}) 50% no-repeat`};
    background-size: cover;
    :hover {
        background: ${props => `url(${props.bgImg}) 100% no-repeat`};
        background-size: cover;
    }
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
    ${styles.styledLink}
`;

const Card = ({ id, cardTitle, cardText, to }) => {
    return (
        <CardContainer key={id} bgImg={images[id]} >
            <StyledBlock>
                <StyledTitle>{cardTitle}</StyledTitle>
                <StyledDesc>{cardText}</StyledDesc>
            </StyledBlock>
            <StyledLink to='/'>ΠΕΡΙΣΣΟΤΕΡΑ</StyledLink>
        </CardContainer>
    );
};

export default Card;
