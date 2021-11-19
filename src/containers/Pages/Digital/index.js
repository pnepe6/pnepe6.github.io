import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Row, Col } from '@bootstrap-styled/v4';

// IMG
import rsYeutech from '../../../static/yeutech_rs-fb.png';
import fbTbd from '../../../static/rs-fb_tbd.png';
import twitterTbd from '../../../static/rs-twitter_tbd.png';
import identityTbdLogo from '../../../static/identity-tbd-logo.png';
import identityYeutechGoogle from '../../../static/identity-yeutech-google.jpg';
import smoActuFranchise from '../../../static/02_web_marketing-actu-franchise.jpg';
import smoInvitation from '../../../static/02_web_marketing-linvitation.jpg';
import seoInvitation from '../../../static/02_web_marketing-invitation.jpg';
import admvLogo from '../../../static/achatdansmaville-logo.jpg';
import admvSite from '../../../static/achatdansmaville-site.png';
import admvSite2 from '../../../static/achatdansmaville-site2.jpg';
import symbolFacebook from '../../../static/facebook-symbol.png';
import symbolLinkedin from '../../../static/linkedin-symbol.png';
import symbolTwitter from '../../../static/twitter_symbol.png';
import logoComptoir from '../../../static/01_design_agd-comptoir-logo.jpg';
import logoSb from '../../../static/01_design_agd-sb-logo.jpg';
import logoSymbol from '../../../static/logo-symbol.jpg';
import logoHad from '../../../static/01_design_agd-had-logo.jpg';
import logoTbd from '../../../static/01_design-logo_tbd.jpg';
import logoTickner from '../../../static/logo-tickner.jpg';
import logoAxenergie from '../../../static/logo-axenergie.jpg';
// IMG WEB
import badgeMs from '../../../static/badge-cloud-agd.png';
import badgeHtml from '../../../static/badge-html5.png';
import badgeCss from '../../../static/badge-css3.png';
import badgeJs from '../../../static/badge-js.png';
import badgeNode from '../../../static/badge-node-js.png';
import badgeReact from '../../../static/badge-react.png';
import badgeGit from '../../../static/badge-git.png';
import badgeWoocommerce from '../../../static/badge-woocommerce.png';
import badgeWordpress from '../../../static/badge-wordpress.png';
import badgePrestashop from '../../../static/badge-prestashop.png';
import badgeFrog from '../../../static/badge-frog.png';
import badgeSemrush from '../../../static/badge-semrush.png';
import badgeWoorank from '../../../static/badge-woorank.png';
import badgeSearchConsole from '../../../static/badge-search-console.png';
import badgeGoogleKeyword from '../../../static/badge-google-keyword.png';
import badgePagespeed from '../../../static/badge-pagespeed.png';
import badgeAnwser from '../../../static/badge-anwser.png';
import badgeTwitter from '../../../static/badge-twitter.png';
import badgeFacebook from '../../../static/badge-facebook.png';
import badgeInstagram from '../../../static/badge-instagram.png';
import badgeHootsuit from '../../../static/badge-hootsuit.png';
import badgeSocialmention from '../../../static/badge-socialmention.png';
import badgeTweetdeck from '../../../static/badge-tweetdeck.png';
import badgeGooglealert from '../../../static/badge-googlealert.png';
import badgeWoorise from '../../../static/badge-woorise.png';
import badgeMailchimp from '../../../static/badge-mailchimp.png';
import badgeRaflepress from '../../../static/badge-raflepress.png';
import badgeAt from '../../../static/badge-atinternet.png';
import badgeGa from '../../../static/badge-google-analytic.png';
import badgeGtm from '../../../static/badge-gtm.png';
import badgeTagco from '../../../static/badge-tagco.png';
import badgeTrustco from '../../../static/badge-trustco.png';
import badgeAbtasty from '../../../static/badge-abtasty.png';
import badgeKameleoon from '../../../static/badge-kameleoon.png';
import badgeHubspot from '../../../static/badge-hubspot.png';

