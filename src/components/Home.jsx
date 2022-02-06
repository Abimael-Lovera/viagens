import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

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
		<div className="w-full max-w-xs flex flex-col items-center justify-center text-black border border-slate-900">
			<div className="bg-white rounded shadow-md px-8 pt6 pb-8 mb-4">
				<h1 className="text-xl mb-4">welcome {user.displayName || user.email}</h1>
				<button onClick={handleLogout}>
					logout
				</button>
			</div>
		</div>
	);
}
