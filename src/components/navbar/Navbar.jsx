import './Navbar.css';
import logo from '../../assets/img/lovera+.png';
import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
			<div className="container">
				<Link className="navbar-brand nav_logo" to="/home">
					<img src={logo} alt="logo-lovera" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-expanded="false" aria-label="Toggle navigation">

					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="mx-auto"></div>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link nav_links" to="/destinos">
								<i className="fa-solid fa-plane-departure"></i>
								Destinos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link nav_links" to="/promocoes">
								<i className="fa-solid fa-briefcase"></i>
								Promoções
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link nav_links" to="/contato">
								<i className="fa-solid fa-address-book"></i>
								Contato
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link nav_links" to="/login">
								Login
								<i className="fa-solid fa-right-to-bracket"></i>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link nav_links nav_btn" to="/register">
								Criar Conta
							</Link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
}