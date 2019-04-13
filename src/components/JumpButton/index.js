import React from 'react';
import styled from 'styled-components';
import { BackToTop } from 'react-jump';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import styles from './styles';

const StyledBtn = styled.button`
    ${styles.stylesButton};
`;

const JumpButton = () => (
    <BackToTop
    showHeight={100}
    >
        <StyledBtn>
            <i className="fa fa-caret-up" />
        </StyledBtn>
    </BackToTop>
);

export default JumpButton;