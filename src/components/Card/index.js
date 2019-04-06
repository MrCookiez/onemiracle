import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import styles from './styles';

const CardContainer = styled.div`
    ${styles.styledCardContainer};
`;

const Card = ({ cardImg, cardTitle, cardText, to }) => (
    <CardContainer>
        <div className="img-container">
            <img src={cardImg} alt="This is a coolImage" />
        </div>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <NavLink to='/'>ΠΕΡΙΣΣΟΤΕΡΑ</NavLink>
    </CardContainer>
);

export default Card;