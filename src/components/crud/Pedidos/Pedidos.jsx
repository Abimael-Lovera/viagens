import { Link } from 'react-router-dom';

export default function Pedidos() {
	return (
		<div>
			<h1>Page Feed</h1>
			<Link to='/user/post'>Nova Pedido</Link>
		</div>
	);
}
