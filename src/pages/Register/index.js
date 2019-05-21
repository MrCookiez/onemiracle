import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import { Container, Row, Col } from 'react-amazing-grid';
// Remote Imports
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// Styles
import 'styled-components/macro';
import * as styles from './styles';
// Images
import sideImage from './img/green-energy.svg';

const MainCol = styled.div`
    margin: auto;
    text-align: center;
`;

const Register = () => {
    return (
        <MainCol>
            <Hero title='REGISTER' />
            <Container>
                <Row>
                    <Col lg={6} sm={12} >
                        <form css={styles.form}>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" name="username" autoComplete="username" autoFocus />
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" />
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
                        >
                            Sign in
                        </Button>
                    </form>
                    </Col>
                    <Col lg={6} sm={12} >
                        <img css={styles.image} src={sideImage} alt='green leaf connect' />
                    </Col>
                </Row>
            </Container>
        </MainCol>
    );
}

export default Register;