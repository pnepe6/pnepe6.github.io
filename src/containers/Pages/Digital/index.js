import React, { Component } from 'react';
import smoActuFranchise from '../../../static/02_web_marketing-actu-franchise.jpg';
import smoInvitation from '../../../static/02_web_marketing-linvitation.jpg';
import seoInvitation from '../../../static/02_web_marketing-invitation.jpg';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Digital extends Component {
	state = {
		tabs: 'SEO',
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
					  	className={`tablinks ${tabs === "SEO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEO')}
                        onTouchEnd={() => this.onTabClick('SEO')}
					  >
					  	SEO
					  </button>
					  <button
					  	className={`tablinks ${tabs === "SEA" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEA')}
                        onTouchEnd={() => this.onTabClick('SEA')}
					  >
					  	SEA
					  </button>
					  <button
					  	className={`tablinks ${tabs === "SMO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SMO')}
                        onTouchEnd={() => this.onTabClick('SMO')}
					  >
					  	SMO
					  </button>
					</div>
					<div id="SEO" className={`tabcontent ${tabs === "SEO" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Search Engine Optimisation</h2>
							<MediaBoard>
								<figure>
									<img src={seoInvitation} alt="Strategie SEO du site internet symbol-com.fr" />
									<figcaption>Stratégie SEO et référencement naturel du site internet www.symbol-com.fr specialisé dans la communication des franchises et réseaux.</figcaption>
								</figure>
								<figure>
									<img src={seoInvitation} alt="Strategie SEO du site internet social-buster.fr" />
									<figcaption>Blog Social Media: www.social-buster.fr</figcaption>
								</figure>
								<figure>
									<img src={seoInvitation} alt="Référencement naturel du site internet comptoir-des-passages.fr" />
									<figcaption>Référencement du site internet www.comptoir-des-passages.fr</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="SEA" className={`tabcontent ${tabs === "SEA" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Search Egine Advertisement</h2>
							<MediaBoard>
								<figure>
									<img src={seoInvitation} alt="Strategie SEA du site internet symbol-com.fr" />
									<figcaption>Campagne et stratégie SEA du site internet www.symbol-com.fr</figcaption>
								</figure>
								<figure>
									<img src={seoInvitation} alt="Strategie SEA du site internet social-buster.fr" />
									<figcaption>Campagne et stratégie SEA du site internet www.linvitation.fr</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="SMO" className={`tabcontent ${tabs === "SMO" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Social Media Optimization</h2>
							<MediaBoard>
							   	<figure>
									<img src={smoActuFranchise} alt="Social Media Actu Franchise" />
									<figcaption>Management des réseaux sociaux pour Actu Franchise mené sur Linkedin, Facebook et Twitter.</figcaption>
								</figure>
							   	<figure>
									<img src={smoInvitation} alt="Social Media L'Invitation" />
									<figcaption>Management des réseaux sociaux de LInvitation sur Facebook.</figcaption>
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
