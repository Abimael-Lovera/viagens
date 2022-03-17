import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';

import './Home.css';

export function Home() {
	const { user, logout, loading } = useAuth();
	console.log(user);

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	if (loading) return <h1>Loading</h1>;

	return (
		<>
			<Navbar />
			<div className='home '>
				<div className='container home__container'>
					<h2 className=''>Bem-vindo </h2>
					{user.photoURL == null ? (
						<i className='fa-solid fa-user fa-4x'></i>
					) : (
						<img src={user.photoURL} alt='' />
					)}
					<h1 className=''>{user.displayName || user.email}</h1>

					<button onClick={handleLogout} className='form__btn'>
						Logout
					</button>
					<br />

					<Link className='form__btn' to='/user/pedidos'>
						Veja seus Pedidos
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
