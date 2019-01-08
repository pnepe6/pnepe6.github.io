import React, { Component } from 'react';
// import siteSb from '../../../static/02_web_website-sb.jpg';
import siteComptoir from '../../../static/02_web_website-comptoir.jpg';
import siteSymbol from '../../../static/02_web_website-symbol.jpg';
// import siteTbd from '../../../static/02_web_website-tbd.jpg';
import siteYeutech from '../../../static/02_web_website-yeutech.png';
import siteBs from '../../../static/02_web_website-bs.png';
import siteYeutechDoc from '../../../static/02_web_website-yeutech-doc.png';
import SectionTop from '../../../components/SectionTop';
import SectionContent from '../../../components/SectionContent';

class Web extends Component {
	render() {
		return (
			<div>
				<SectionTop>
					<h1>DEVELOPPEMENT WEB</h1>
				</SectionTop>
				<SectionContent>
					<p><strong>J'ai débuté mon apprentissage des languages HTML et CSS lors de mes études supérieures.</strong></p>
					<small>Pris de passion pour les infinies possibilités de la programmation j'ai commencé par developper des sites internet utilisant Wordpress (CMS) afin de sublimer mes projets étudiants d'abord, puis en tant que freelance. J'ai ensuite utiliser de plus en plus le language Javascript autant pour le front-end que pour automatiser un maximum de taches répétitives.</small>
				</SectionContent>
				<div id="columns">
				   	<figure>
						<img src={siteYeutech} alt="Site internet yeutech.vn" />
						<figcaption>Start-up Software Factory: www.yeutech.vn</figcaption>
					</figure>
				   	<figure>
						<img src={siteBs} alt="Site internet bootstrap-styled.com" />
						<figcaption>Open Source Framework based on Bootstrap, React.js and Styled-Components: www.bootstrap-styled.com</figcaption>
					</figure>
				   	<figure>
						<img src={siteYeutechDoc} alt="Site internet des documentations de technologies conçuent par Yeutech" />
						<figcaption>Site internet des documentations de technologies conçuent par Yeutech.</figcaption>
					</figure>
				  	<figure>
						<img src={siteComptoir} alt="Site comptoir-des-passages.fr" />
						<figcaption>Bijouterie: comptoir-des-passages.fr</figcaption>
					</figure>
					<figure>
						<img src={siteSymbol} alt="Site internet symbol.fr" />
						<figcaption>Agence de communication Franchise & réseaux: www.symbol.fr</figcaption>
					</figure>
				</div>
			</div>
		);
	};
};

export default Web;
