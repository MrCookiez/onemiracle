import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../config/firebase';

function Register(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [quote, setQuote] = useState('')

	return (
		<main>
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
		</main>
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