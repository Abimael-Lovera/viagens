import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import './Index.css';

import travel from '../../assets/img/travel.png';
import saopaulo from '../../assets/img/sao-paulo.jpeg';
import rioDeJaneiro from '../../assets/img/rioDeJaneiro.jpeg';
import lisboa from '../../assets/img/lisboa.jpeg';

export function Index() {
	return (
		<>
			<Navbar />
			<header className="hero banner-image w-100 vh-100 d-flex justify-content-center align-items-center" id="hero">
				<section className="hero_container container">
					<div className="hero_text">
						<h4 className="hero_subtitle">OS MELHORES DESTINOS AO REDOR DO MUNDO</h4>
						<h1 className="hero_title title">Viajar, curtir e viver uma vida nova e plena</h1>
						<p className="hero_paragraph">planeje suas férias nos lugares mais bonitos do mundo. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Eos ipsam laboriosam praesentium nihil nemo voluptates?</p>
						<div className="hero_btn">
							<a asp-action="Login" className="hero_btn">Criar Conta</a>
						</div>
					</div>
					<img src={travel} alt="" className="hero_img" />
				</section>
			</header>

			{/* Cards TOP VIAGENS */}

			<section className="cardsViagens container">
				<h2 className="title text-center p-1 m1">Top destinos mais buscados</h2>
				<div className="row g-3 justify-content-md-center">
					{/* CARDS  */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card text-white">
							<img src={saopaulo} className="card-img" alt="..." />
							<div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center">
								<h5 className="card-title">São Paulo</h5>
								<p className="card-text">Brasil</p>
							</div>
						</div>
					</div>
					{/* CARDS  */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card text-white text-center">
							<img src={rioDeJaneiro} className="card-img" alt="..." />
							<div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center">
								<h5 className="card-title">Rio de Janeiro</h5>
								<p className="card-text">Brasil</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card text-white">
							<img src={lisboa} className="card-img" alt="..." />
							<div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center">
								<h5 className="card-title">Lisboa</h5>
								<p className="card-text">Portugal</p>
							</div>
						</div>
					</div>

				</div>
			</section>
			{/* FORM VIAGENS */}
			<section className="formTravel">
				<div className="container">
					<h3 className="formTravel_title title">É o momento de descobrir uma nova aventura</h3>
					<section className="formTravel_container container">
						<h3 className="formtravel_container-title">Viagens com reserva flexível</h3>
						{/* Origem Destino */}
						<div className="formTravel_content">
							<div className="formTravel_group">
								<label htmlFor="destino">Origem</label>

								<select id="destino" aria-placeholder="Destino">
									<option value="Origem">Escolha</option>
									<option value="sao-paulo">São Paulo</option>
									<option value="rio-de-janeiro">Rio de Janeiro</option>
									<option value="aracaju">Aracaju</option>
									<option value="curitiba">Curitiba</option>
									<option value="dubai">Dubai</option>
									<option value="florianópolis">Florianópolis</option>
									<option value="fortaleza">Fortaleza</option>
									<option value="joao-pessoa">João Pessoa</option>
									<option value="lisboa">Lisboa</option>
									<option value="maceio">Maceió</option>
									<option value="natal">Natal</option>
									<option value="orlando">Orlando</option>
									<option value="salvador">Salvador</option>
								</select>
							</div>
							<div className="formTravel_group">
								<label htmlFor="destino">Destino</label>

								<select id="destino" aria-placeholder="Destino">
									<option value="Origem">Escolha</option>
									<option value="sao-paulo">São Paulo</option>
									<option value="rio-de-janeiro">Rio de Janeiro</option>
									<option value="aracaju">Aracaju</option>
									<option value="curitiba">Curitiba</option>
									<option value="dubai">Dubai</option>
									<option value="florianópolis">Florianópolis</option>
									<option value="fortaleza">Fortaleza</option>
									<option value="joao-pessoa">João Pessoa</option>
									<option value="lisboa">Lisboa</option>
									<option value="maceio">Maceió</option>
									<option value="natal">Natal</option>
									<option value="orlando">Orlando</option>
									<option value="salvador">Salvador</option>
								</select>
							</div>
						</div>
						{/* Form Calendat */}
						<div className="formTravel_content">
							<div className="formTravel_group">
								<label htmlFor="height">Ida</label>
								<input type="date" id="height" />
							</div>
							<div className="formTravel_group">
								<label htmlFor="height">Volta</label>
								<input type="date" id="height" />
							</div>
						</div>
						<div className="formTravel_content formTravel_content-btn">
							<div className="formTravel_group formTravel_group-btn">
								<button type="submit"><i className="fa-solid fa-magnifying-glass"></i> Buscar</button>
							</div>
						</div>
					</section>
				</div>
			</section>
			{/* QUESTIONS */}
			<section className="container questions_container">
				<h2 className="questions_title title text-center">Perguntas Frequentes</h2>
				<div className="accordion accordion-flush" id="accordionFlushExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingOne">
							<button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Por que
								os pacotes de viagem são mais convenientes?</button>
						</h2>
						<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">Ao comprar pacotes turísticos você acaba pagando mais barato por sua viagem,
								uma vez que ao adicionar uma hospedagem ou um carro ao pacote, você obtém bons descontos. Comprar
								pacotes de viagem sempre sairá mais em conta! Você pode montar pacotes à sua medida, economizar no
								valor total e gastar esse dinheiro na sua viagem. Aproveite as melhores ofertas para uma infinidade
								de destinos!</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Tipos de
								pacotes de viagens vendidos em Lovera</button>
						</h2>
						<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">Em Lovera você pode montar pacotes de viagem incluindo um voo e uma
								hospedagem, um voo e duas hospedagens ou um voo e um carro. Escolha a primeira opção se você estiver
								pensando em viajar para um destino só. A segunda opção é indicada para quem deseja voar para um
								destino específico e depois conhecer outro. E a terceira é para quem deseja se deslocar como quiser
								na viagem. Existem pacotes turísticos para todos os gostos!.</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingThree">
							<button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">O
								que devo levar em conta ao escolher um pacote?</button>
						</h2>
						<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">No momento de escolher o seu pacote, recomendamos levar em consideração as
								datas exatas da viagem, a localização da hospedagem, a informação dos voos, o número de passageiros
								e a quantidade de quartos. Além disso, fique atento à tarifa da hospedagem e da passagem aérea que
								você selecionar. Monte o pacote de viagem ideal para você!.</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingFour">
							<button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">O que
								posso incluir no meu pacote?</button>
						</h2>
						<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">Assim que você escolher o seu pacote, você poderá adicionar outros produtos,
								como aluguel de um carro, transfer do aeroporto e atrações para curtir no destino. Monte os pacotes
								turísticos como quiser. Reserve as atrações para conhecer os pontos turísticos mais importantes do
								lugar para onde você vai viajar ou contrate um transfer para chegar mais rapidez e conforto à
								hospedagem.</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingFive">
							<button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Formas
								de pagamento estão aqui</button>
						</h2>
						<div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">Realize a viagem dos seus sonhos com condições que só a CVC oferece para
								você! Suas compras podem ser realizadas em até 10x sem juros, no cartão de crédito, transferência
								bancária ou à vista. Além de benefícios exclusivos que você pode encontrar numa loja CVC.</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}