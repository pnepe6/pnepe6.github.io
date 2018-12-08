import React, { Component } from 'react';
import digitalBackground from '../../../static/digitalnsw_hero.png';
import iconProject from '../../../static/icon-project.png';
import iconMarketing from '../../../static/icon-marketing.png';
import iconDesign from '../../../static/icon-design.png';
import iconDev from '../../../static/icon-dev.png';
import photoAgd from '../../../static/profile-agd.jpg';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="home-hm">
				<div className="hm-intro">
					<img src={photoAgd} />
					<div className="hm-content">
						<p><strong>Bonjour/bonsoir, je suis Adrien Gadaud. J'aime m'extasier devant une expérience utilisateur bien pensée, me dire "whaoww" en surfant sur d'incroyables sites internet et décortiquer les clés d'une stratégie digitale bien menée.</strong></p>

						<p>Riche en expérience culturelle je reviens de trois années passées à travailler en Asie où j'ai eu la chance de découvrir de nouvelles façons d'agir et de penser.</p>

						<p>Fort d'un mental positif résistant à toute épreuve je suis de nature souriante et muni d'une forte empathie me permettant de nouer de bonnes relations autant avec mes clients que mes collaborateurs. Curieux et passionné par ce que j'entreprend, je reste un éternelle étudiant en constant apprentissage sur les sujets qui m'interessent autant personnellement que professionnellement.</p>

						<p>Calme et réflechi j'aime repousser mes limites et trouve les solutions si necessaire afin d'atteindre mes objectifs. J'aime abuser de ma diplomatie et mon savoir vivre pour dénouer les situations les plus tendues.</p>
					</div>	
				</div>
				{/* 
				<div className="hm-skills">
					<h1>Voici mes compétences:</h1>
				</div>
				<div className="hm-sub">
					<div>
						<img src={iconProject} />
						<p>GESTION DE PROJET</p>
						<small>Management Agile & Scrum </small>
					</div>
					<div>
						<img src={iconMarketing} />
						<p>MARKETING DIGITAL</p>
						<small>Inbound, SEM & Rédaction</small>
					</div>
					<div>
						<img src={iconDesign} />
						<p>DESIGN GRAPHIQUES</p>
						<small>UX, Mobile First & Responsive</small>
					</div>
					<div>
						<img src={iconDev} />
						<p>DEVELOPPEMENT WEB</p>
						<small>CMS, HTML5, CSS3, JS, MySQL</small>
					</div>
				</div>
				*/}
			</div>
		);
	};
};

export default Home;
