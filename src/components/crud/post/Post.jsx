import './Post.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';

export default function Post() {
	return (
		<>
			<Navbar />
			<div className='post'>
				<div className='post__container'>
					<h1>Criar Novo Pedido</h1>
					<Link to='/user/pedidos' className='post__btn-nav btn'>
						<i className='fa-solid fa-angle-left'></i> voltar para seus pedidos
					</Link>
				</div>
			</div>
		</>
	);
}
