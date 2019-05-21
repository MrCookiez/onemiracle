import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import { withRouter } from 'react-router-dom';
// Config
import firebase from '../../config/firebase';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Dashboard = ({ props }) => {
    if(!firebase.getCurrentUsername()) {
        // Not logged in
        alert('Please log in first!')
        props.history.replace('/login')
        return null
    }

    return (
        <MainCol>
            <Hero title='Dashboard' />
            <h2>Hey {firebase.getCurrentUsername()}, welcome back!</h2>
        </MainCol>
    )

    async function logout() {
        await firebase.logout()
        props.history.push('/')
    }
}

export default withRouter(Dashboard);