import siteYeutech from '../../../static/02_web_website-yeutech.png';
import siteYeutechDoc from '../../../static/02_web_website-yeutech-doc.png';
import identityYeutechGuideline from '../../../static/identity-yeutech-guideline.jpg';
import wireframeDesktopYeutech from '../../../static/wireframe_yeutech-home.png';
import wireframeTabletYeutech from '../../../static/wireframe_yeutech-ipad.png';
import wireframeMobileYeutech from '../../../static/wireframe_yeutech-iphone.png';
import siteBs from '../../../static/02_web_website-bs.png';
import readmeBs from '../../../static/bs_readme-git.png';
import siteHomeBs from '../../../static/bs_site-home.png';
import siteTbd from '../../../static/02_web_website-tbd.jpg';
import paoGammeBaie from '../../../static/01_design_agd-gamme-baie-pao.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';

// COMPONENTS
import Page from '../../../components/Page';
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';
import Collapse from '../../../components/Collapse';


class Digital extends Component {
	state = {
		tabs: 'DATA',
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	};
	onTabClick = (tab) => {
		let tabItem = tab;
		this.setState({
			tabs: tabItem,
		})
	}
	render() {
		const { tabs } = this.state;
		return (
			<Page>
		        <Helmet>
            		<title>Digital</title>
        	  		<meta name="description" content="Portfolio des mes expériences en digital marketing incluant les stratégies de Search Engine Optimization." />
		        </Helmet>
				<SectionTop>
					<h1>DIGITAL</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Passionnée d'internet et expert en SEO, je maîtrise également la programmation qui sert mes compétences en Web Analyse et optimisation des données des sites internet dont j'ai la charge.</strong></p>
					<p>J'ai réussi à travailler sur les differents processus de production digitaux depuis le besoin marketing, la réalisation des maquettes, la conception web et le suivi web analytics.</p>
					<p style={{ paddingTop: "80px"}}><strong>Voici mes domaines de compétences :</strong></p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "DATA" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('DATA')}
                        onTouch={() => this.onTabClick('DATA')}
					  >
					  	DATA
					  </button>
					  <button
					  	className={`tablinks ${tabs === "SEO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEO')}
                        onTouch={() => this.onTabClick('SEO')}
					  >
					  	SEO
					  </button>
					  <button
					  	className={`tablinks ${tabs === "SMO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SMO')}
                        onTouch={() => this.onTabClick('SMO')}
					  >
					  	SEA/SMO
					  </button>
					  <button
					  	className={`tablinks ${tabs === "DEV" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('DEV')}
                        onTouch={() => this.onTabClick('DEV')}
					  >
					  	DEV
					  </button>
					</div>
					<div id="DATA" className={`tabcontent ${tabs === "DATA" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Collecte & Analyses de données web</h2>
							<h3>Mes outils</h3>
							<div style={{ padding: "20px", borderRadius: "30px", background: "#e8f4f4"}}>
								<Row>
									<Col>
										<p><strong>Web Analytics:</strong></p>
										<Row>
											<Col>
												<img width={120} src={badgeAt} alt="logo AT Internet" />
											</Col>
											<Col>
												<img width={120} src={badgeGa} alt="logo Google Analytics" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Tag & Privacy Management :</strong></p>
										<Row>
											<Col>
												<img width={120} src={badgeGtm} alt="logo GTM" />
											</Col>
											<Col>
												<img width={130} src={badgeTagco} alt="logo Tag Commander" />
											</Col>
											<Col>
												<img width={120} src={badgeTrustco} alt="logo Trust Commander" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>CRO et Optimisation :</strong></p>
										<Row>
											<Col>
												<img width={120} src={badgeHubspot} alt="logo Hub Spot" />
											</Col>
											<Col>
												<img width={120} src={badgeKameleoon} alt="logo Kameleoon" />
											</Col>
											<Col>
												<img width={120} style={{ paddingTop: "10px"}} src={badgeAbtasty} alt="Logo AB Tasty" />
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
							<h3>Mes expériences</h3>
						</SectionMedia>
						<SectionMedia>
						<h4>Gestion d'un portefeuille client chez Commanders Act</h4>
							<span className="media-date" style={{paddingTop: "20px"}}>2020 - 2022</span>
							<p>En charge de la collection des données ainsi que leur valorisation et leur optimisation dans le respect des règles RGPD.</p>
							<p><strong>Data collection :</strong></p>
							<ul>
								<li>Définition du datalayer.</li>
								<li>Création des plans de marquage.</li>
								<li>Intégration des codes de tracking analytics (GA, AT) et media (FB, TikTok...).</li>
							</ul>
							<p><strong>Data analytics :</strong></p>
							<ul>
								<li>Configuration et suivi des comptes client.</li>
								<li>Analyse ROPO (croisemment des données magasin et du site internet).</li>
								<li>Aide à l'analyse des conversions.</li>
							</ul>
						</SectionMedia>
					</div>
					<div id="SMO" className={`tabcontent ${tabs === "SMO" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Social Media Optimisation</h2>
							<h3>Mes outils</h3>
							<div style={{ padding: "20px", borderRadius: "30px", background: "#e8f4f4"}}>
								<Row>
									<Col>
										<p><strong>Outil de Monotoring :</strong></p>
										<Row>
											<Col>
												<img width={120} src={badgeHootsuit} alt="logo Hootsuite" />
											</Col>
											<Col>
												<img width={80} src={badgeTweetdeck} alt="logo TweetDeck" />
											</Col>
											<Col>
												<img width={140} src={badgeSocialmention} alt="logo Social mention" />
											</Col>
											<Col>
												<img width={100} src={badgeGooglealert} alt="logo Google Alert" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Emailing et Engagement :</strong></p>
										<Row>
											<Col>
												<img width={110} src={badgeMailchimp} alt="logo Mailchimp" />
											</Col>
											<Col>
												<img width={100} src={badgeWoorise} alt="logo Woorise" />
											</Col>
											<Col>
												<img width={140} src={badgeRaflepress} alt="logo Raflepress" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Réseaux Sociaux :</strong></p>
										<Row>
											<Col>
												<img width={80} src={badgeTwitter} alt="logo Twitter" />
											</Col>
											<Col>
												<img width={120} src={badgeFacebook} alt="logo Facebook" />
											</Col>
											<Col>
												<img width={80} style={{ paddingTop: "10px"}} src={badgeInstagram} alt="Logo Instagram" />
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
							<h3>Mes expériences</h3>
						</SectionMedia>
						<SectionMedia>
							<h4>Stratégie Digitale Yeutech</h4>
							<span className="media-date">2016 - 2018</span>
							<p>Définition de la stratégie de communication digitale et mise en place des processus et des outils de gestion du community management.</p>
							<p>Stratégie basée sur la diffusion de contenus (articles et vidéos) à partir du blog, et relayée sur les réseaux sociaux (Linkedin, Twitter, Github, Facebook) afin de générer du traffic qualifié sur le site.</p>
							<p><strong>Inbound marketing :</strong></p>
							<ul>
								<li>Création de contenu texte (rédaction d'articles de fond, livres blancs).</li>
								<li>Création de contenu vidéo (rédaction de script et scénario vidéo).</li>
							</ul>
							<p><strong>Social Media Optimization :</strong></p>
							<ul>
								<li>Mise en place des outils de gestion du community management (positionnement, planning excel des publications, registre excel des partenariats).</li>
								<li>Définition des processus de création et de publication des campagnes.</li>
								<li>Définition des processus de modération et d'interaction avec les prospects/clients.</li>
								<li>Ciblage des ambassadeurs pertinents et partenariat (netlinking).</li>
								<li>Définition des processus de mesure de l'audience et de la performance des actions engagées.</li>
							</ul>
							<p><small>Website : <a href="https://github.com/yeutech-lab" rel="noopener noreferrer" target="_blank">yeutech-lab.com</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={rsYeutech} alt="Page Facebook Yeutech." />
										<figcaption>Page Facebook Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={identityYeutechGoogle} alt="Arrière plan des profils sociaux de Yeutech." />
										<figcaption>Arrière plan des profils sociaux de Yeutech sur les réseaux en ligne.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h4 id="tbd" style={{ paddingTop: "150px"}}>Stratégie Digitale The Bubble Day</h4>
							<p className="media-date" style={{ paddingTop: "150px"}}>2014 - 2016</p>
							<p>Création des contenus (articles et vidéos) à diffuser sur le blog et les réseaux sociaux (Facebook et Twitter) afin de générer du trafic qualifié sur le site internet de l'évènement.</p>
							<p><strong>Social Media Optimization :</strong></p>
							<ul>
								<li>Mise en place des outils de gestion du community management (positionnement, planning excel des publications, registre excel des partenariats).</li>
								<li>Définition des processus de création et de publication des campagnes.</li>
								<li>Définition des processus de modération et d'interaction avec les prospects/clients.</li>
								<li>Ciblage des ambassadeurs pertinents et partenariat (netlinking).</li>
								<li>Définition des processus de mesure de l'audience et de la performance des actions engagées.</li>
							</ul>
							<p><small>Website : <a href="https://fr-fr.facebook.com/thebubbleday/" rel="noopener noreferrer" target="_blank">thebubbleday.com</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={identityTbdLogo} alt="Logo du site internet The Bubble Day." />
										<figcaption>Logo du site internet The Bubble Day.</figcaption>
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
							<h4 id="symbol" style={{ paddingTop: "150px"}}>Stratégie Digitale Agence Symbol</h4>
							<p className="media-date" style={{ paddingTop: "150px"}}>2011 - 2015</p>
							<p>Supervisé par le directeur de l'agence et en étroite relation avec l'équipe artistique, j'ai créé et animé les réseaux sociaux de l'Agence avec l'objectif d'augmenter le nombre de prospects qualifiés (lead).</p>
							<p><strong>Social Media Optimization :</strong></p>
							<ul>
								<li>Création et animation des réseaux sociaux de l'agence : Linkedin, Facebook et Twitter</li>
								<li>Création de la marque blanche : Actu'Franchise.</li>
								<li>Création et diffusion de contenu pour l'agence Symbol et sa marque blanche Actu'Franchise.</li>
							</ul>
							<p><small>Website : <a href="http://www.symbol-com.fr/" rel="noopener noreferrer" target="_blank">www.symbol-com.fr</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
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
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h4 style={{ paddingTop: "150px"}}>Stratégie Digitale L'Invitation (Client agence Symbol)</h4>
							<p className="media-date" style={{ paddingTop: "150px"}}>2012</p>
							<p>En collaboration avec l'équipe marketing, j'ai mis en place une stratégie de management des réseaux sociaux de la franchise L'Invitation avec l'objectif d'augmenter le nombre de prospects qualifiés (lead) pour la tête de réseau (BtoB) et ses franchisés (BtoC).</p>
							<ul>
								<li>Création et animation de la page Facebook de la tête de franchise.</li>
								<li>Création et animation de la page Facebook des franchisés.</li>
							</ul>
							<p><small>Website : <a href="http://www.symbol-com.fr/" rel="noopener noreferrer" target="_blank">www.symbol-com.fr</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
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
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h4 id="admv" style={{ paddingTop: "150px"}}>Stratégie Digitale AchatDansMaVille.com</h4>
							<p className="media-date" style={{ paddingTop: "150px"}}>2011</p>
							<p>Supervisé par le chef de projet digital, j'ai participé à la définition et à la mise en place d'une stratégie de communication online et offline.</p>
							<p><strong>Communication online :</strong></p>
							<ul>
								<li>Création d'un blog.</li>
								<li>Mise en place et suivie d'une stratégie d'échange de liens (netlinking).</li>
								<li>Optimisation technique du site internet.</li>
								<li>Mesure du traffic et analyse des KPI.</li>
							</ul>
							<p><strong>Communication offline :</strong></p>
							<ul>
								<li>Définition et mise en place d'une stratégie de street marketing.</li>
								<li>Relation presse.</li>
							</ul>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={admvSite} alt="Site internet AchatDansMaVille.com." />
										<figcaption>Site internet AchatDansMaVille.com.</figcaption>
									</figure>
									<figure>
										<img src={admvSite2} alt="Site internet AchatDansMaVille.com." />
										<figcaption>Site internet AchatDansMaVille.com.</figcaption>
									</figure>
									<figure>
										<img src={admvLogo} alt="Logo AchatDansMaVille.com." />
										<figcaption>Logo AchatDansMaVille.com.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
					</div>
					<div id="SEO" className={`tabcontent ${tabs === "SEO" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Search Engine Optimisation</h2>
							<h3>Mes outils:</h3>
							<div style={{ padding: "20px", borderRadius: "30px", background: "#e8f4f4"}}>
								<Row>
									<Col>
										<p><strong>Diagnostiques</strong></p>
										<Row>
											<Col>
												<img width={125} src={badgePagespeed} alt="badge Google Page Speed" />
											</Col>
											<Col>
												<img width={100} src={badgeFrog} alt="badge Screaming Frog " />
											</Col>
											<Col>
												<img width={120} src={badgeWoorank} alt="logo Woorank SE" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Mots-clés</strong></p>
										<Row>
											<Col>
												<img width={100} src={badgeSemrush} alt="badge SemRush" />
											</Col>
											<Col>
												<img width={150} src={badgeSearchConsole} alt="badge Google Search Console" />
											</Col>
											<Col>
												<img width={100} src={badgeGoogleKeyword} alt="badge Google Keyword" />
											</Col>
											<Col>
												<img width={140} src={badgeAnwser} alt="badge Anwser the public" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Performances</strong></p>
										<Row>
											<Col>
												<img width={60} src={badgeHtml} alt="badge html5" />
											</Col>
											<Col>
												<img width={50} style={{paddingTop: "10px"}} src={badgeJs} alt="badge js" />
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
							<h3>Mes expériences :</h3>
						</SectionMedia>
						<SectionMedia>
							<MediaBoard>
								<figure>
							   		<div>
								   		<h5>Référencement Agence Symbol</h5>
								   		<small>2012 à 2015</small>
							   		</div>
									<img src={logoSymbol} alt="Strategie SEO du site internet symbol-com.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet www.symbol-com.fr specialisé dans la communication des franchises et réseaux. Le site était en première position des recherches sur Google, Yahoo et Bing entre 2012 et 2015. </figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Optimisation des contenus du site internet.</li>
										<li>Optimisation technique du site internet.</li>
										<li>Partenariat et stratégie de lien (netlinking).</li>
										<li>Mesure du trafic et analyse des KPI.</li>
									</ul>
									<p><a href="http://www.positeo.com/check-position/?q=communication+franchise&u=http%3A//www.symbol-com.fr/" alt="Test position SEO du site internet: www.symbol-com.fr" target="_blank" rel="noopener noreferrer">Test position SEO</a></p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement The Bubble Day</h5>
								   		<small>2014 à 2016</small>
							   		</div>
									<img src={logoTbd} alt="Strategie SEO du site internet thebubbleday.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet thebubbleday.fr présentant la course solidaire du même nom.</figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Optimisation des contenus du site internet.</li>
										<li>Optimisation technique du site internet.</li>
										<li>Partenariat et stratégie de lien (netlinking).</li>
										<li>Mesure du trafic et analyse des KPI.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement Social Buster</h5>
								   		<small>2013</small>
							   		</div>
									<img src={logoSb} alt="Strategie SEO du site internet social-buster.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet social-buster.fr portant sur l'actualité des réseaux sociaux.</figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Optimisation des contenus du site internet.</li>
										<li>Optimisation technique du site internet.</li>
										<li>Partenariat et stratégie de lien (netlinking).</li>
										<li>Mesure du trafic et analyse des KPI.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement Comptoir des passages</h5>
								   		<small>2013</small>
							   		</div>
									<img src={logoComptoir} alt="Référencement naturel du site internet comptoir-des-passages.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Référencement du site internet www.comptoir-des-passages.fr</figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Recommndation sur l'optimisation des contenus du site internet.</li>
										<li>Recommndation sur l'optimisation technique du site internet.</li>
										<li>Recommndation sur les partenariat et stratégie de lien (netlinking).</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement Have A Dream</h5>
								   		<small>2014 à 2015</small>
							   		</div>
									<img src={logoHad} alt="Strategie SEO du site internet haveadream.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet haveadream.fr de l'agence évènementielle éponyme.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Optimisation des contenus du site internet.</li>
										<li>Optimisation technique du site internet.</li>
										<li>Partenariat et stratégie de lien (netlinking).</li>
										<li>Mesure du trafic et analyse des KPI.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement Tickner</h5>
								   		<small>2012</small>
							   		</div>
									<img src={logoTickner} alt="Strategie SEO du site internet tickner.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet tickner.fr, societé de construction bois.</figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Recommndation sur l'optimisation des contenus du site internet.</li>
										<li>Recommndation sur l'optimisation technique du site internet.</li>
										<li>Recommndation sur les partenariat et stratégie de lien (netlinking).</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h5>Référencement Axenergie</h5>
								   		<small>2012</small>
							   		</div>
									<img src={logoAxenergie} alt="Strategie SEO du site internet axenergie.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet axenergie.fr, réseau de chauffagistes indépendants.</figcaption>
									<figcaption><strong>Actions réalisées :</strong></figcaption>
									<ul>
										<li>Étude des mots clé recherchés et leurs volumes.</li>
										<li>Recommndation sur l'optimisation des contenus du site internet.</li>
										<li>Recommndation sur l'optimisation technique du site internet.</li>
										<li>Recommndation sur les partenariat et stratégie de lien (netlinking).</li>
									</ul>
									<p>site fermé</p>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
					<div id="DEV" className={`tabcontent ${tabs === "DEV" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Site internet CMS ou "from scratch"</h2>
							<h3>Mes outils:</h3>
							<div style={{ padding: "20px", borderRadius: "30px", background: "#e8f4f4"}}>
								<Row>
									<Col>
										<p><strong>Languages</strong></p>
										<Row>
											<Col>
												<img width={60} src={badgeHtml} alt="badge html5" />
											</Col>
											<Col>
												<img width={45} src={badgeCss} alt="badge css3" />
											</Col>
											<Col>
												<img width={50} style={{paddingTop: "10px"}} src={badgeJs} alt="badge js" />
											</Col>
											<Col>
												<img width={70} style={{paddingTop: "20px"}} src={badgeNode} alt="badge node.js" />
											</Col>
											<Col>
												<img width={90} style={{paddingTop: "20px"}} src={badgeReact} alt="badge react.js" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>Plateformes</strong></p>
										<Row>
											<Col>
												<img width={100} src={badgeMs} alt="badge Microsoft Azure Fondamentals" />
											</Col>
											<Col>
												<img style={{ "vertical-align": "top"}} width={80} src={badgeGit} alt="badge git" />
											</Col>
										</Row>
									</Col>
									<Col>
										<p><strong>CMS</strong></p>
										<Row>
											<Col>
												<img width={120} src={badgeWoocommerce} alt="logo CMS Woocommerce" />
											</Col>
											<Col>
												<img width={120} src={badgePrestashop} alt="logo CMS Prestashop" />
											</Col>
											<Col>
												<img width={80} style={{paddingTop: "20px"}} src={badgeWordpress} alt="logo CMS Wordpress" />
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
							<h3>Mes expériences :</h3>
						</SectionMedia>
						<SectionMedia>
							<MediaBoard>
								<figure>
							   		<div>
										<h5>Symbol - Agence de Communication</h5>
										<small>Webmaster de 2012 à 2015</small>
							   		</div>
									<img src={siteSymbol} alt="Site internet symbol.fr" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>J'étais alternant dans l'Agence Symbol, spécialisée dans la communication des franchises et des réseaux.</figcaption>
										<figcaption>J'ai commencé en tant que responsable commercial, puis j'ai rapidement évoluer afin de concevoir et d'administrer le site internet de l'agence. Je me suis ainsi entrainé à dynamiser l'attractivité de l'agence sur internet à l'aide de stratégies SEO et SMO.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>Wordpress</li>
											<li>HTML5</li>
											<li>CSS3</li>
										</ul>
									</div>							
									<p><a href="http://www.symbol-com.fr/" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.symbol-com.fr</a></p>
								</figure>
							   	<figure>
							   		<div>
								   		<h5>Yeutech - Software Factory</h5>
										<small>Projet mené en 2018</small>
							   		</div>
									<img src={siteYeutech} alt="Site internet yeutech.vn" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>Site internet de Yeutech, start-up proposant des services de création digitale sur mesure et spécialisée dans les technologies Open Source à Saigon (Vietnam).</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>Javascript (React.js)</li>
										</ul>
									</div>
									<p><a href="https://github.com/yeutech-lab" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.yeutech.vn</a></p>
								</figure>
							   	<figure>
							   		<div>
										<h5>Bootstrap-styled - Framework Open Source</h5>
										<small>Projet mené entre 2016 et 2017</small>
							   		</div>
									<img src={siteBs} alt="Site internet bootstrap-styled.com" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>Site internet de présentation du framework Open Source conçut à partir de Bootstrap, React.js et Styled-Components.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>Javascript (React.js)</li>
										</ul>
									</div>								
									<p><a href="https://github.com/bootstrap-styled" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.bootstrap-styled.com</a></p>
								</figure>
							   	<figure>
							   		<div>
										<h5>Documentation - Technologies Yeutech</h5>
										<small>Projet mené en 2018</small>
							   		</div>
									<img src={siteYeutechDoc} alt="Site internet des documentations de technologies conçuent par Yeutech" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>Site internet des documentations des technologies conçuent par Yeutech.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>Javascript (React.js)</li>
										</ul>
									</div>								
									<p><a href="https://yeutech-lab.github.io/documentation/" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.yeutech-lab.github.io/documentation</a></p>
								</figure>
							  	<figure>
							   		<div>
										<h5>Comptoir des passages - Commerce</h5>
										<small>Projet mené en 2013</small>
							   		</div>
									<img src={siteComptoir} alt="Site comptoir-des-passages.fr" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>Site internet d'une bijouterie, vente et rachat d'or à Boulogne Billancourt.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>Wordpress</li>
											<li>HTML5</li>
											<li>CSS3</li>
										</ul>
									</div>								
									<p>Site fermé.</p>
								</figure>
							  	<figure>
							   		<div>
										<h5>The Bubble Day - Course Solidaire</h5>
										<small>Webmaster de 2014 à 2016</small>
							   		</div>
									<img src={siteTbd} alt="Site thebubbleday.fr" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>J'ai créé à partir de Worpress et administré le site internet de la course solidaire "The Bubble Day" qui a eu lieu à Paris, Marseille et bien d'autres villes entre 2014 et 2016.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>Wordpress</li>
											<li>HTML5</li>
											<li>CSS3</li>
										</ul>
									</div>								
									<p>Site fermé.</p>
								</figure>
							  	<figure>
							   		<div>
										<h5>Gamme Baie - Réseau de Franchise</h5>
										<small>Projet mené en 2014.</small>
							   		</div>
									<img src={paoGammeBaie} alt="Site gammebaie.fr" />
							   		<div>
										<figcaption><strong>Description du projet:</strong></figcaption>
										<figcaption>En collaboration avec un sous-traitant chargé du développement du site internet gammebaie.fr, j'ai participé à la préparation des images et des contenus.</figcaption>
									</div>
									<div>
										<figcaption><strong>Technologies utilisées :</strong></figcaption>
										<ul>
											<li>Wordpress</li>
											<li>HTML5</li>
											<li>CSS3</li>
										</ul>
									</div>								
									<p><a href="http://www.gammebaie.com" alt="Site internet Gamme baie" target="_blank" rel="noopener noreferrer">www.gammebaie.com</a></p>
								</figure>
							</MediaBoard>
						</SectionMedia>
					</div>
				</Tabs>
			</Page>
		);
	};
};

export default Digital;
