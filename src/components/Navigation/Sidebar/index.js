import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/onemiracleYellow.svg';
import { NavLink } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';
import styles from './styles';

const Logo = styled.img`
    max-width: 350px;
    outline: none;
`;

const Sidebar = () =>  {
        return (
            <Menu styles={ styles } >

                <Logo src={logo} alt='logo' />
                <NavLink to="/">ΑΡΧΙΚΗ</NavLink>
                <NavLink to="/lessons">ΜΑΘΗΜΑΤΑ</NavLink>
                <NavLink to="/forum">FORUM</NavLink>
                <NavLink to="/blog">BLOG</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">ΕΠΙΚΟΙΚΩΝΙΑ</NavLink>
                <NavLink to="/challenge">CHALLENGE</NavLink>
                 
            </Menu>
        );
};

export default Sidebar;