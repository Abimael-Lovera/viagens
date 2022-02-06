import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Alert } from './Alert';

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
		<div className="w-full max-w-xs m-auto">
			{error && <Alert message={error} />}
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
					<input
						type="email"
						name="email"
						id=""
						placeholder="youremail@email.com"
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="******"
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				<div className="flex items-center justify-between">
					<button className="bg-blue-500 hover:bg-blue-600 text-whit font-bold py-2 px-4 rounded focus:outline-none focus.shadow-outline text-sm">Login</button>

					<a
						href="#!"
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						onClick={handleResetPassword}
					> Esqueceu Senha
					</a>
				</div>

			</form>

			<p className="my-4 text-sm flex justify-between px-3">No tienes una Cuenta <Link to="/register">Cria Conta</Link> </p>

			<button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-3 px-4 w-full">Sign in Google</button>

		</div>
	);
}
