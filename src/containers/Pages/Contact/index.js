import React, { Component } from 'react';
import SectionTop from '../../../components/SectionTop';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="contact-ct">
				<SectionTop>
					<h1>Contactez-moi</h1>
				</SectionTop>
				<div className="ct-form">
					<p><strong>Je suis disponible pour un CDI, je suis en recherche active d'une équipe dynamique et pourquoi pas bilingue!</strong></p>
					<small>Je suis également ouvert pour collaborer sur de nombreux types de projets qui me passionnent:</small>
					<div>
						<small>Projets évenementiels lié au digital, à l'entreprenariat ou encore à la musique et au sport.</small>
					</div>
					<small>Projets digitaux Open Source, creation de blog, media internet ou tout projet lié au monde passionnant des jeux vidéo.</small>
					<form action="https://formspree.io/adrien.gadaud@gmail.com" method="POST">
					    
					    <label for="email">Email</label>
					    <input type="email" id="email" name="email" placeholder="Votre Email..." />
						
						<select size="0.1" name="object">
						    <option value="employment">Offre d'emploi</option>
						    <option value="project">Projet</option>
						    <option value="other">Autre</option>
						</select>

					    <label className="input-message" for="message">Message</label>
					    <input type="text" id="message" name="message" placeholder="Votre message..." />

					    <input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	};
};

export default Contact;
