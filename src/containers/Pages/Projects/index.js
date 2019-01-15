import React, { Component } from 'react';
import logoBs from '../../../static/01_design-logo_bs.png';
import siteBs from '../../../static/02_web_website-bs.png';

import logoSb from '../../../static/01_design_agd-sb-logo.jpg';
import logoAbstraack from '../../../static/01_design_agd-abstrack-logo.jpg';
import identityAbstraackFlower from '../../../static/identity-abstraack-flower.jpg';
import identityAbstraackFlower1 from '../../../static/identity-abstraack-flower-3.png';
import identityAbstraackFlowerPoster from '../../../static/identity-abstraack-flower-poster.png';
import identityAbstraackFlowerSocial from '../../../static/identity-abstraack-flower-social.jpg';
import eventAbstraackOpenMind from '../../../static/project-abstraack-open-mind.jpg';
import eventAbstraackOpenMind2 from '../../../static/project-abstraack-open-mind2.jpg';

import logoHad from '../../../static/01_design_agd-had-logo.jpg';
import logoEcoTrail from '../../../static/logo_eco-trail.png';

import logoSlm from '../../../static/01_design_agd-slm-logo.jpg';
import logoCcg from '../../../static/01_design-logo_citizen-commitment.png';
import logoTbd from '../../../static/01_design-logo_tbd.jpg';
import identityTbdLogo from '../../../static/identity-tbd-logo.png';
import identityTbdPhoto from '../../../static/identity-tbd-photo.jpg';
import identityTbdPhoto1 from '../../../static/identity-tbd-photo-1.jpg';
import identityTbdSocial from '../../../static/identity-tbd-social.jpg';
import identityTbdSocial4 from '../../../static/identity-tbd-social-4.jpg';
import identityTbdSocial7 from '../../../static/identity-tbd-social-7.jpg';
import identityTbdWeb2 from '../../../static/identity-tbd-web-1.jpg';
import identityTbdWeb1 from '../../../static/identity-tbd-web-2.jpg';
import identityTbdWeb from '../../../static/identity-tbd-web.jpg';
import siteTbd from '../../../static/02_web_website-tbd.jpg';

import logoKopaxgroup from '../../../static/01_design-logo_kopaxgroup.png';
import logoYeutech from '../../../static/01_design-logo_yeutech.png';
import identityYeutechFavicon from '../../../static/identity-yeutech-favicon.png';
import identityYeutechGuideline from '../../../static/identity-yeutech-guideline.jpg';
import siteYeutech from '../../../static/02_web_website-yeutech.png';

