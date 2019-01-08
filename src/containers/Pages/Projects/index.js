import React, { Component } from 'react';
import logoBs from '../../../static/01_design-logo_bs.png';
import logoSb from '../../../static/01_design_agd-sb-logo.jpg';
import logoAbstraack from '../../../static/01_design_agd-abstrack-logo.jpg';
import logoHad from '../../../static/01_design_agd-had-logo.jpg';
import logoSlm from '../../../static/01_design_agd-slm-logo.jpg';
import logoCcg from '../../../static/01_design-logo_citizen-commitment.png';
import logoTbd from '../../../static/01_design-logo_tbd.jpg';
import logoKopaxgroup from '../../../static/01_design-logo_kopaxgroup.png';
import logoYeutech from '../../../static/01_design-logo_yeutech.png';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Projects extends Component {
	state = {
		tabs: 'EVENT',
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
					<p>A un rythme d'un projet par année j'arrive ainsi à occuper mes weekend et mes temps libres tout en rencontrant de nouvelles personnes, futurs amis, collaborateur ou simple connaissance.</p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "EVENT" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('EVENT')}
                        onTouchEnd={() => this.onTabClick('EVENT')}
					  >
					  	EVENEMENTIELS
					  </button>
					  <button
					  	className={`tablinks ${tabs === "DIGITAL" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('DIGITAL')}
                        onTouchEnd={() => this.onTabClick('DIGITAL')}
					  >
					  	WEB
					  </button>
					  <button
					  	className={`tablinks ${tabs === "STARTUP" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('STARTUP')}
                        onTouchEnd={() => this.onTabClick('STARTUP')}
					  >
					  	ENTREPRENARIAT
					  </button>
					</div>

					<div id="EVENT" className={`tabcontent ${tabs === "EVENT" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Voici lers projets auxquels j'ai participé:</h2>
							<MediaBoard>
							   	<figure>
									<img src={logoAbstraack} alt="Agence Evenementielle ABSTRAACK" />
									<figcaption>Agence Evenementielle, ABSTRAACK (Evenement musicaux et artistique à Saigon.</figcaption>
								</figure>
								<figure>
									<img src={logoHad} alt="Agence Evenementielle Have A Dream" />
									<figcaption>Agence Evenementielle, Have A Dream (Evenement Sportif à Paris et en IDF).</figcaption>
								</figure>
							   	<figure>
									<img src={logoCcg} alt="Evenement Sportif - Citizen Commitment Game" />
									<figcaption>Evenement Sportif - Citizen Commitment Game (Team buiding organisé par la Société Génerale à Nantes).</figcaption>
								</figure>
							   	<figure>
									<img src={logoTbd} alt="Evenement Sportif - The Bubble Day" />
									<figcaption>Evenement Sportif - The Bubble Day (Course Solidaire à Paris - Marseille).</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="DIGITAL" className={`tabcontent ${tabs === "DIGITAL" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Voici lers projets auxquels j'ai participé:</h2>
							<MediaBoard>
							   	<figure>
									<img src={logoYeutech} alt="Usine Digitale - Yeutech" />
									<figcaption>Usine Digitale - Yeutech (basée au Vietnam).</figcaption>
								</figure>
							   	<figure>
									<img src={logoKopaxgroup} alt="Développement logiciel - Kopaxgroup" />
									<figcaption>Développement logiciel - Kopaxgroup (basée à Hong-Kong).</figcaption>
								</figure>
								<figure>
									<img src={logoSlm} alt="Agence Digitale SLM" />
									<figcaption>Agence Digitale SLM (Sans les Mains).</figcaption>
								</figure>
							  	<figure>
									<img src={logoSb} alt="Blog Social Buster" />
									<figcaption>Blog: social-buster.fr</figcaption>
								</figure>
							  	<figure>
									<img src={logoBs} alt="Bootstrap-Styled" />
									<figcaption>Technologie Open Source, Bootstrap-styled.</figcaption>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>

					<div id="STARTUP" className={`tabcontent ${tabs === "STARTUP" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Voici lers projets auxquels j'ai participé:</h2>
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
				</Tabs>
			</div>
		);
	};
};

export default Projects;
