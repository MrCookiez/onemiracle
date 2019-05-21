import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../config/firebase';
import Hero from '../../components/Hero';

function Register(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [quote, setQuote] = useState('')

	return (
        <div>
        <Hero title='Dashboard' />
                <form onSubmit={e => e.preventDefault() && false }>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="name">Name</InputLabel>
						<Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}  />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="quote">Your Favorite Quote</InputLabel>
						<Input name="quote" type="text" id="quote" autoComplete="off" value={quote} onChange={e => setQuote(e.target.value)}  />
					</FormControl>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={onRegister}>
						Register
          			</Button>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
					>
						Go back to Login
          			</Button>
				</form>
		</div>
	)

	async function onRegister() {
		try {
			await firebase.register(name, email, password)
			await firebase.addQuote(quote)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(Register)
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Container, Row, Col } from 'react-amazing-grid';
// import { Link, withRouter } from 'react-router-dom';
// // Config
// import firebase from '../../config/firebase';
// // Remote Imports
// import Hero from '../../components/Hero';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// // Styles
// import 'styled-components/macro';
// import * as styles from './styles';
// // Images
// import sideImage from './img/green-energy.svg';

// const MainCol = styled.div`
//     margin: auto;
//     text-align: center;
// `;

// const Register = (props) => {
//     const { classes } = props;
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     return (
//         <MainCol>
//             <Hero title='REGISTER' />
//             <Container>
//                 <Row>
//                     <Col lg={6} sm={12} >
//                         <form css={styles.form} onSubmit={e => e.preventDefault() && false }>
//                         <FormControl required fullWidth>
//                             <InputLabel htmlFor="name">Username</InputLabel>
//                             <Input id="name" name="name" autoComplete="name" autoFocus value={name} onChange={e => setName(e.target.value)}/>
//                         </FormControl>
//                         <FormControl required fullWidth>
//                             <InputLabel htmlFor="email">Email Address</InputLabel>
//                             <Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
//                         </FormControl>
//                         <FormControl required fullWidth>
//                             <InputLabel htmlFor="password">Password</InputLabel>
//                             <Input name="password" type="password" id="password" autoComplete="off"              value={password} onChange={e => setPassword(e.target.value)}  />
//                         </FormControl>
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             onClick={onRegister}
//                         >
//                             Sign in
//                         </Button>
//                     </form>
//                     </Col>
//                     {/* <Col lg={6} sm={12} >
//                         <img css={styles.image} src={sideImage} alt='green leaf connect' />
//                     </Col> */}
//                 </Row>
//             </Container>
//         </MainCol>
//     )

//     async function onRegister() {
//         try {
//             await firebase.login(name, email, password);
//             props.history.replace('/dashboard')
//         } catch(error) {
//             alert(error.message);
//         }
//     }
// }

// export default withRouter(Register);