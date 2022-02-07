import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Alert } from './Alert';
import './login.css';
import google from '../../assets/img/google.png';

import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

export function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { login, loginWithGoogle, resetPassword } = useAuth();
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

	const handleResetPassword = async () => {
		if (!user.email) return setError('Please enter your email');
		try {
			await resetPassword(user.email);
			setError('temos mandado um email com seu reset your password');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<>
			<Navbar />
			<div className="form__container">
				<section className="container form__content">
					<h2 className="form__title">Login</h2>
					{error && <Alert message={error} />}
					<form
						onSubmit={handleSubmit}
						className=""
					>
						<div className="form_container">
							<label htmlFor="email" className="">Email </label>
							<input
								type="email"
								name="email"
								id=""
								placeholder="seuemail@email.com"
								onChange={handleChange}
								className="form_input"
							/>
						</div>

						<div className="form_container">
							<label htmlFor="password" className="">Senha </label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="******"
								onChange={handleChange}
								className="form_input"
							/>
						</div>

						<div className="form__footer">
							<button className="form__btn">Login</button>

							<a
								href="#!"
								className="form__link"
								onClick={handleResetPassword}
							> Esqueceu Senha
							</a>
						</div>

					</form>

					<p className="">Não tem uma conta? <Link to="/register" className="form__link">Crie sua Conta</Link> </p>

					<button onClick={handleGoogleSignIn} className="google">
						<img src={google} alt="" /> Logar com Google
					</button>

				</section>
			</div>
			<Footer />
		</>
	);
}
