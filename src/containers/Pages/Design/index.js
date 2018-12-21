import React, { Component } from 'react';
import logoAbstraack from '../../../static/01_design_agd-abstrack-logo.jpg';
import logoComptoir from '../../../static/01_design_agd-comptoir-logo.jpg';
import logoFbi from '../../../static/01_design_agd-fbi-logo.jpg';
import logoHad from '../../../static/01_design_agd-had-logo.jpg';
import logoNeib from '../../../static/01_design_agd-neib-logo.jpg';
import logoPap from '../../../static/01_design_agd-pap-logo.jpg';
import logoSb from '../../../static/01_design_agd-sb-logo.jpg';
import logoSlm from '../../../static/01_design_agd-slm-logo.jpg';
import logoTictactu from '../../../static/01_design_agd-tictactu-logo.jpg';
import logoYeutech from '../../../static/01_design-logo_yeutech.png';
import logoScalibri from '../../../static/logo-scalibri.png';
import logoNewmanity from '../../../static/logo-newmanity.png';
import logoStartImpulse from '../../../static/logo-start-impulse.png';
import paoGammeBaie from '../../../static/01_design_agd-gamme-baie-pao.jpg';
import paoComptoir from '../../../static/01_design_agd-comptoir-pao.jpg';
import paoStocker from '../../../static/01_design_agd-stocker-pao.jpg';
import paoHachette1 from '../../../static/01_design_pao-hachette-2.jpg';
import paoHachette from '../../../static/01_design_pao-hachette.jpg';
import paoInsight from '../../../static/01_design_pao-insight.jpg';
import paoLinvitation from '../../../static/01_design_pao-linvitation.jpg';
import paoMobilAzur from '../../../static/01_design_pao-mobil-azur.jpg';
import identityYeutechGuideline from '../../../static/identity-yeutech-guideline.jpg';
import identityYeutechBadge from '../../../static/identity-yeutech-badge.png';
import identityYeutechFavicon from '../../../static/identity-yeutech-favicon.png';
import identityYeutechGoogle from '../../../static/identity-yeutech-google.jpg';
import identityYeutechVisitCard from '../../../static/identity-yeutech-visit-card.png';
import identityAbstraackFlower from '../../../static/identity-abstraack-flower.jpg';
import identityAbstraackFlower1 from '../../../static/identity-abstraack-flower-3.png';
import identityAbstraackFlowerPoster from '../../../static/identity-abstraack-flower-poster.png';
import identityAbstraackFlowerSocial from '../../../static/identity-abstraack-flower-social.jpg';
import identityLinvitationCard from '../../../static/identity-linvitation-card.png';
import identityLinvitationLogo from '../../../static/identity-linvitation-logo.jpg';
import identityLinvitationLogo1 from '../../../static/identity-linvitation-logo-1.jpg';
import identityLinvitationPackage from '../../../static/identity-linvitation-package.jpg';
import identityLinvitationPoster from '../../../static/identity-linvitation-poster.jpg';
import identityLinvitationPoster1 from '../../../static/identity-linvitation-poster-1.png';
import identityLinvitationPoster2 from '../../../static/identity-linvitation-poster-2.png';
import identityLinvitationPromotion from '../../../static/identity-linvitation-promotion.jpg';
import identityLinvitationWeb from '../../../static/identity-linvitation-website.jpg';
import logoTbd from '../../../static/01_design-logo_tbd.jpg';
import identityTbdLogo from '../../../static/identity-tbd-logo.png';
import identityTbdPhoto from '../../../static/identity-tbd-photo.jpg';
import identityTbdPhoto1 from '../../../static/identity-tbd-photo-1.jpg';
import identityTbdSocial from '../../../static/identity-tbd-social.jpg';
import identityTbdSocial2 from '../../../static/identity-tbd-social-2.jpg';
import identityTbdSocial3 from '../../../static/identity-tbd-social-3.jpg';
import identityTbdSocial4 from '../../../static/identity-tbd-social-4.jpg';
import identityTbdSocial5 from '../../../static/identity-tbd-social-5.jpg';
import identityTbdSocial6 from '../../../static/identity-tbd-social-6.jpg';
import identityTbdSocial7 from '../../../static/identity-tbd-social-7.jpg';
import identityTbdWeb2 from '../../../static/identity-tbd-web-1.jpg';
import identityTbdWeb1 from '../../../static/identity-tbd-web-2.jpg';
import identityTbdWeb from '../../../static/identity-tbd-web.jpg';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';

