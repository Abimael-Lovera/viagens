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
			<div className="form__container">
				<section className="container form__content">
					<h2 className="form__title">Criar Conta</h2>
					{error && <Alert message={error} />}
					<form
						onSubmit={handleSubmit}
						className=""
					>
						<div className="form_container">
							<label htmlFor="email" className="">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="seuemail@email.com"
								onChange={handleChange}
								className="form_input"
							/>
						</div>

						<div className="form_container">
							<label htmlFor="password" className="">Senha</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="******"
								onChange={handleChange}
								className="form_input"
							/>
						</div>

						<p className="">Ja tem uma Conta? <Link to="/Login" className="form__link">Logar</Link> </p>

						<button className="form__btn">Criar conta</button>
					</form>
				</section>
			</div>
			<Footer />
		</>
	);
}
