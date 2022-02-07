import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';

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
			<div className="">
				<div className="">
					<h1 className="">welcome {user.displayName || user.email}</h1>
					<button onClick={handleLogout}>
						logout
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
