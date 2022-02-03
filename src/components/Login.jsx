import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Alert } from './Alert';

export function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { login, loginWithGoogle } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	// Actualizar estado
	const handleChange = ({ target: { name, value } }) => {
		console.log(name, value);
		setUser({ ...user, [name]: value });
	};
	// Ver lo que tiene
	// si una Api tiene then e catch es asincrono
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(''); // Para que no aparezca el error ala hora de reenviar el formulario
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			console.log(error.code);
			setError(error.message);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await loginWithGoogle();
			navigate('/');
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<div className="">
			{error && <Alert message={error} />}
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id=""
					placeholder="youremail@email.com"
					onChange={handleChange}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="******"
					onChange={handleChange}
				/>

				<button>Login</button>
			</form>

			<button onClick={handleGoogleSignIn}>Sign in Google</button>

		</div>
	);
}
