import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import './Promocoes.css';

import saopaulo from '../../assets/img/sao-paulo.jpeg';
import rioDeJaneiro from '../../assets/img/rioDeJaneiro.jpeg';
import lisboa from '../../assets/img/lisboa.jpeg';
import aracaju from '../../assets/img/aracaju.jpeg';
import curitiba from '../../assets/img/curitiba.jpeg';
import maceio from '../../assets/img/maceio.jpeg';
import dubai from '../../assets/img/dubai.jpeg';
import florianopolis from '../../assets/img/florianopolis.jpeg';
import fortaleza from '../../assets/img/fortaleza.jpeg';

import natal from '../../assets/img/natal.jpeg';
import orlando from '../../assets/img/orlando.jpeg';
import fozDoIguacu from '../../assets/img/fozDoIguacu.png';
import joaoPessoa from '../../assets/img/joaoPessoa.jpeg';
import salvador from '../../assets/img/salvador.jpeg';



export function Promocoes() {
	return (
		<>
			<Navbar />
			<div className="container__promocoes">
				<div className="container" id="container">
					<h1 className="title text-center">Pacotes imperdíveis para suas próximas férias</h1>
					<p className="subtitle text-center">As melhores ofertas para você com preços especiais para destinos inesquecíveis!
					</p>
					<section className="cards__container">
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={rioDeJaneiro} alt="" />
							</div>
							<h4>Rio de Janeiro</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={saopaulo} alt="" />
							</div>
							<h4>São Paulo</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={maceio} alt="" />
							</div>
							<h4>Maceió</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={aracaju} alt="" />
							</div>
							<h4>Aracaju</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={curitiba} alt="" />
							</div>
							<h4>Curitiba</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={dubai} alt="" />
							</div>
							<h4>Dubai</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>

						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={florianopolis} alt="" />
							</div>
							<h4>Florianopolis</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={fortaleza} alt="" />
							</div>
							<h4>Fortaleza</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={fozDoIguacu} alt="" />
							</div>
							<h4>Foz do Iguaçu</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={joaoPessoa} alt="" />
							</div>
							<h4>João Pessoa</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={lisboa} alt="" />
							</div>
							<h4>Lisboa</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={natal} alt="" />
							</div>
							<h4>Natal</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={orlando} alt="" />
							</div>
							<h4>Orlando</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
						<div className="cards__container-card">
							<div className="cards__container-img">
								<img src={salvador} alt="" />
							</div>
							<h4>Salvador</h4>
							<p>
								Saindo de Brasilia <br />
								Hotel + Aereo <br />
								3 noites
							</p>
							<a href="#" className="cards__container-btn">R$ 1000</a>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}