import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-amazing-grid';
import { withRouter } from 'react-router-dom';
// Config
import firebase from '../../config/firebase';
// Remote Imports
import Hero from '../../components/Hero';
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

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onRegister() {
        try {
            await firebase.login(name, email, password);
            props.history.replace('/home')
        } catch(error) {
            alert(error.message);
        }
    }

    return (
        <MainCol>
            <Hero title='REGISTER' />
            <Container>
                <Row>
                    <Col lg={6} sm={12} >
                        <form css={styles.form}>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" name="username" autoComplete="username" autoFocus value={name} onChange={e => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)}/>
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
                            onClick={onRegister}
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

export default withRouter(Register);