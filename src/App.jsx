import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/auth/Home';
import { Login } from './components/auth/Login';
import { ProtectedRouter } from './components/ProtectedRoute';
import { Register } from './components/auth/Register';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<div className="bg-slate-300 h-screen text-black flex">
			<AuthProvider>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRouter >
								<Home />
							</ProtectedRouter>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
