import React, { Component } from 'react';
import SectionTop from '../../../components/SectionTop';
import './Contact.css';
import Page from '../../../components/Page';

class Contact extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Page className="contact-ct">
				<SectionTop>
					<h1>Contactez-moi</h1>
				</SectionTop>
				<div className="ct-intro">
					<p><strong>Je suis disponible pour un CDI et en recherche active d'une équipe dynamique et pourquoi pas bilingue !</strong></p>
					<p><small>Je suis également ouvert pour collaborer sur de nombreux types de projets qui me passionnent :</small></p>
					<ul>
						<li>Projets évenementiels liés au digital, à l'entreprenariat ou encore à la musique et au sport.</li>
						<li>Projets digitaux Open Source, création de blog, media internet ou tout projet lié au monde passionnant des jeux vidéo.</li>
					</ul>
				</div>
				<div className="ct-form">
					<form action="https://formspree.io/adrien.gadaud@gmail.com" method="POST">
					    <label for="email">Votre email</label>
					    <input type="email" id="email" name="email" placeholder="un email valide..." />
						<div className="form-select">
							<p>pour</p>
							<select size="0.1" name="object">
							    <option value="employment">une offre d'emploi</option>
							    <option value="project">un projet</option>
							    <option value="other">autre chose</option>
							</select>
						</div>
					    <label className="input-message" for="message">Votre message</label>
						<textarea name="message" type="text" placeholder="n'hesitez pas à développer votre demande..."></textarea>
					    <input type="submit" value="Submit" />
					</form>
				</div>
			</Page>
		);
	};
};

export default Contact;