class Design extends Component {
	state = {
		tabs: 'LOGO',
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
					<h1>DESIGN GRAPHIQUE</h1>					
				</SectionTop>
				<div className="content-section">
					<p><strong>J'ai découvert le monde du design graphiques dans un agence de communication en 2011.</strong></p>
					<small>J'y ai travaillé en Alternance pendant 5 années en tant que commercial puis chef de publicité et j'ai suivi des formations afin de maîtriser la suite logicielle Adobe dédiée au Design graphique: Photoshop, InDesign et Illustrator.</small>
				</div>
				<Tabs>
					<div className="tab">
					  <button className="tablinks" onClick={() => this.onTabClick('LOGO')}>LOGOTYPE</button>
					  <button className="tablinks" onClick={() => this.onTabClick('PRINT')}>PRINT</button>
					  <button className="tablinks" onClick={() => this.onTabClick('IDENTITY')}>IDENTITE VISUELLE</button>
					</div>

					<div id="LOGO" className={`tabcontent ${tabs === "LOGO" ? 'show' : ''}`}>
						<h2>Création de Logo:</h2>
						<div id="columns">
							<figure>
								<img src={logoAbstraack} alt="Logo Abstraack" />
								<figcaption>ABSTRAACK, agence évènementielle. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={logoNewmanity} alt="Logo Abstraack" />
								<figcaption>NewManity, aagence conseil en transformation digitale. Saigon</figcaption>
							</figure>
							<figure>
								<img src={logoHad} alt="Logo Have a Dream" />
								<figcaption>Have a Dream, Evènementiel Sportif. Paris</figcaption>
							</figure>
						   	<figure>
								<img width="10" src={logoPap} alt="Logo Plug & Play" />
								<figcaption>Plug & Play. Enceinte à plugguer sur tout instrument éléctronic et electro-acoustique. Paris.</figcaption>
							</figure>
							<figure>
								<img src={logoSb} alt="Logo Social Buster" />
								<figcaption>Social Buster, Blog sur les Médias Sociaux. Paris.</figcaption>
							</figure>
							<figure>
								<img src={logoSlm} alt="Logo Sans les Mains" />
								<figcaption>Sans les Mains, start-up agence digitale 360°. Paris.</figcaption>
							</figure>
						</div>
						<div id="columns">
							<figure>
								<img src={logoScalibri} alt="Logo Scalibri" />
								<figcaption>Scalibri, Kopaxgroup Software Factory. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={logoStartImpulse} alt="Logo Start-Impulse" />
								<figcaption>Start-Impulse, incubateur de start-up.</figcaption>
							</figure>
							<figure>
								<img src={logoYeutech} alt="Logo Abstraack" />
								<figcaption>Yeutech, software factory. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={logoComptoir} alt="Logo Comptoir des Passages" />
								<figcaption>Comptoir des Passages, Bijouterie. Meudon.</figcaption>
							</figure>
							<figure>
								<img src={logoFbi} alt="Logo Food & Baverage Investigation" />
								<figcaption>Food & Baverage Investigation, Blog étudiant. Paris.</figcaption>
							</figure>
						   	<figure>
								<img src={logoNeib} alt="Logo Neib" />
								<figcaption>Neib, l'application des voisins. Paris</figcaption>
							</figure>
							<figure>
								<img src={logoTictactu} alt="Tictactu" />
								<figcaption>Tictactu, Blog de l'école du Pôle Paris Alternance (Réseau GES). Paris.</figcaption>
							</figure>
						</div>
					</div>
					<div id="PRINT" className={`tabcontent ${tabs === "PRINT" ? 'show' : ''}`}>
						<h2>Réalisation d'outils promotionnels:</h2>
						<div id="columns">
							<figure>
								<img src={paoStocker} alt="Affiche film Stocker." />
								<figcaption>Réalisation d'une affiche pour un concours tenu par l'équipe de promotion du film Stocker.</figcaption>
							</figure>
							<figure>
								<img src={paoHachette1} alt="Catalogue Hachette livres" />
								<figcaption>Réalisation catalogue Hachette livres.</figcaption>
							</figure>
							<figure>
								<img src={paoHachette} alt="Catalogue Hachette livres" />
								<figcaption>Réalisation catalogue Hachette livres.</figcaption>
							</figure>
							<figure>
								<img src={paoGammeBaie} alt="Affiches Gammes Baies" />
								<figcaption>Réalisation d'une série d'affiche promotionnelle pour le réseau de franchise Gamme Baie.</figcaption>
							</figure>
							<figure>
								<img src={paoInsight} alt="Catalogue Insight" />
								<figcaption>Réalisation catalogue Insight.</figcaption>
							</figure>
							<figure>
								<img src={paoLinvitation} alt="Conception magazine pour L'Invitation." />
								<figcaption>ABSTRAACK, agence évènementielle. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={paoMobilAzur} alt="Affiche Mobil Azur" />
								<figcaption>Réalisation d'une affiche pour Mobile Azure.</figcaption>
							</figure>
							<figure>
								<img src={paoComptoir} alt="Affiche Comptoir des passages" />
								<figcaption>Affiche Comptoir des Passages, bijouterie à Meudon.</figcaption>
							</figure>
						</div>
					</div>
					<div id="IDENTITY" className={`tabcontent ${tabs === "IDENTITY" ? 'show' : ''}`}>
						<h2>Réalisation d'identitées visuelles:</h2>
						<div id="columns">
							<figure>
								<img src={logoYeutech} alt="Logo Abstraack" />
								<figcaption>Yeutech, software factory. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={identityYeutechVisitCard} alt="Cartes de visites Yeutech" />
								<figcaption>Cartes de visites Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityYeutechBadge} alt="Badge Yeutech" />
								<figcaption>Badge promotionnel pour les projets liés à Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityYeutechFavicon} alt="Favicon Yeutech" />
								<figcaption>Favicon Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityYeutechGoogle} alt="Arrière plan réseaux sociaux" />
								<figcaption>Arrière plan réseaux sociaux @Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityYeutechGuideline} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
						</div>
						<div id="columns">
							<figure>
								<img src={logoTbd} alt="Logo Abstraack" />
								<figcaption>Yeutech, software factory. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdLogo} alt="Cartes de visites Yeutech" />
								<figcaption>Cartes de visites Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdSocial} alt="Arrière plan réseaux sociaux" />
								<figcaption>Arrière plan réseaux sociaux @Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdPhoto} alt="Badge Yeutech" />
								<figcaption>Badge promotionnel pour les projets liés à Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdPhoto1} alt="Favicon Yeutech" />
								<figcaption>Favicon Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdSocial4} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdWeb1} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdSocial7} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdWeb2} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
							<figure>
								<img src={identityTbdWeb} alt="Charte graphique web Yeutech" />
								<figcaption>Charte graphique web Yeutech.</figcaption>
							</figure>
						</div>
						<div id="columns">
							<figure>
								<img src={identityLinvitationLogo1} alt="Logo L'Invitation" />
								<figcaption>Logo L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationCard} alt="Carte de fidélité L'Invitation" />
								<figcaption>Carte de fidélité L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationLogo} alt="Logo L'Invitation" />
								<figcaption>Logo décliné de L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationPackage} alt="Coffret L'Invitation" />
								<figcaption>Coffret L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationPoster} alt="Affiche L'Invitation" />
								<figcaption>Affiche L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationPoster1} alt="Affiche L'Invitation" />
								<figcaption>Affiche L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationPoster2} alt="Affiche L'Invitation" />
								<figcaption>Affiche L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationPromotion} alt="Promotion L'Invitation" />
								<figcaption>Promotion L'Invitation.</figcaption>
							</figure>
							<figure>
								<img src={identityLinvitationWeb} alt="Site internet L'Invitation" />
								<figcaption>Site internet L'Invitation.</figcaption>
							</figure>
						</div>
						<div id="columns">
							<figure>
								<img src={identityAbstraackFlowerSocial} alt="Affiche Saigon Flower Power." />
								<figcaption>Affiche sur les réseaux sociaux, Saigon Flower Power.</figcaption>
							</figure>
							<figure>
								<img src={logoAbstraack} alt="Logo Abstraack" />
								<figcaption>ABSTRAACK, agence évènementielle. Saigon.</figcaption>
							</figure>
							<figure>
								<img src={identityAbstraackFlower} alt="Flyers Saigon Flower Power" />
								<figcaption>Flyers Saigon Flower Power.</figcaption>
							</figure>
							<figure>
								<img src={identityAbstraackFlower1} alt="Flyers Saigon Flower Power" />
								<figcaption>Flyers Saigon Flower Power..</figcaption>
							</figure>
							<figure>
								<img src={identityAbstraackFlowerPoster} alt="Affiche Saigon Flower Power" />
								<figcaption>Affiche Saigon Flower Power.</figcaption>
							</figure>
						</div>
					</div>
				</Tabs>
			</div>
		);
	};
};

export default Design;
