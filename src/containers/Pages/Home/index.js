import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MotionList from '../../../components/MotionList';
import ProgressList from '../../../components/ProgressList';
import SectionActionCall from '../../../components/SectionActionCall';
import SectionContent from '../../../components/SectionContent';
import logoAgd from '../../../static/logo-agd-colored.svg';
import './Home.css';

class Home extends Component {
	state = {
		isActive: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', () => this.handleScroll());
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.handleScroll());
	};

  	handleScroll = () => {
  		if(this.refs["progress-list"]) {
  		  	let topValue = this.refs["progress-list"].getBoundingClientRect().top;
	  		let bottomValue = this.refs["progress-list"].getBoundingClientRect().bottom;
	  		if(!this.state.isActive && (topValue <= 0 || topValue <= -400 )) {
				this.setState({
				   	isActive: true,
			  	});
	  		};
	  		if(this.state.isActive && (bottomValue <= 650 || bottomValue >= 1600)) {
				this.setState({
				   	isActive: false,
			  	});
	  		}	
  		}
	};
	render() {
		return (
			<div>
				<div className="intro">
					<div className="motion">
						<MotionList />
					</div>
					<p>disponible en région parisienne</p>
				</div>
				<div ref="progress-list" className="skills">
					<h2>En quelques mots:</h2>
					<div>
						<ProgressList
							isActive={this.state.isActive}
							percentage={50}
							text="AGILE"
							title="Gestion de projet"
							content="Management Agile, recrutement..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={70}
							text="PAO"
							title="Design Graphique"
							content="UX, Mobile First, Responsive..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={90}
							text="SEM"
							title="Digital Marketing"
							content="eReputation, SEO, Community management..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={60}
							text="WEB"
							title="Développement"
							break
							content="HTML, CSS, JS, MySQL..."
						/>
						<p>Mes compétences sont variées, toutes orientées vers le monde du digital.</p>
					</div>
				</div>
				<SectionActionCall>
					<h2>Envie d'en savoir plus?</h2>
					<p><strong>Passionné de référencement et spécialisé en Marketing Digital,</strong> j'ai travaillé en Alternance dans une agence de communication où j'ai créé et géré mes premiers projets web (CMS, SEO, SMO).</p>
					<p>Fort de 3 années passées au Viêtnam dans une start-up spécialisée dans le développement de technologies open source, j'ai découvert la gestion de projet AGILE et appris le développement front-end (HTML, CSS, JavaScript, MySQL...).</p>
					<p>Je suis un chef de projet digital qui gère ses projets avec un regard à la fois artistique et technique tout en intégrant les enjeux marketing et commerciaux.</p>
					<Link to="/cv/">Consultez mon CV</Link>
				</SectionActionCall>
				<SectionContent>
					<h2>A propos de moi</h2>
					<p><strong>Riche en expériences culturelles, j'ai eu la chance de découvrir de nouvelles façons d'agir et de penser en Asie, en Europe, et au Etats-Unis.</strong></p>
					<p>Fort d'un mental positif, je mets mon empathie au service de mes clients comme de mes collaborateurs.</p>
					<p>Curieux et passionné par ce que j'entreprends, je reste en constant apprentissage sur les sujets qui m'intéressent, autant personnellement que professionnellement.</p>
					<img src={logoAgd} alt="logo Adrien Gadaud" />
				</SectionContent>
			</div>
		);
	};
};

export default Home;
