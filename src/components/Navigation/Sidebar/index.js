import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logos/redux.svg';
import { NavLink } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';
import styles from './styles'; 

const Logo = styled.img`
    @media screen {
        
    }
    max-width: 80px;
    outline: none;
`;
const Sidebar = () =>  {  
        return (
            <Menu styles={ styles } >

            <Logo src={logo} alt='logo' />
            
            <NavLink to="/" className="bm-item"><i className="fa fa-fw fa-newspaper-o"></i>Home</NavLink>
            <NavLink to="/lessons">Lessons</NavLink>
            <NavLink to="/forum">Forum</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
                 
            </Menu>
        );
};

export default Sidebar;