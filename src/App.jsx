import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/auth/Home';
import { Login } from './components/auth/Login';
import { ProtectedRouter } from './components/ProtectedRoute';
import { Register } from './components/auth/Register';
import { AuthProvider } from './context/authContext';
import { Contato } from './components/contato/Contato';
import { Destinos } from './components/destinos/Destinos';

function App() {
	return (
		<div className="">
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
					<Route path="/contato" element={<Contato />} />
					<Route path="/destinos" element={<Destinos />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
