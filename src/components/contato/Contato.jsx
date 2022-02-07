import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import './Contato.css';

export function Contato() {
	return (
		<>
			<Navbar />
			<section className="contact">
				<form className="form" action="https://formspree.io/f/xrgjgyed" method="POST">
					<div className="form_container">
						<h2 className="form_title">Entre em Contato</h2>
						<input type="text" className="form_input" placeholder="Nome" name="name" />
						<input type="email" className="form_input" placeholder="Email" name="email" />
						<textarea className="form_input form_input-message" placeholder="Escreva sua messagem" name="message"></textarea>
						<input type="submit" className="form_cta" value="Enviar" />
					</div>
				</form>
			</section>
			<Footer />
		</>
	);
}