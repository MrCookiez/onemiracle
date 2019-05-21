import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-amazing-grid';
import { Link, withRouter } from 'react-router-dom';
// Config
import firebase from '../../config/firebase';
// Remote Imports
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// Local imports
import Hero from '../../components/Hero';
import sideImage from './img/green-energy.svg';

const StyledCol = styled(Col)`
    padding: 50px;
    margin: 5px auto;
    position: relative;
`;

const StyledForm = styled.form`
    border: 3px solid #00668833;
    padding: 30px 15px;
    margin: 20px;
    background-color: #fafafa99;
`;

const StyledImg = styled.img`
    max-width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 768px){
        max-width: 50%;
        margin-top: 50px;
    }
`;

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
        <Hero height={300} title='SIGN IN' />
        <Container>
            <Row>
                <StyledCol lg={6} sm={12} >
                    <StyledForm onSubmit={e => e.preventDefault() && false}>

                        <FormControl required fullWidth>

                            <InputLabel htmlFor="name">Username</InputLabel>
                            <Input
                                id="name"
                                name="name" autoComplete="name" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                        </FormControl>

                        <FormControl required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password"  value={password}  onChange={e => setPassword(e.target.value)} />
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={login}
                            Login
                        >
                            Sign in
                        </Button>
                    </StyledForm>
                </StyledCol>

                {/* <StyledCol lg={6} sm={12}>

                    <StyledImg src={sideImage} alt='green leaf connect' />

                </StyledCol> */}
            </Row>
        </Container>
        </div>
    )

    async function login() {
        try {
            await firebase.login(email, password);
            props.history.replace('/home')
        } catch(error) {
            alert(error.message);
        }
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withRouter(Login);