import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Projects extends Component {
	state = {
		tabs: 'DIGITAL',
	}
	onTabClick = (tab) => {
		let tabItem = tab;
		this.setState({
			tabs: tabItem,
		})
	}

	render() {
		const { tabs } = this.state;
		return (
			<div>
				<SectionTop>
					<h1>MES PROJETS</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Grâce à ma formation en Alternance et en tant qu'étudiant j'ai eu la chance de participer à de nombreux projets.</strong></p>
					<p>À un rythme d'un projet par année j'arrive ainsi à occuper mes weekend et mes temps libres tout en rencontrant de nouvelles personnes, futurs amis, collaborateur ou simple connaissance.</p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "DIGITAL" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('DIGITAL')}
                        onTouch={() => this.onTabClick('DIGITAL')}
					  >
					  	WEB
					  </button>
					  <button
					  	className={`tablinks ${tabs === "EVENT" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('EVENT')}
                        onTouch={() => this.onTabClick('EVENT')}
					  >
					  	ÉVÈNEMENTIELS
					  </button>
					  {/*
					  <button
					  	className={`tablinks ${tabs === "STARTUP" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('STARTUP')}
                        onTouch={() => this.onTabClick('STARTUP')}
					  >
					  	ENTREPRENARIAT
					  </button>
					*/}
					</div>

					<div id="EVENT" className={`tabcontent ${tabs === "EVENT" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Gestion de projets évènementiels</h2>
							<h3>Have A Dream</h3>
							<p className="media-date">2013 - 2014</p>
							<p>Projet étudiant afin d'organiser des projets évènementiels dans le cadre de ma formation en Alternance.</p>
							<p>Au sein d'une équipe polyvalente de huit personnes, j'ai été chef de projet digital et ai managé deux étudiants chargé de la prospection et du community management.</p>
							<p className="media-title">Ce que j'ai accompli:</p>
							<ul>
								<li>Management de l'équipe digital marketing (community management et inbound marketing).</li>
								<li>Management de l'équipe de vente (prospection pour l'agence et ses clients).</li>
								<li>Webmaster et développeur des sites internet de l'agence et de ses clients (Wordpress, HTML5, CSS)</li>
								<li>Participation à l'équipe créative (création des logo pour l'agence et ses clients mais aussi conception des supports de communication digitaux).</li>
							</ul>
							<p><small>Website: Site fermé</small></p>
							<MediaBoard>
								<figure>
									<img src={logoHad} alt="Agence Évènementielle Have A Dream" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Agence Évènementielle, Have A Dream (Évènements Sportifs à Paris et en IDF).</figcaption>
									<div>
										<figcaption><strong>Travaux effectués:</strong></figcaption>
										<ul>
											<li>Chef de projet digital</li>
											<li>Développeur Wordpress et Webmaster</li>
										</ul>
									</div>
								</figure>
							   	<figure>
									<img src={logoCcg} alt="Évènement Sportif - Citizen Commitment Game" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Évènement Sportif organisé par l'agence Have A Dream - Citizen Commitment Game (Team buiding organisé par la Société Génerale à Nantes).</figcaption>
									<div>
										<figcaption><strong>Travaux effectués:</strong></figcaption>
										<ul>
											<li>Responsable des activités</li>
											<li>Animateur bénévole</li>
										</ul>
									</div>
								</figure>
							   	<figure>
									<img src={logoTbd} alt="Évènement Sportif - The Bubble Day" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Évènement Sportif organisé par l'agence Have A Dream - The Bubble Day (Course Solidaire à Paris - Marseille).</figcaption>
									<div>
										<figcaption><strong>Travaux effectués:</strong></figcaption>
										<ul>
											<li>Chef de projet digital (site internet et community management)</li>
											<li>Développeur Wordpress et Webmaster</li>
											<li>Management de l'équipe de vente (prospection et sponsoring)</li>
										</ul>
									</div>
								</figure>
							   	<figure>
									<img src={logoEcoTrail} alt="Évènement Sportif - EcoTrail" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Évènement Sportif organisé par l'agence Have A Dream - EcoTrail (Marathon de Versailles à Paris).</figcaption>
									<div>
										<figcaption><strong>Travaux effectués:</strong></figcaption>
										<ul>
											<li>Management de l'équipe de vente (prospection et sponsoring)</li>
											<li>Animateur bénévole</li>
										</ul>
									</div>
								</figure>
							</MediaBoard>
						</SectionMedia>
						<SectionMedia>
							<h3>Abstraack</h3>
							<p className="media-date">2017 - 2018</p>
							<p>Co-fondateur de l'agence évènementielle Abstraack, j'ai eu la chance de manager une équipe extraordinaire:</p>
							<ul>
								<li>Management de l'équipe créative (identité visuelle des évènements, flyers, poster, etc...).</li>
								<li>Management de l'équipe digital marketing (community management et inbound marketing).</li>
								<li>Management de l'équipe de vente (prospection pour l'agence et ses clients).</li>
							</ul>
							<p><small>Website: <a href="https://www.facebook.com/abstraack/" rel="noopener noreferrer" target="_blank">facebook.com/abstraack</a></small></p>
							<MediaBoard>
								<figure>
									<img src={logoAbstraack} alt="Logo Abstraack" />
									<figcaption>ABSTRAACK, agence évènementielle. Saigon.</figcaption>
								</figure>
								<figure>
									<img src={eventAbstraackOpenMind} alt="Affiche OpenYour Mind." />
									<figcaption>Affiche print et sur les réseaux sociaux, Open Your Mind.</figcaption>
								</figure>
								<figure>
									<img src={eventAbstraackOpenMind2} alt="Affiche OpenYour Mind." />
									<figcaption>Affiche print et sur les réseaux sociaux, Open Your Mind.</figcaption>
								</figure>
								<figure>
									<img src={identityAbstraackFlowerSocial} alt="Affiche Saigon Flower Power." />
									<figcaption>Affiche sur les réseaux sociaux, Saigon Flower Power.</figcaption>
								</figure>
								<figure>
									<img src={identityAbstraackFlower} alt="Flyers Saigon Flower Power" />
									<figcaption>Flyers Saigon Flower Power.</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="DIGITAL" className={`tabcontent ${tabs === "DIGITAL" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Gestion de projets web</h2>
							<h3>Yeutech</h3>
							<p className="media-date">2016 - 2018</p>
							<p>À la tête d'une équipe de deux talentueux designers et d'un développeur j'ai eu la chance de travaillé sur la création d'une marque de A à Z.</p>
							<ul>
								<li>Définition marketing (Positionnement, mix marketing, étude de marché, veille...)</li>
								<li>Direction Artistique pour l'élaboration de l'identité visuel.</li>
								<li>Élaboration et conception du site internet. (Wireframe, spécification technique, développement HTML, CSS, JS...)</li>
								<li>Définition et mise en place de stratégie de communication online. (Inbound marketing, référencement, réseaux sociaux...)</li>
							</ul>
							<p><small>Website: <a href="https://github.com/yeutech-lab" rel="noopener noreferrer" target="_blank">yeutech-lab.com</a></small></p>
							<MediaBoard>
								<figure>
									<img src={logoYeutech} alt="Logo Yeutech" />
									<figcaption>Yeutech, software factory. Saigon.</figcaption>
								</figure>
								<figure>
									<img src={identityYeutechFavicon} alt="Favicon Yeutech" />
									<figcaption>Favicon Yeutech.</figcaption>
								</figure>
								<figure>
									<img src={identityYeutechGuideline} alt="Charte graphique web Yeutech" />
									<figcaption>Charte graphique web Yeutech.</figcaption>
								</figure>
								<figure>
									<img src={siteYeutech} alt="Site internet yeutech.vn" />
									<figcaption>Conception du site internet de Yeutech.</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
						<SectionMedia>
							<h3>The Bubble Day</h3>
							<p className="media-date">2014 - 2015</p>
							<p>Après la première édition réalisée en 2014 avec l'agence étudiante Have A Dream je suis ensuite devenue freelance sur les futures éditions (2015 - 2016).</p>
							<p>J'étais le chef de projet digital et devait superviser les graphistes afin d'adapter efficacement les contenus (textes, photos, videos) sur le site internet et ses réseaux sociaux.</p>
							<ul>
								<li>Webmaster et développeur du site internet de l'évènement (Wordpress, HTML5, CSS).</li>
								<li>Management de l'équipe créative et marketing (Rédaction des contenus, conformité des images et photo pour le web).</li>
							</ul>
							<p><small>Website: Site fermé</small></p>
							<MediaBoard>
								<figure>
									<img src={identityTbdLogo} alt="Cartes de visites Yeutech" />
									<figcaption>Logo The Bubble Day.</figcaption>
								</figure>
								<figure>
									<img src={identityTbdPhoto} alt="Création de contenu photo/video The Bubble Day" />
									<figcaption>Création de contenu photo/video pour mettre en avant l'évènement.</figcaption>
								</figure>
								<figure>
									<img src={identityTbdPhoto1} alt="Création de contenu photo/video The Bubble Day" />
									<figcaption>Création de contenu photo/video The Bubble Day.</figcaption>
								</figure>
								<figure>
									<img src={identityTbdWeb1} alt="Création de contenu photo/video The Bubble Day" />
									<figcaption>Création de contenu photo/video The Bubble Day.</figcaption>
								</figure>
								<figure>
									<img src={identityTbdWeb2} alt="Création de contenu photo/video The Bubble Day" />
									<figcaption>Création de contenu photo/video The Bubble Day.</figcaption>
								</figure>
								<figure>
									<img src={siteTbd} alt="Charte graphique web Yeutech" />
									<figcaption>Conception et administration du site internet The Bubble Day.</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>

						<SectionMedia>
							<h3>Bootstrap-styled</h3>
							<p className="media-date">2016 - 2017</p>
							<p>Au sein de l'entreprise Yeutech, j'ai eu la chance de participer à l'élaboration d'une technologie Open Source.</p>
							<p>Conçut à partir de Bootstrap, React.js et Styled-Components, ce nouveau framework javascript permet de simplifier considérablement la conception web basé sur des themes reutilisables et modulaires.</p>
							<p>J'ai également supervisé la conception du site internet de presentation ainsi que la documentation.</p>
							<ul>
								<li>Webmaster et développeur du site internet (HTML5, CSS, Javscript dont React.js).</li>
								<li>Management de l'équipe créative et marketing (Réalisation de l'identité visuel et rédaction des contenus textes et images).</li>
							</ul>
							<p><small><a href="https://github.com/bootstrap-styled" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.bootstrap-styled.com</a></small></p>
							<MediaBoard>
							  	<figure>
									<img src={siteBs} alt="Site internet bootstrap-styled.com" />
									<figcaption>Conception du site internet (HTML5, CSS3, Javascript dont React.js.</figcaption>
								</figure>
							  	<figure>
									<img src={logoBs} alt="Bootstrap-Styled" />
									<figcaption>Technologie Open Source, Bootstrap-styled.</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					{/*
					<div id="STARTUP" className={`tabcontent ${tabs === "STARTUP" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Voici les projets auxquels j'ai participé:</h2>
							<MediaBoard>
								<figure>
									<img src={logoSlm} alt="Agence Digitale SLM" />
									<figcaption>Agence Digitale SLM (Sans les Mains).</figcaption>
								</figure>
							   	<figure>
									<img src={logoKopaxgroup} alt="Développement logiciel - Kopaxgroup" />
									<figcaption>Développement logiciel - Kopaxgroup (basée à Hong-Kong).</figcaption>
								</figure>
							   	<figure>
									<img src={logoYeutech} alt="Usine Digitale - Yeutech" />
									<figcaption>Usine Digitale - Yeutech (basée au Vietnam).</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					*/}
				</Tabs>
			</div>
		);
	};
};

export default Projects;
