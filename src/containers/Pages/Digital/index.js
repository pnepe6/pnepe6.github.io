import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
import SectionTop from '../../../components/SectionTop';
import Tabs from '../../../components/Tabs';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';
import Collapse from '../../../components/Collapse';

class Digital extends Component {
	state = {
		tabs: 'SEM',
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
            		<title>Digital Marketing</title>
        	  		<meta name="description" content="Portfolio des mes expériences en digital marketing incluant les stratégies de Search Engine Optimization." />
		        </Helmet>
				<SectionTop>
					<h1>DIGITAL MARKET­­­­ING</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Une vraie passion depuis la mise en ligne de mon premier site internet que je me suis empressé de vouloir faire apparaître en première position des moteurs de recherches Google, Bing, Yahoo et maintenant Alexa d'Amazon!</strong></p>
					<p>En plus de ma spécialisation en marketing digital suivi lors de mes études, j'ai très vite élargi mes compétences afin de pouvoir mettre en place de véritables stratégies digitales à la fois pour le référencement, l'animation des médias sociaux et la création d'e-Réputation.</p>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "SEM" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEM')}
                        onTouch={() => this.onTabClick('SEM')}
					  >
					  	SEM
					  </button>
					  =
					  <button
					  	className={`tablinks ${tabs === "SEO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('SEO')}
                        onTouch={() => this.onTabClick('SEO')}
					  >
					  	SEO
					  </button>
					  + SEA + SMO
					</div>
					<div id="SEM" className={`tabcontent ${tabs === "SEM" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Search Engine Marketing</h2>
							<h3 id="yeutech">Stratégie Digitale Yeutech</h3>
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
							<h3 id="tbd">Stratégie Digitale The Bubble Day</h3>
							<p>Création des contenus (articles et vidéos) à diffuser sur le blog et les réseaux sociaux (Facebook et Twitter) afin de générer du trafic qualifié sur le site internet de l'évènement.</p>
							<p><strong>Search Engine Optimization :</strong></p>
							<ul>
								<li>Étude des mots clé recherchés et leurs volumes.</li>
								<li>Optimisation des contenus du site internet.</li>
								<li>Optimisation technique du site internet.</li>
								<li>Partenariat et stratégie de lien (netlinking).</li>
								<li>Mesure du trafic et analyse des KPI.</li>
							</ul>
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
							<h3 id="symbol">Stratégie Digitale Agence Symbol</h3>
							<p>J'ai défini et mis en place le référencement du site internet de l'agence Symbol qui est resté positionné en première position des mots clé sélectionnés sur Google, Yaho et Bing.</p>
							<p>Supervisé par le directeur de l'agence et en étroite relation avec l'équipe artistique, j'ai créé et animé les réseaux sociaux de l'Agence avec l'objectif d'augmenter le nombre de prospects qualifiés (lead).</p>
							<p><strong>Search Engine Optimization :</strong></p>
							<ul>
								<li>Étude des mots clé recherchés et leurs volumes.</li>
								<li>Optimisation des contenus du site internet.</li>
								<li>Optimisation technique du site internet.</li>
								<li>Partenariat et stratégie de lien (netlinking).</li>
								<li>Mesure du trafic et analyse des KPI.</li>
							</ul>
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
							<h3>Stratégie Digitale L'Invitation (Client agence Symbol)</h3>
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
							<h3 id="admv">Stratégie Digitale AchatDansMaVille.com</h3>
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
					<div id="SEO" className={`tabcontent ${tabs === "SEO" ? 'show' : ''}`}>
						<SectionMedia>
							<h2>Search Engine Optimisation</h2>
							<MediaBoard>
								<figure>
							   		<div>
								   		<h4>Référencement Agence Symbol</h4>
								   		<small>2012 à 2015</small>
							   		</div>
									<img src={logoSymbol} alt="Strategie SEO du site internet symbol-com.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet www.symbol-com.fr specialisé dans la communication des franchises et réseaux. Le site était en première position des recherches sur Google, Yahoo et Bing entre 2012 et 2015.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>agence symbol</li>
										<li>communication franchise</li>
										<li>communication franchise et réseau</li>
										<li>communication des franchises et réseaux</li>
										<li>etc.</li>
									</ul>
									<p><a href="http://www.positeo.com/check-position/?q=communication+franchise&u=http%3A//www.symbol-com.fr/" alt="Test position SEO du site internet: www.symbol-com.fr" target="_blank" rel="noopener noreferrer">Test position SEO</a></p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement The Bubble Day</h4>
								   		<small>2014 à 2016</small>
							   		</div>
									<img src={logoTbd} alt="Strategie SEO du site internet thebubbleday.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet thebubbleday.fr présentant la course solidaire du même nom.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>course solidaire Paris / Marseille / etc.</li>
										<li>The Bubble Day</li>
										<li>quoi faire à Paris / Marseille / etc.</li>
										<li>sortir à Paris / Marseille / etc.</li>
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Social Buster</h4>
								   		<small>2013</small>
							   		</div>
									<img src={logoSb} alt="Strategie SEO du site internet social-buster.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet social-buster.fr portant sur l'actualité des réseaux sociaux.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>actualité des réseaux sociaux</li>
										<li>actu réseaux sociaux</li>
										<li>blog social media</li>
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Comptoir des passages</h4>
								   		<small>2013</small>
							   		</div>
									<img src={logoComptoir} alt="Référencement naturel du site internet comptoir-des-passages.fr" />
									<figcaption><strong>Description:</strong></figcaption>
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
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Have A Dream</h4>
								   		<small>2014 à 2015</small>
							   		</div>
									<img src={logoHad} alt="Strategie SEO du site internet haveadream.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet haveadream.fr de l'agence évènementielle éponyme.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>agence évènementielle sportive</li>
										<li>agence Have A Dream</li>
										<li>organisation évènements sportifs</li>
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Tickner</h4>
								   		<small>2012</small>
							   		</div>
									<img src={logoTickner} alt="Strategie SEO du site internet tickner.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet tickner.fr, societé de construction bois.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>construction bois</li>
										<li>maisons individuelles en bois</li>
										<li>annexes de jardins en bois</li>
										<li>cabane de jardins</li>
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
								</figure>
								<figure>
							   		<div>
								   		<h4>Référencement Axenergie</h4>
								   		<small>2012</small>
							   		</div>
									<img src={logoAxenergie} alt="Strategie SEO du site internet axenergie.fr" />
									<figcaption><strong>Description:</strong></figcaption>
									<figcaption>Stratégie SEO et référencement naturel du site internet axenergie.fr, réseau de chauffagistes indépendants.</figcaption>
									<figcaption><strong>Mots clés référencés:</strong></figcaption>
									<ul>
										<li>Chauffagiste Paris / Marseille / etc.</li>
										<li>Rénovation chauffage</li>
										<li>Plombier Paris / Marseille / etc.</li>
										<li>Urgence plomberie</li>
										<li>Urgence chaudière</li>
										<li>etc.</li>
									</ul>
									<p>site fermé</p>
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
