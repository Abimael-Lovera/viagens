import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/auth/Home';
import { Login } from './components/auth/Login';
import { ProtectedRouter } from './components/ProtectedRoute';
import { Register } from './components/auth/Register';
import { AuthProvider } from './context/authContext';
import { Contato } from './components/contato/Contato';
import { Destinos } from './components/destinos/Destinos';
import { Promocoes } from './components/promocoes/Promocoes';
import { Index } from './components/home/Index';
import { Pedido } from './components/pedido/Pedido';
import { Footer } from './components/footer/Footer';
import Post from './components/crud/post/Post';
import Edit from './components/crud/edit/Edit';
import LeerMais from './components/crud/leerMais/LeerMais';
import Pedidos from './components/crud/Pedidos/Pedidos';

function App() {
	return (
		<AuthProvider>
			{/* <Navbar /> */}
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRouter>
							<Home />
						</ProtectedRouter>
					}
				/>
				<Route
					path='/user'
					element={
						<ProtectedRouter>
							<Home />
						</ProtectedRouter>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/contato' element={<Contato />} />
				<Route path='/destinos' element={<Destinos />} />
				<Route path='/home' element={<Index />} />
				<Route path='/promocoes' element={<Promocoes />} />
				<Route path='/pedido' element={<Pedido />} />
				<Route path='/user/pedidos' element={<Pedidos />} />
				<Route path='/user/post' element={<Post />} />
				<Route path='/user/edit/' element={<Edit />} />

				<Route path='/user/edit/:id' element={<Edit />} />
				<Route path='/user/leermais' element={<LeerMais />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
