import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logos/react.svg';
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
            
            <NavLink to="/" className="bm-item"><i className="fa fa-fw fa-newspaper-o"></i>ΑΡΧΙΚΗ</NavLink>
            <NavLink to="/lessons">ΜΑΘΗΜΑΤΑ</NavLink>
            <NavLink to="/forum">FORUM</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">ΕΠΙΚΟΙΚΩΝΙΑ</NavLink>
                 
            </Menu>
        );
};

export default Sidebar;