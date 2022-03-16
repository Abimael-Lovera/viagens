import { Link } from 'react-router-dom';

export default function Post() {
	return (
		<div>
			<h1>Page Post</h1>
			<Link to='/user/pedidos'>voltar para seus pedidos</Link>
		</div>
	);
}
