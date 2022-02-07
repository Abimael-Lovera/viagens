import './Footer.css';

export function Footer() {
	return (
		<footer className="footer">
			<section className="footer_container container">
				<div className="footer_content">
					<div className="footer_data">
						<h3 className="footer_title">Lovera</h3>
						<p className="footer_description">
							Travel you choose the <br />
							destination, we offer you the <br />
							experience.
						</p>
						<div className="footer_social">
							<a href="https://www.facebook.com/" target="_blank" className="footer_social-media" rel="noreferrer">
								<i className="fa-brands fa-facebook-square"></i>
							</a>
							<a href="https://twitter.com/" target="_blank" className="footer_social-media" rel="noreferrer">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/" target="_blank" className="footer_social-media" rel="noreferrer">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="https://www.youtube.com/" target="_blank" className="footer_social-media" rel="noreferrer">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</div>
					</div>
					<div className="footer_data">
						<h3 className="footer_subtitle">About</h3>
						<ul>
							<li className="footer_item">
								<a href="#!" className="footer_link">About Us</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">Features</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">New & Blog</a>
							</li>
						</ul>
					</div>
					<div className="footer_data">
						<h3 className="footer_subtitle">Company</h3>
						<ul>
							<li className="footer_item">
								<a href="#!" className="footer_link">Team</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">Plan y Pricing</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">Become a member</a>
							</li>
						</ul>
					</div>
					<div className="footer_data">
						<h3 className="footer_subtitle">Support</h3>
						<ul>
							<li className="footer_item">
								<a href="#!" className="footer_link">FAQs</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">Support Center</a>
							</li>
							<li className="footer_item">
								<a href="#!" className="footer_link">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer_rights">
					<p className="footer__copy">&#169; 2021 Abimael Lovera.</p>
					<div className="footer__terms">
						<a href="#!" className="footer__terms-link">Termos & Condições</a>
						<a href="#!" className="footer__terms-link"> Política de Privacidade</a>
					</div>
				</div>
			</section>
		</footer>
	);
}