import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

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
		<>
			<Navbar />
			<div className="">
				{error && <Alert message={error} />}
				<form
					onSubmit={handleSubmit}
					className=""
				>
					<div className="">
						<label htmlFor="email" className="">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="youremail@email.com"
							onChange={handleChange}
							className=""
						/>
					</div>

					<div className="">
						<label htmlFor="password" className="">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="******"
							onChange={handleChange}
							className=""
						/>
					</div>

					<p className="">Ya tienes una Cuenta <Link to="/Login">Login</Link> </p>

					<button className="">Register</button>
				</form>
			</div>
			<Footer />
		</>
	);
}
