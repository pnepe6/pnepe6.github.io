import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import badgeBs from '../../../static/bs_badge.png';
import titleBs from '../../../static/bs_badge-title.png';
import readmeBs from '../../../static/bs_readme-git.png';
import siteHomeBs from '../../../static/bs_site-home.png';
import logoAbstraack from '../../../static/01_design_agd-abstrack-logo.jpg';
import identityAbstraackFlower from '../../../static/identity-abstraack-flower.jpg';
import identityAbstraackFlowerSocial from '../../../static/identity-abstraack-flower-social.jpg';
import eventAbstraackOpenMind from '../../../static/project-abstraack-open-mind.jpg';
import eventAbstraackOpenMind2 from '../../../static/project-abstraack-open-mind2.jpg';
import logoHad from '../../../static/01_design_agd-had-logo.jpg';
import logoEcoTrail from '../../../static/logo_eco-trail.png';
import logoCcg from '../../../static/01_design-logo_citizen-commitment.png';
import linkedinSymbol from '../../../static/linkedin-symbol.png';
import twitterSymbol from '../../../static/twitter_symbol.png';
import ActuFranchiseSymbol from '../../../static/logo_actu-franchise.jpeg';
import smoInvitationSymbol from '../../../static/02_web_marketing-invitation.jpg';
import smoActuFranchiseSymbol from '../../../static/02_web_marketing-actu-franchise.jpg';
import paoGammeBaieSymbol from '../../../static/01_design_agd-gamme-baie-pao.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
import logoTbd from '../../../static/01_design-logo_tbd.jpg';
import identityTbdLogo from '../../../static/identity-tbd-logo.png';
import identityTbdPhoto1 from '../../../static/identity-tbd-photo-1.jpg';
import identityTbdWeb1 from '../../../static/identity-tbd-web-2.jpg';
import siteTbd from '../../../static/02_web_website-tbd.jpg';
import fbTbd from '../../../static/rs-fb_tbd.png';
import twitterTbd from '../../../static/rs-twitter_tbd.png';
import logoYeutech from '../../../static/01_design-logo_yeutech.png';
import rsYeutech from '../../../static/yeutech_rs-fb.png';
import identityYeutechGuideline from '../../../static/identity-yeutech-guideline.jpg';
import siteYeutechSample from '../../../static/02_web_website-yeutech-sample.png';
import siteDocYeutech from '../../../static/02_web_website-yeutech-doc.png';
import wireframeTabletYeutech from '../../../static/wireframe_yeutech-ipad.png';
import identityYeutechGoogle from '../../../static/identity-yeutech-google.jpg';
import admvLogo from '../../../static/achatdansmaville-logo.jpg';
import admvSite from '../../../static/achatdansmaville-site.png';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';
import Collapse from '../../../components/Collapse';


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
		        <Helmet>
            		<title>Gestion de projet digital</title>
        	  		<meta name="description" content="Portfolio des mes expériences en gestion de projet digital et gestion de projet évènementiel." />
		        </Helmet>
				<SectionTop>
					<h1>GESTION DE PROJET</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Depuis ma formation en Alternance suivie de mes différents emplois, j'ai eu la chance de participer à de nombreux projets.</strong></p>
					<p>Mes passions mon entraînées rapidement dans la gestion de projet web (eReputation, inbound marketing, stratégie SEO, etc.).</p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "DIGITAL" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('DIGITAL')}
                        onTouch={() => this.onTabClick('DIGITAL')}
					  >
					  	DIGITAL
					  </button>
					  <button
					  	className={`tablinks ${tabs === "EVENT" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('EVENT')}
                        onTouch={() => this.onTabClick('EVENT')}
					  >
					  	ÉVÈNEMENTIEL
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

					<div id="EVENT" className={`tabcontent ${tabs === "EVENT" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Gestion de projet évènementiel</h2>
							<h3>Abstraack</h3>
							<p className="media-date">2017 - 2018</p>
							<p>Co-fondateur de l'agence évènementielle Abstraack, j'ai eu la chance de manager une équipe extraordinaire:</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<ul>
									<li>Management de l'équipe créative (identité visuelle des évènements, flyers, poster, etc.).</li>
									<li>Management de l'équipe digital marketing (community management et inbound marketing).</li>
									<li>Management de l'équipe de vente (prospection pour l'agence et ses clients).</li>
								</ul>
								<p><small>Website : <a href="https://www.facebook.com/abstraack/" rel="noopener noreferrer" target="_blank">facebook.com/abstraack</a></small></p>
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
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3>Have A Dream</h3>
							<p className="media-date">2013 - 2014</p>
							<p>Projet étudiant afin d'organiser des projets évènementiels dans le cadre de ma formation en Alternance.</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>Au sein d'une équipe polyvalente de huit personnes, j'ai été chef de projet digital et ai managé deux étudiants chargé de la prospection et du community management.</p>
								<p className="media-title">Ce que j'ai accompli :</p>
								<ul>
									<li>Management de l'équipe digital marketing (community management et inbound marketing).</li>
									<li>Management de l'équipe de vente (prospection pour l'agence et ses clients).</li>
									<li>Webmaster et développeur des sites internet de l'agence et de ses clients (Wordpress, HTML5, CSS).</li>
									<li>Participation à l'équipe créative (création des logos pour l'agence et ses clients et conception des supports de communication digitaux).</li>
								</ul>
								<p><small>Website : Site fermé</small></p>
								<MediaBoard>
									<figure>
										<img src={logoHad} alt="Agence Évènementielle Have A Dream" />
										<figcaption><strong>Description :</strong></figcaption>
										<figcaption>Agence Évènementielle, Have A Dream (Évènements Sportifs à Paris et en IDF).</figcaption>
										<div>
											<figcaption><strong>Travaux effectués :</strong></figcaption>
											<ul>
												<li>Chef de projet digital</li>
												<li>Développeur Wordpress et Webmaster</li>
											</ul>
										</div>
									</figure>
								   	<figure>
										<img src={logoCcg} alt="Évènement Sportif - Citizen Commitment Game" />
										<figcaption><strong>Description :</strong></figcaption>
										<figcaption>Évènement Sportif organisé par l'agence Have A Dream - Citizen Commitment Game (Évènement sportif déstiné aux activités de team-buiding de la Société Générale).</figcaption>
										<div>
											<figcaption><strong>Travaux effectués :</strong></figcaption>
											<ul>
												<li>Responsable des activités</li>
												<li>Animateur bénévole</li>
											</ul>
										</div>
									</figure>
								   	<figure>
										<img src={logoTbd} alt="Évènement Sportif - The Bubble Day" />
										<figcaption><strong>Description :</strong></figcaption>
										<figcaption>Évènement Sportif organisé par l'agence Have A Dream - The Bubble Day (Course Solidaire à Paris - Marseille).</figcaption>
										<div>
											<figcaption><strong>Travaux effectués :</strong></figcaption>
											<ul>
												<li>Chef de projet digital (site internet et community management)</li>
												<li>Développeur Wordpress et Webmaster</li>
												<li>Management de l'équipe de vente (prospection et sponsoring)</li>
											</ul>
										</div>
									</figure>
								   	<figure>
										<img src={logoEcoTrail} alt="Évènement Sportif - EcoTrail" />
										<figcaption><strong>Description :</strong></figcaption>
										<figcaption>Évènement Sportif organisé par l'agence Have A Dream - EcoTrail (Marathon de Versailles à Paris).</figcaption>
										<div>
											<figcaption><strong>Travaux effectués :</strong></figcaption>
											<ul>
												<li>Management de l'équipe de vente (prospection et sponsoring)</li>
												<li>Animateur bénévole</li>
											</ul>
										</div>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
					</div>
					<div id="DIGITAL" className={`tabcontent ${tabs === "DIGITAL" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Gestion de projet digital</h2>
							<h3>Yeutech</h3>
							<p className="media-date">2016 - 2018</p>
							<p>J'ai travaillé sur le lancement de la start-up informatique Yeutech au Viêtnam.</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>À la tête d'une équipe de deux talentueux designers et d'un développeur, j'ai eu la chance de travailler sur la création d'une marque de A à Z.</p>
								<ul>
									<li>Responsable marketing (définition du positionnement, mix marketing, études de marché, veille, etc.).</li>
									<li>Direction Artistique pour l'élaboration de l'identité visuel et des documents d'entreprise.</li>
									<li>Gestion de projet web pour la conception du site internet de l'entreprise.</li>
									<li>Responsable de la communication avec la mise en place de la stratégie de communication online.</li>
								</ul>
								<p><small>Website : <a href="https://github.com/yeutech-lab" rel="noopener noreferrer" target="_blank">yeutech-lab.com</a></small></p>
								<MediaBoard>
									<figure>
										<div>
											<h4>Gestion de projet web</h4>
											<ul>
												<li>Supervision de l'équipe créative pour définir les maquettes du site internet (mobile first, responsive, UX design, etc.).</li>
												<li>Supervision du développement du site internet (spécification technique, développement HTML, CSS, JS, etc.).</li>
											</ul>
										</div>
										<p><Link to="/web#yeutech">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={siteDocYeutech} alt="Site de documentation des technologies développées par Yeutech." />
										<figcaption>Site de documentation des technologies développées par Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={wireframeTabletYeutech} alt="wireframe Tablette Yeutech." />
										<figcaption>Maquette de conception du site Tablette Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={siteYeutechSample} alt="Site internet Yeutech." />
										<figcaption>Site internet Yeutech.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Direction artistique</h4>
											<ul>
												<li>Supervision de la création de l'identité visuelle (logotype, police, couleur, etc.).</li>
												<li>Supervision de la création des documents d'entreprise (cartes de visite, factures, devis, template de lettre, etc.)</li>
											</ul>
										</div>
										<p><Link to="/design#yeutech">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={logoYeutech} alt="Logo Yeutech." />
										<figcaption>Logo Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={identityYeutechGuideline} alt="Guideline Webdesign Yeutech." />
										<figcaption>Guideline Webdesign Yeutech.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Responsable communication digitale</h4>
											<ul>
												<li>Définition de la stratégie de communication digitale (inbound marketing, référencement, réseaux sociaux, etc.).</li>
												<li>Élaboration et mise en place du community management (stratégie de publication et d'animation des réseaux sociaux).</li>
											</ul>
										</div>
										<p><Link to="/digital-marketing#yeutech">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={rsYeutech} alt="Page Facebook Yeutech." />
										<figcaption>Page Facebook Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={identityYeutechGoogle} alt="Arrière plan des profils sociaux de Yeutech." />
										<figcaption>Arrière plan des profils sociaux de Yeutech sur les réseaux en lignes.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3>Bootstrap-styled</h3>
							<p className="media-date">2016 - 2017</p>
							<p>Au sein de l'entreprise Yeutech, j'ai eu la chance de participer à l'élaboration d'une technologie Open Source.</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>Conçut à partir de Bootstrap, React.js et Styled-Components, ce nouveau framework javascript permet de simplifier considérablement la conception web basée sur des thèmes réutilisables et modulaires.</p>
								<p>J'ai également supervisé la conception du site internet de présentation ainsi que la documentation.</p>
								<ul>
									<li>Web designer (participation au travail créatif).</li>
									<li>Développeur front-end junior (HTML5, CSS, Javscript dont React.js).</li>
								</ul>

								<p><small>Website : <a href="https://github.com/bootstrap-styled" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">bootstrap-styled</a></small></p>
								<MediaBoard>
									<figure>
										<div>
											<h4>Web designer</h4>
											<ul>
												<li>Création de l'identité visuelle (logotype, police, couleur, etc.).</li>
												<li>Création des contenus à utiliser sur le web (contenus et images du site internet et des réseaux sociaux).</li>
												<li>Création des maquettes du site internet (mobile first, responsive, UX design, etc.).</li>
											</ul>
										</div>				
										<p><Link to="/design#bs">En savoir plus</Link></p>				
									</figure>
									<figure>
										<img src={titleBs} alt="Badge d'entête Bootstrap-styled." />
										<figcaption>Badge d'entête Bootstrap-styled.</figcaption>
									</figure>
									<figure>
										<img src={badgeBs} alt="Badge Bootstrap-styled." />
										<figcaption>Badge Bootstrap-styled.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Développeur front-end junior</h4>
											<ul>
												<li>Création des maquettes du site internet (mobile first, responsive, UX design, etc.).</li>
												<li>Développement du site internet (développement utilisant HTML5, CSS3, JS, etc.).</li>
											</ul>
										</div>							
										<p><Link to="/web#bs">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={siteHomeBs} alt="Site internet Bootstrap-styled." />
										<figcaption>Site internet Bootstrap-styled.</figcaption>
									</figure>
									<figure>
										<img src={readmeBs} alt="Documentation Bootstrap-styled." />
										<figcaption>Documentation Bootstrap-styled.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3>The Bubble Day</h3>
							<p className="media-date">2014 - 2016</p>
							<p>Après la première édition réalisée en 2014 avec l'agence étudiante Have A Dream, je suis ensuite devenu freelance sur les futures éditions (2015 - 2016).</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>J'étais le chef de projet digital et devais superviser les graphistes afin d'adapter efficacement les contenus (textes, photos, vidéos) sur le site internet et ses réseaux sociaux.</p>
								<ul>
									<li>Web designer (participation au travail créatif).</li>
									<li>Webmaster et développeur du site internet de l'évènement.</li>
									<li>Management de l'équipe créative et marketing.</li>
								</ul>
								<p><small>Website : Site fermé</small></p>
								<MediaBoard>
									<figure>
										<div>
											<h4>Webmaster et développeur Wordpress</h4>
											<ul>
												<li>Création des maquettes du site internet (mobile first, responsive, UX design, etc.).</li>
												<li>Développement du site internet (développement CMS avec Wordpress utilisant également HTML, CSS, JS, etc.).</li>
											</ul>
										</div>
										<p><Link to="/web#tbd">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={identityTbdLogo} alt="Logo du site internet The Bubble Day." />
										<figcaption>Logo du site internet The Bubble Day.</figcaption>
									</figure>
									<figure>
										<img src={siteTbd} alt="Site internet The Bubble Day." />
										<figcaption>Site internet The Bubble Day.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Web designer</h4>
											<ul>
												<li>Participation à la création de l'identité visuelle (logotype, police, couleur, etc.).</li>
												<li>Création des contenus à utiliser sur le web (contenus et images du site internet et des réseaux sociaux).</li>
											</ul>
										</div>
										<p><Link to="/design#tbd">En savoir plus</Link></p>	
									</figure>
									<figure>
										<img src={logoTbd} alt="The Bubble Day." />
										<figcaption>The Bubble Day.</figcaption>
									</figure>
									<figure>
										<img src={identityTbdPhoto1} alt="The Bubble Day." />
										<figcaption>The Bubble Day.</figcaption>
									</figure>
									<figure>
										<img src={identityTbdWeb1} alt="The Bubble Day." />
										<figcaption>The Bubble Day.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Responsable communication digitale</h4>
											<ul>
												<li>Définition de la stratégie de communication digitale (inbound marketing, référencement, réseaux sociaux, etc.).</li>
												<li>Élaboration et mise en place du community management (stratégie de publication et d'animation des réseaux sociaux).</li>
											</ul>
										</div>							
										<p><Link to="/digital-marketing#tbd">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={fbTbd} alt="Page Facebook The Bubble Day." />
										<figcaption>Page Facebook The Bubble Day.</figcaption>
									</figure>
									<figure>
										<img src={twitterTbd} alt="Page Twitter The Bubble Day." />
										<figcaption>Page Twitter The Bubble Day.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3>Agence Symbol</h3>
							<p className="media-date">2011 - 2015</p>
							<p>J'ai travaillé en Alternance dans une agence de communication spécialisée dans la communication des franchises et des réseaux.</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>J'étais le chef de projet digital et devais superviser les graphistes afin d'adapter efficacement les contenus (textes, photos, vidéos) sur le site internet et ses réseaux sociaux dont j'avais la charge.</p>
								<ul>
									<li>Chef de publicité</li>
									<li>Webmaster et développeur du site internet de l'évènement.</li>
									<li>Management du community manager.</li>
									<li>Web designer (participation au travail créatif).</li>
								</ul>
								<p><small>Website : <a href="http://www.symbol-com.fr/" alt="Site internet Agence Symbol" target="_blank" rel="noopener noreferrer">symbol-com.fr</a></small></p>
								<MediaBoard>
									<figure>
										<div>
											<h4>Webmaster et développeur Wordpress</h4>
											<ul>
												<li>Création des maquettes du site internet (mobile first, responsive, UX design, etc.).</li>
												<li>Développement du site internet (développement CMS avec Wordpress utilisant également HTML, CSS, JS, etc.).</li>
											</ul>
										</div>
										<p><Link to="/web#symbol">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={siteSymbol} alt="Site internet de l'agence Symbol." />
										<figcaption>Site internet de l'agence Symbol.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Responsable communication digitale</h4>
											<ul>
												<li>Définition de la stratégie de communication digitale (inbound marketing, référencement, réseaux sociaux, etc.).</li>
												<li>Élaboration et mise en place du community management (stratégie de publication et d'animation des réseaux sociaux).</li>
											</ul>
										</div>
										<p><Link to="/digital-marketing#symbol">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={linkedinSymbol} alt="Page Linkedin de l'agence Symbol." />
										<figcaption>Page Linkedin de l'agence Symbol.</figcaption>
									</figure>
									<figure>
										<img src={twitterSymbol} alt="Page Twitter de l'agence Symbol." />
										<figcaption>Page Twitter de l'agence Symbol.</figcaption>
									</figure>
									<figure>
										<img src={smoInvitationSymbol} alt="Community management L'Invitation, client de l'agence Symbol." />
										<figcaption>Twitter Symbol.</figcaption>
									</figure>
									<figure>
										<img src={smoActuFranchiseSymbol} alt="Community management Actu Franchise, client de l'agence Symbol." />
										<figcaption>Community management Actu Franchise, marque blanche de l'agence Symbol.</figcaption>
									</figure>
								</MediaBoard>
								<MediaBoard>
									<figure>
										<div>
											<h4>Apprenti Web designer</h4>
											<ul>
												<li>Création des contenus à utiliser sur le web (contenus et images du site internet et des réseaux sociaux).</li>
											</ul>
										</div>
										<p><Link to="/design#linvitation">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={ActuFranchiseSymbol} alt="Logo Actu Franchise, marque blanche de l'agence Symbol." />
										<figcaption>Logo Actu Franchise, marque blanche de l'agence Symbol.</figcaption>
									</figure>
									<figure>
										<img src={paoGammeBaieSymbol} alt="Contenu web pour Gamme Baie, client de l'agence Symbol." />
										<figcaption>Contenu web pour Gamme Baie, client de l'agence Symbol.</figcaption>
									</figure>

									<figure>
										<div>
											<h4>Chef de publicité</h4>
											<ul>
												<li>Mise en place de processus opérationnels (engagement Qualité).</li>										
												<li>Prospection de nouveaux clients.</li>
												<li>Interface entre le client et l'équipe créative (réception des demandes client).</li>
											</ul>
										</div>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3>AchatDansMaVille.com</h3>
							<p className="media-date">2010 - 2011</p>
							<p>J'ai travaillé en Alternance dans une start-up proposant des bons de réductions pour ses clients BtoC tout en prospectant de nouveaux clients BtoB afin de proposer toujours plus d'offres.</p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<h4>Ce que j'ai accompli :</h4>
								<p>J'étais conseillé commercial et suis rapidement devenu l'assistant du chef de projet digital afin de superviser les graphistes pour adapter efficacement les contenus (textes, photos, vidéos) sur le blog et les réseaux sociaux dont je partageais la charge avec un chef de projet confirmé.</p>
								<ul>
									<li>Responsable commercial</li>
									<li>Assistant chef de projet digital</li>
								</ul>
								<p><small>Website : Site fermé</small></p>
								<MediaBoard>
									<figure>
										<div>
											<h4>Assistant chef de projet digital</h4>
											<ul>
												<li>Création des contenus à utiliser sur le web (contenus et images du blog et des réseaux sociaux).</li>
											</ul>
										</div>
										<p><Link to="/digital-marketing#admv">En savoir plus</Link></p>
									</figure>
									<figure>
										<img src={admvSite} alt="Site internet AchatDansMaVille.com." />
										<figcaption>Site internet AchatDansMaVille.com.</figcaption>
									</figure>
									<figure>
										<img src={admvLogo} alt="Logo AchatDansMaVille.com." />
										<figcaption>Logo AchatDansMaVille.com.</figcaption>
									</figure>
									<figure>
										<div>
											<h4>Responsable commercial</h4>
											<ul>
												<li>Mise en place de processus opérationnels (engagement Qualité).</li>										
												<li>Prospection de nouveaux clients.</li>
												<li>Interface entre le client et les équipes créative et technique (réception des demandes client).</li>
											</ul>
										</div>
									</figure>
								</MediaBoard>
							</Collapse>
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
