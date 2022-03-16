import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import './Pedido.css';

export function Pedido() {
	const nome = useRef();
	const email = useRef();
	const destino = useRef();
	const data = useRef();

	const [pedido, setPedido] = useState([]);

	function enviarPedido(event) {
		event.preventDefault();
		api
			.post('/pedido', {
				nome: nome.current.value,
				email: email.current.value,
				destino: destino.current.value,
				data: data.current.value,
			})
			.then((res) => window.location.reload())
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		api
			.get('/pedido', {})
			.then((res) => {
				console.log(res.data);
				setPedido(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	function deletePedido(id) {
		api.delete(`/pedido/${id}`, {});
		setPedido(pedido.filter((pedido) => pedido.id !== id));
	}

	return (
		<>
			<Navbar />
			<div className='pedido'>
				<div className='container pedido__container'>
					<Link className='btn form__btn' to='/'>
						Perfil
					</Link>
					<br />
					<br />
					<form onSubmit={enviarPedido}>
						<div className='mb-3'>
							<label className='form-label'>Nome</label>
							<input ref={nome} type='text' className='form-control' />
						</div>
						<div className='mb-3'>
							<label className='form-label'>Email</label>
							<input ref={email} type='email' />
						</div>

						<div className='mb-3'>
							<label htmlFor='exampleInputPassword1' className='form-label'>
								Destino
							</label>
							<input ref={destino} type='text' />
						</div>

						<div className='mb-3'>
							<label htmlFor='exampleInputPassword1' className='form-label'>
								Data
							</label>
							<input ref={data} type='text' />
						</div>
						<button type='submit' className='btn form__btn'>
							Submit
						</button>
					</form>
					<br />
					<h3>Table GET</h3>

					<section className='pedido__feed'>
						{pedido?.map((ped) => {
							return (
								<article key={ped.id} className='pedido__fedd_post'>
									<h6>Destino: {ped.destino}</h6>
									<span scope='row'>N° Pedido: {ped.id}</span>
									<span>Nome: {ped.nome}</span>
									<span>Email: {ped.email}</span>
									<span>Data:{ped.data.substr(0, 10)}</span>

									<button className='btn pedido__btn_editar'>
										Editar <i className='fa-solid fa-pen-to-square'></i>
									</button>

									<button
										className='btn pedido__btn_excluir '
										onClick={() => deletePedido(ped.id)}
									>
										Excluir <i className='fa-solid fa-trash-can'></i>
									</button>
								</article>
							);
						})}
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}
