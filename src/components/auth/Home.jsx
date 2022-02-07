import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

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
		<div className="">
			<div className="">
				<h1 className="">welcome {user.displayName || user.email}</h1>
				<button onClick={handleLogout}>
					logout
				</button>
			</div>
		</div>
	);
}
