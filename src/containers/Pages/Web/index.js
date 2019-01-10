import React, { Component } from 'react';
// import siteSb from '../../../static/02_web_website-sb.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
// import siteTbd from '../../../static/02_web_website-tbd.jpg';
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
						   		<h4>Yeutech - Software Factory</h4>
								<small>HTML5, CSS3, Javascript (React.js)</small>
					   		</div>
							<img src={siteYeutech} alt="Site internet yeutech.vn" />
							<figcaption>Site internet de Yeutech, start-up proposant des services de création digitale sur mesure et spécialisée dans les technologies Open Source à Saigon (Vietnam).</figcaption>
							<p><a href="https://github.com/yeutech-lab" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.yeutech.vn</a></p>
						</figure>
					   	<figure>
					   		<div>
								<h4>Bootstrap-styled - Framework Open Source</h4>
								<small>HTML5, CSS3, Javascript (React.js)</small>
					   		</div>
							<img src={siteBs} alt="Site internet bootstrap-styled.com" />
							<figcaption>Site internet de présentation du framework Open Source conçut à partir de Bootstrap, React.js et Styled-Components.</figcaption>
							<p><a href="https://github.com/bootstrap-styled" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.bootstrap-styled.com</a></p>
						</figure>
					   	<figure>
					   		<div>
								<h4>Documentation - Technologies Yeutech</h4>
								<small>HTML5, CSS3, Javascript (React.js)</small>
					   		</div>
							<img src={siteYeutechDoc} alt="Site internet des documentations de technologies conçuent par Yeutech" />
							<figcaption>Site internet des documentations des technologies conçuent par Yeutech.</figcaption>
							<p><a href="https://yeutech-lab.github.io/documentation/" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.yeutech-lab.github.io/documentation</a></p>
						</figure>
					  	<figure>
					   		<div>
								<h4>Comptoir des passages - Commerce</h4>
								<small>Wordpress, HTML5, CSS3</small>
					   		</div>
							<img src={siteComptoir} alt="Site comptoir-des-passages.fr" />
							<figcaption>Site internet d'une bijouterie, vente et rachat d'or à Boulogne Billancourt.</figcaption>
							<p>Site fermé.</p>
						</figure>
						<figure>
					   		<div>
								<h4>Symbol - Agence de Communication</h4>
								<small>Wordpress, HTML5, CSS3</small>
					   		</div>
							<img src={siteSymbol} alt="Site internet symbol.fr" />
							<figcaption>Site internet de l'Agence Symbol est spécialisée dans la communication des franchises et des réseaux.</figcaption>
							<p><a href="http://www.symbol-com.fr/" alt="Site internet Yeutech" target="_blank" rel="noopener noreferrer">www.symbol-com.fr</a></p>
						</figure>
					</MediaBoard>
				</SectionMedia>
			</div>
		);
	};
};

export default Web;
