import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as styles from './styles';

const Card = ({ cardImg, cardTitle, cardText, cardLink }) => (
    <div className="card-container">
        <div className="img-container">
            <img scr={cardImg} alt="This is an coolImage" />
        </div>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <NavLink to='/'>ΠΕΡΙΣΣΟΤΕΡΑ</NavLink>
    </div>
);

export default Card;