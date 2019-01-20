import React from 'react';
import { NavLink  } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../settings/theme.json';
import logo from '../../assets/images/logos/visual-studio-code.svg';

const TopNavBar = styled.div`
    color: ${styles.colors.halfGlass};
    height: 70px;
`;
const Logo = styled.img`
    position: absolute;
    padding-left: 20px;
    float: left;
    line-height: $nav-height;
    text-transform: uppercase;
    font-size: 1.4em;
    width: 80px;
`;

const Navigation = () => {
    return (
       <TopNavBar>
            <div>
            
            <Logo src={logo} alt='logo' />
           
            <NavLink to="/">Home</NavLink>
            <NavLink to="/lessons">Lessons</NavLink>
            <NavLink to="/forum">Forum</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
       </TopNavBar>
    );
};

export default Navigation;