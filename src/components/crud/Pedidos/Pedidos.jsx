import './Pedidos.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';

export default function Pedidos() {
	return (
		<>
			<Navbar />
			<div className='pedidos'>
				<div className='pedidos__container'>
					<h1>Meus Pedidos</h1>
					<Link to='/user/post' className='pedidos__btn-nav btn'>
						Nova Pedido
					</Link>
					<br />
					<br />
					<section className='pedidos__cards'>
						{/* {pedido?.map((ped) => { */}
						{/* return ( */}
						<article className='pedidos__card'>
							<div className='pedidos__content'>
								<header className='pedidos__content_title'>
									<strong>Destino: </strong>
								</header>
								<hr />
								<span scope='row'>
									<b>N° Pedido:</b>
								</span>
								<span>
									<b>Nome:</b>
								</span>
								<span>
									<b>Email:</b>
								</span>
								<span>
									<b>Data:</b>
								</span>
							</div>

							<div className='pedidos__btns'>
								<Link to='/user/edit' className='btn pedidos__btn_editar'>
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
						{/* ); */}
						{/* })} */}
					</section>
				</div>
			</div>
		</>
	);
}
