import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from '@bootstrap-styled/v4';
import Page from '../../../components/Page';
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
import identityTbdLogo from '../../../static/identity-tbd-logo.png';
import paoGammeBaie from '../../../static/01_design_agd-gamme-baie-pao.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
import badgeMs from '../../../static/badge-cloud-agd.png';
import badgeHtml from '../../../static/badge-html5.png';
import badgeCss from '../../../static/badge-css3.png';
import badgeJs from '../../../static/badge-js.png';
import badgeNode from '../../../static/badge-node-js.png';
import badgeReact from '../../../static/badge-react.png';
import badgeGit from '../../../static/badge-git.png';
import SectionTop from '../../../components/SectionTop';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';
import Tabs from '../../../components/Tabs';
import Collapse from '../../../components/Collapse';

class Web extends Component {
	state = {
		tabs: 'PROJET',
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
            		<title>Développement front-end</title>
        	  		<meta name="description" content="Portfolio des mes expériences en développement front-end et gestion de projet web." />
		        </Helmet>
				<SectionTop>
					<h1>DEVELOPPEMENT FRONT-END</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>J'ai débuté mon apprentissage des langages HTML et CSS lors de mon enseignement secondaire.</strong></p>
					<p>Pris de passion pour les infinies possibilités de la programmation, j'ai commencé par développer des sites internet utilisant Wordpress (CMS) afin de sublimer mes projets étudiants d'abord, puis en tant que freelance.</p>
					<p>J'ai ensuite utilisé de plus en plus le langage Javascript autant pour le front-end que pour automatiser un maximum de taches répétitives.</p>
					<Row>
						<Col>
							<p><strong>Plateformes</strong></p>
							<img style={{ "vertical-align": "top"}} width={100} src={badgeGit} />
							<img width={120} src={badgeMs} />
						</Col>
						<Col>
							<p><strong>Languages</strong></p>
							<Row>
								<Col>
									<img width={100} src={badgeHtml} />
								</Col>
								<Col>
									<img width={70} src={badgeCss} />
								</Col>
								<Col>
									<img width={70} src={badgeJs} />
								</Col>
							</Row>
						</Col>
						<Col>
							<p><strong>Environnements</strong></p>
							<Row>
								<Col>
									<img width={100} src={badgeNode} />
								</Col>
								<Col>
									<img width={100} src={badgeReact} />
								</Col>
							</Row>
						</Col>
					</Row>
				</SectionIntro>
				<Tabs>
					<div className="tab">
					  <button
					  	className={`tablinks ${tabs === "PROJET" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('PROJET')}
                        onTouch={() => this.onTabClick('PROJET')}
					  >
					  	PROJET WEB
					  </button>
					  <button
					  	className={`tablinks ${tabs === "PORTFOLIO" ? 'active' : ''}`}
					  	onClick={() => this.onTabClick('PORTFOLIO')}
                        onTouch={() => this.onTabClick('PORTFOLIO')}
					  >
					  	PORTFOLIO
					  </button>
					</div>
					<div id="PROJET" className={`tabcontent ${tabs === "PROJET" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Conception de site internet</h2>
							<h3 id="yeutech">Site internet Yeutech</h3>
							<p>J'ai supervisé les designers afin d'établir les maquettes graphiques et les ressources graphique afin de concevoir le site internet de l'entreprise ainsi que le site internet des documentations de l'entreprise.</p>
							<p><strong>Technologies utilisées :</strong></p>
							<ul>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>Javscript (dont React.js)</li>
							</ul>						
							<p><small>Website : <a href="https://github.com/yeutech-lab" rel="noopener noreferrer" target="_blank">yeutech-lab.com</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={siteYeutech} alt="Site internet Yeutech." />
										<figcaption>Site internet Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={siteYeutechDoc} alt="Site internet des documentations Yeutech." />
										<figcaption>Site internet des documentations Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={identityYeutechGuideline} alt="Guideline webdesign Yeutech." />
										<figcaption>Charte graphique Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={wireframeMobileYeutech} alt="Maquette du site internet mobile Yeutech." />
										<figcaption>Maquette du site internet mobile Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={wireframeTabletYeutech} alt="Maquette du site internet tablette Yeutech." />
										<figcaption>Maquette du site internet tablette Yeutech.</figcaption>
									</figure>
									<figure>
										<img src={wireframeDesktopYeutech} alt="Maquette du site internet desktop Yeutech." />
										<figcaption>Maquette du site internet desktop Yeutech.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>	
						</SectionMedia>
						<SectionMedia>
							<h3 id="bs">Site internet Bootstrap-styled</h3>

							<p>J'ai participé à la conception du site internet servant à présenter le framework javascript Bootstrap-styled conçut par les développeurs de l'entreprise Yeutech.</p>
							<p><strong>Technologies utilisées :</strong></p>
							<ul>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>Javscript (dont React.js)</li>
							</ul>
							<p><small>Website : <a href="https://github.com/bootstrap-styled" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">bootstrap-styled</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={siteHomeBs} alt="Site internet Bootstrap-styled, page d'accueil." />
										<figcaption>Site internet Bootstrap-styled, page d'accueil.</figcaption>
									</figure>
									<figure>
										<img src={readmeBs} alt="Readme Bootstrap-styled." />
										<figcaption>Readme Bootstrap-styled.</figcaption>
									</figure>
									<figure>
										<img src={siteBs} alt="Site internet Bootstrap-styled." />
										<figcaption>Site internet Bootstrap-styled, page de documentation.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3 id="tbd">Site internet The Bubble Day</h3>
							<p>J'ai conçu à partir de Wordpress et ai administré le site internet de l'évènement The Bubble Day.</p>
							<p><strong>Technologies utilisées :</strong></p>
							<ul>
								<li>Wordpress</li>
								<li>HTML5</li>
								<li>CSS3</li>
							</ul>
							<p><small>Website : Site fermé</small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={identityTbdLogo} alt="Logo du site internet The Bubble Day." />
										<figcaption>Logo du site internet The Bubble Day.</figcaption>
									</figure>
									<figure>
										<img src={siteTbd} alt="Site internet The Bubble Day." />
										<figcaption>Site internet The Bubble Day.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
						<SectionMedia>
							<h3 id="symbol">Site internet Agence Symbol</h3>
							
							<p>J'ai conçu à partir de Wordpress et ai administré le site internet de l'agence Symbol.</p>
							<p><strong>Technologies utilisées :</strong></p>
							<ul>
								<li>Wordpress</li>
								<li>HTML5</li>
								<li>CSS3</li>
							</ul>
							<p><small>Website : <a href="http://www.symbol-com.fr/" alt="Site internet Agence Symbol" target="_blank" rel="noopener noreferrer">symbol-com.fr</a></small></p>
							<Collapse clickable="Cliquez pour en savoir plus">
								<MediaBoard>
									<figure>
										<img src={siteSymbol} alt="Site internet de l'agence Symbol." />
										<figcaption>Site internet de l'agence Symbol.</figcaption>
									</figure>
								</MediaBoard>
							</Collapse>
						</SectionMedia>
					</div>
					<div id="PORTFOLIO" className={`tabcontent ${tabs === "PORTFOLIO" ? 'show' : 'hide'}`}>
						<SectionMedia>
							<h2>Découvrez toutes mes réalisations</h2>
							<h3>Site internet CMS ou "from scratch"</h3>
							<MediaBoard>
								<figure>
							   		<div>
										<h4>Symbol - Agence de Communication</h4>
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
								   		<h4>Yeutech - Software Factory</h4>
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
										<h4>Bootstrap-styled - Framework Open Source</h4>
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
										<h4>Documentation - Technologies Yeutech</h4>
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
										<h4>Comptoir des passages - Commerce</h4>
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
										<h4>The Bubble Day - Course Solidaire</h4>
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
										<h4>Gamme Baie - Réseau de Franchise</h4>
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

export default Web;
