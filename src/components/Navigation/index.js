import React from 'react';
import { NavLink, Link  } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../settings/theme.json';
import logo from '../../assets/images/logos/visual-studio-code.svg';
import Sidebar from './Sidebar'; 

const TopNavBar = styled.div`
    color: white;
    height: 70px;
    width: 100%;
    background-color: ${styles.colors.halfGlass} ;
    a,
    a:hover {
        color: whitesmoke;
        background-color: ${styles.colors.lightBlue};
    }
`;
const LinkItems = styled.div`
    float: right;
`;

const Logo = styled.img`
    float: left;
    position: absolute;
    padding-left: 20px;
    line-height: $nav-height;
    text-transform: uppercase;
    font-size: 1.4em;
    max-width: 80px;
`;

const Navigation = () => {
    return (
          <Sidebar />
          /*      
            <Logo src={logo} alt='logo' />

            <LinkItems>    
                <NavLink to="/">Home</NavLink>
                <NavLink to="/lessons">Lessons</NavLink>
                <NavLink to="/forum">Forum</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </LinkItems> 
        
            <TopNavBar>           
            </TopNavBar>
        */             
    );
};

export default Navigation;