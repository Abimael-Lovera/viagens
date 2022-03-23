import './Pedidos.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';
import { Footer } from '../../footer/Footer';

export default function Pedidos() {
	const { user } = useAuth();

	const [pedido, setPedido] = useState([]);

	useEffect(() => {
		axios
			.get('https://api-agencia-viagens.herokuapp.com/pedido')
			.then(res => {
				console.log('Get All deu certo', res.data);
				setPedido(res.data);
			})
			.catch(err => {
				console.log('Get All ', err);
			});
	}, []);

	function deletePedido(id) {
		axios.delete(`https://api-agencia-viagens.herokuapp.com/pedido/${id}`, {});
		setPedido(pedido.filter(pedido => pedido.id !== id));
	}

	return (
		<>
			<Navbar />
			<div className='pedidos'>
				<div className='pedidos__container'>
					<h1>Meus Pedidos</h1>
					<div className='pedidos__btns-nav'>
						<Link to='/user/post' className='pedidos__btn-nav btn'>
							Nova Pedido
						</Link>
						<Link to='/user' className='pedidos__btn-nav btn'>
							Perfil
						</Link>
					</div>
					<br />
					<br />
					<section className='pedidos__cards'>
						{pedido?.map(ped => {
							try {
								if (ped.user === user.displayName || ped.email === user.email) {
									return (
										<article className='pedidos__card' key={ped.id}>
											<div className='pedidos__content'>
												<header className='pedidos__content_title'>
													<strong>Destino: {ped.destino}</strong>
												</header>
												<hr />
												<span>
													<b>N° Pedido: {ped.id}</b>
												</span>
												<span>
													<b>Nome: {ped.nome}</b>
												</span>
												<span>
													<b>Email: {ped.email}</b>
												</span>
												<span>
													<b>Data: {ped.data.substr(0, 10)}</b>
												</span>
											</div>

											<div className='pedidos__btns'>
												<Link
													to={{ pathname: `/user/edit/${ped.id}` }}
													className='btn pedidos__btn_editar'
												>
													Editar <i className='fa-solid fa-pen-to-square'></i>
												</Link>

												<button
													className='btn pedidos__btn_excluir '
													onClick={() => deletePedido(ped.id)}
												>
													Excluir <i className='fa-solid fa-trash-can'></i>
												</button>
											</div>
										</article>
									);
								}
								return <h3>Não tem autorização</h3>;
							} catch (error) {
								console.log(error);
							}
						})}
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}
