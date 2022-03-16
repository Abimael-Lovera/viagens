import { Link } from 'react-router-dom';

export default function Feed() {
	return (
		<div>
			<h1>Page Feed</h1>
			<Link to='/user/post'>Nova Pedido</Link>
		</div>
	);
}
