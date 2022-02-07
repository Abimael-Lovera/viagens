import './Navbar.css';
import logo from '../../assets/img/lovera+.png';

export function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
			<div className="container">
				<a className="navbar-brand nav_logo" asp-action="Index">
					<img src={logo} alt="logo-lovera" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-expanded="false" aria-label="Toggle navigation">

					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="mx-auto"></div>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link nav_links" asp-action="Destinos"> <i
								className="fa-solid fa-plane-departure"></i>
								Destinos </a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav_links" asp-action="Promo"> <i
								className="fa-solid fa-briefcase"></i>
								Promoções </a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav_links" asp-action="Contact"> <i
								className="fa-solid fa-address-book"></i>
								Contato </a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav_links" asp-action="Login"> Login <i
								className="fa-solid fa-right-to-bracket"></i> </a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav_links nav_btn" asp-action="Login">Criar Conta</a>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
}