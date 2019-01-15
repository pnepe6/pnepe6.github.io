import React, { Component } from 'react';
// import siteSb from '../../../static/02_web_website-sb.jpg';
import paoGammeBaie from '../../../static/01_design_agd-gamme-baie-pao.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
import siteTbd from '../../../static/02_web_website-tbd.jpg';
import siteYeutech from '../../../static/02_web_website-yeutech.png';
import siteBs from '../../../static/02_web_website-bs.png';
import siteYeutechDoc from '../../../static/02_web_website-yeutech-doc.png';
import SectionTop from '../../../components/SectionTop';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Web extends Component {
	render() {
		return (
			<div>
				<SectionTop>
					<h1>DEVELOPPEMENT WEB</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>J'ai débuté mon apprentissage des languages HTML et CSS lors de mon enseignement secondaire.</strong></p>
					<p>Pris de passion pour les infinies possibilités de la programmation j'ai commencé par developper des sites internet utilisant Wordpress (CMS) afin de sublimer mes projets étudiants d'abord, puis en tant que freelance.</p>
					<p>J'ai ensuite utiliser de plus en plus le language Javascript autant pour le front-end que pour automatiser un maximum de taches répétitives.</p>
				</SectionIntro>
				<SectionMedia>
					<h2>Découvrez mes réalisations</h2>
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
								<figcaption>Site internet de l'Agence Symbol est spécialisée dans la communication des franchises et des réseaux.</figcaption>
							</div>
							<div>
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
								<figcaption><strong>Technologies utilisées:</strong></figcaption>
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
		);
	};
};

export default Web;
