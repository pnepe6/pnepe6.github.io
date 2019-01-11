import React, { Component } from 'react';
import smoActuFranchise from '../../../static/02_web_marketing-actu-franchise.jpg';
import smoInvitation from '../../../static/02_web_marketing-linvitation.jpg';
import seoInvitation from '../../../static/02_web_marketing-invitation.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
import siteSb from '../../../static/02_web_website-sb.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import symbolFacebook from '../../../static/facebook-symbol.png';
import symbolLinkedin from '../../../static/linkedin-symbol.png';
import symbolTwitter from '../../../static/twitter_symbol.png';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Digital extends Component {
	state = {
		tabs: 'SMO',
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
					<h1>DIGITAL MARKET­­­­ING</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Une vrai passion depuis la mise en ligne de on premier site internet que je me suis empréssé de vouloir faire apparaitre en première position des moteurs de recherches Google, Bing, Yahoo et maintenant Alexa d'Amazon!</strong></p>
					<p>En plus de ma spécialisation en marketing digital suivi lors de mes études j'ai très vite élargi mes compétences afin de pouvoir mettre en place de véritables stratégies digitales à la fois pour le référencement, l'animation des médias sociaux et la création d'e-Réputation.</p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "SMO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SMO')}
                        onTouch={() => this.onTabClick('SMO')}
					  >
					  	SMO
					  </button>
					  <button
					  	className={`tablinks ${tabs === "SEO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEO')}
                        onTouch={() => this.onTabClick('SEO')}
					  >
					  	SEO
					  </button>
					</div>
					<div id="SEO" className={`tabcontent ${tabs === "SEO" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Search Engine Optimisation</h2>
							<MediaBoard>
								<figure>
							   		<div>
								   		<h4>Référencement Agence Symbol</h4>
							   		</div>
									<img src={siteSymbol} alt="Strategie SEO du site internet symbol-com.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet www.symbol-com.fr specialisé dans la communication des franchises et réseaux.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>agence symbol</li>
										<li>communication franchise</li>
										<li>communication franchise et réseau</li>
										<li>communication des franchises et réseaux</li>
										<li>etc...</li>
									</ul>
									<p><a href="http://www.positeo.com/check-position/?q=communication+franchise&u=http%3A//www.symbol-com.fr/" alt="Test position SEO du site internet: www.symbol-com.fr" target="_blank" rel="noopener noreferrer">Test position SEO</a></p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Social Buster</h4>
							   		</div>
									<img src={siteSb} alt="Strategie SEO du site internet social-buster.fr" />
									<figcaption>Stratégie SEO et référencement naturel du site internet social-buster.fr portant sur l'actualité des réseaux sociaux.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>actualité des réseaux sociaux</li>
										<li>actu réseaux sociaux</li>
										<li>blog social media</li>
										<li>etc...</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Comptoir des passages</h4>
							   		</div>
									<img src={siteComptoir} alt="Référencement naturel du site internet comptoir-des-passages.fr" />
									<figcaption>Référencement du site internet www.comptoir-des-passages.fr</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>bijouterie Boulogne Billancourt</li>
										<li>bijouterie 92100</li>
										<li>bijouterie paris</li>
										<li>vente or Boulogne Billancourt</li>
										<li>achat or Boulogne Billancourt</li>
										<li>vente argent Boulogne Billancourt</li>
										<li>achat argent Boulogne Billancourt</li>
										<li>etc...</li>
									</ul>
									<p>site fermé</p>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="SMO" className={`tabcontent ${tabs === "SMO" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Social Media Optimization</h2>
							<h3>Stratégie SMO Agence Symbol</h3>
							<p>Supervisé par le directeur de l'agence et en étroite relation avec l'équipe artistique j'ai créé et animé les réseaux sociaux de l'Agence avec l'objectif d'augmenter le nombre de prospects qualifiés (lead).</p>
							<ul>
								<li>Mise en place d'une stratégie digitale (Inbound Marketing)</li>
								<li>Création et animation des réseaux sociaux de l'agence: Linkedin, Facebook et Twitter</li>
								<li>Création de la marque blanche: Actu'Franchise.</li>
								<li>Création et management de contenu pour l'agence Symbol et son groupe Actu'Franchise.</li>
							</ul>
							<p><small>Website: <a href="http://www.symbol-com.fr/" rel="noopener noreferrer" target="_blank">www.symbol-com.fr</a></small></p>
							<MediaBoard>
							   	<figure>
							   		<div>
								   		<h4>Animation du groupe Linkedin Actu'Franchise</h4>
							   		</div>
									<img src={smoActuFranchise} alt="Social Media Actu Franchise" />
									<figcaption>Création et animation du groupe Actu Franchise sur Linkedin dans le cadre d'une campagne d'Inbound Marketing.</figcaption>
									<p><a href="https://www.linkedin.com/groups/4819095/" alt="Groupe Linkedin Actu'Franchise" target="_blank" rel="noopener noreferrer">Groupe Linkedin Actu'Franchise</a></p>
								</figure>
							   	<figure>
							   		<div>
								   		<h4>Animation de la page Linkedin de l'agence Symbol</h4>
							   		</div>
									<img src={symbolLinkedin} alt="Page Linkedin de l'agence Symbol" />
									<figcaption>Création et animation de la page Linkedin de l'agence Symbol.</figcaption>
									<p><a href="https://www.linkedin.com/company/agence-symbol/about/" alt="Groupe Linkedin agence Symbol" target="_blank" rel="noopener noreferrer">Page Linkedin agence Symbol</a></p>
								</figure>
							   	<figure>
							   		<div>
								   		<h4>Animation de la page Facebook de l'agence Symbol</h4>
							   		</div>
									<img src={symbolFacebook} alt="Page facebook de l'agence Symbol" />
									<figcaption>Création et animation de la page Facebook de l'agence Symbol.</figcaption>
									<p><a href="https://www.facebook.com/Agence.Symbol/" alt="Page Facebook agence Symbol" target="_blank" rel="noopener noreferrer">Page Facebook agence Symbol</a></p>
								</figure>
							   	<figure>
							   		<div>
								   		<h4>Animation de la page Twitter de l'agence Symbol</h4>
							   		</div>
									<img src={symbolTwitter} alt="Page Twitter de l'agence Symbol" />
									<figcaption>Création et animation de la page Twitter de l'agence Symbol.</figcaption>
									<p><a href="https://twitter.com/AgenceSymbol" alt="Page Twitter agence Symbol" target="_blank" rel="noopener noreferrer">Page Twitter agence Symbol</a></p>
								</figure>
							</MediaBoard>
							<h3>Stratégie SMO L'Invitation</h3>
							<p>En collaboration avec l'équipe marketing, j'ai mis en place une stratégie de management des réseaux sociaux de la franchise L'Invitation avec l'objectif d'augmenter le nombre de prospects qualifiés (lead) pour la tête de réseau (BtoB) et ses franchisés (BtC).</p>
							<ul>
								<li>Création et animation de la page Facebook de la tête de franchise.</li>
								<li>Création et animation de la page Facebook des franchisés.</li>
							</ul>
							<p><small>Website: <a href="http://www.symbol-com.fr/" rel="noopener noreferrer" target="_blank">www.symbol-com.fr</a></small></p>
							<MediaBoard>
							   	<figure>
							   		<div>
								   		<h4>Animation du réseau sur Facebook</h4>
							   		</div>
									<img src={seoInvitation} alt="Social Media L'Invitation" />
									<figcaption>Animation des points de vente du réseau L'Inivitation.</figcaption>
									<p><a href="https://www.facebook.com/LInvitation-780068835411087/?eid=ARAY2o6eA9jNpiuc9-we4GPSl2IJ6sjrMjYnTV1aAc7kBkmy8QfKALim_3HigBa1CfrKHgxyRgj4Yjrg" alt="Page Facebook de L'Invitation" target="_blank" rel="noopener noreferrer">Page Facebook L'Invitation</a></p>
								</figure>
							   	<figure>
							   		<div>
								   		<h4>Community management de la tête de réseau L'Invitation</h4>
							   		</div>
									<img src={smoInvitation} alt="Social Media L'Invitation" />
									<figcaption>Management du réseau L'Invitation sur Facebook.</figcaption>
									<p><a href="https://www.facebook.com/LInvitation-780068835411087/?eid=ARAY2o6eA9jNpiuc9-we4GPSl2IJ6sjrMjYnTV1aAc7kBkmy8QfKALim_3HigBa1CfrKHgxyRgj4Yjrg" alt="Page Facebook de L'Invitation" target="_blank" rel="noopener noreferrer">Page Facebook L'Invitation</a></p>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
				</Tabs>
			</div>
		);
	};
};

export default Digital;
