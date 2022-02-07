import './Destinos.css';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';

import rioHero from '../../assets/img/rio.jpg';
import sampaHero from '../../assets/img/sampa.jpg';
import fozHero from '../../assets/img/foz.jpg';
import saopaulo from '../../assets/img/sao-paulo.jpeg';
import rioDeJaneiro from '../../assets/img/rioDeJaneiro.jpeg';
import lisboa from '../../assets/img/lisboa.jpeg';
import natal from '../../assets/img/natal.jpeg';
import orlando from '../../assets/img/orlando.jpeg';
import maceio1 from '../../assets/img/maceio-1.jpeg';
import fozDoIguacu from '../../assets/img/fozDoIguacu.png';
import joaoPessoa from '../../assets/img/joaoPessoa.jpeg';
import salvador1 from '../../assets/img/salvador-1.jpeg';


export function Destinos() {
	return (
		<>
			<Navbar />
			<section className="carousel_container">
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
							aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
							aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
							aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={rioHero} className="d-block w-100 vh-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5 className="fs-1">Foz do Iguaçu</h5>
								<p>
									Sua viagem completa. <br />
									Saindo de Brasilia
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={sampaHero} className="d-block w-100 vh-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5 className="fs-1">São Paulol</h5>
								<p>
									Sua viagem completa. <br />
									Saindo de Brasilia
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={fozHero} className="d-block w-100 vh-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5 className="fs-1">Rio de Janeiro</h5>
								<p>
									Sua viagem completa. <br />
									Saindo de Brasilia.
								</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</section>
			{/* CARDS  */}
			<div className="container" id="container">
				<h1 className="title text-center">Pacotes imperdíveis para suas próximas férias</h1>
				<p className="subtitle text-center">As melhores ofertas para você com preços especiais para destinos inesquecíveis!
				</p>
				<section className="cards_container">
					<div className="cards_container-card">
						<img src={saopaulo} alt="" />
						<div className="cards_container-body">
							<h4>Sao paulo</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={rioDeJaneiro} alt="" />
						<div className="cards_container-body">
							<h4>Rio de Janerio</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={lisboa} alt="" />
						<div className="cards_container-body">
							<h4>Lisboa</h4>
							<p>
								Portugal <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={natal} alt="" />
						<div className="cards_container-body">
							<h4>Natal</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={orlando} alt="" />
						<div className="cards_container-body">
							<h4>Orlando</h4>
							<p>
								EEUU <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={maceio1} alt="" />
						<div className="cards_container-body">
							<h4>Maceió</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={fozDoIguacu} alt="" />
						<div className="cards_container-body">
							<h4>Foz do Iguaçu</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={joaoPessoa} alt="" />
						<div className="cards_container-body">
							<h4>João Pessoa</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
					<div className="cards_container-card">
						<img src={salvador1} alt="" />
						<div className="cards_container-body">
							<h4>Salvador</h4>
							<p>
								Brasil <br />
								<i className="fa-solid fa-arrow-down"></i>
							</p>
							<a href="#" className="cards_container-btn"> Promoções<i
								className="fa-solid fa-arrow-down-to-square"></i></a>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}