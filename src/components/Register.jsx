import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export function Register() {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const { signup } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	// Actualizar estado
	const handleChange = ({ target: { name, value } }) => {
		console.log(name, value);
		setUser({ ...user, [name]: value });
	};
	// Ver lo que tiene
	// si una Api tiene then e catch es asincrono
	const handleSubmit = async e => {
		e.preventDefault();
		setError(''); // Para que no aparezca el error ala hora de reenviar el formulario
		try {
			await signup(user.email, user.password);
			navigate('/');
		} catch (error) {
			console.log(error.code);
			if (error.code === 'email-already-in-use') {
				setError('Outro usuário está usando o correio eletrônico fornecido.');
			} else if (error.code === 'auth/invalid-email') {
				setError('e-mail inválido');
			} else if (error.code === 'auth/weak-password') {
				setError('A senha deve ter pelo menos 6 caracteres');
			}
			setError(error.message);
		}
	};

	return (
		<div className="">
			{error && <p>{error}</p>}
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

				<button>Register</button>
			</form>
		</div>
	);
}
