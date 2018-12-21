import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MotionList from '../../../components/MotionList';
import ProgressList from '../../../components/ProgressList';
import './Home.css';


class Home extends Component {
	render() {
		return (
			<div>
				<div className="intro">
					<div className="motion">
						<MotionList />
					</div>
					<p>en région parisienne</p>
				</div>
				<div className="skills">
					<h2>Mes compétences:</h2>
					<ProgressList
						percentage={50}
						text="AGILE"
						title="Gestion de projet"
						content="Management Agile, recrutement..."
					/>
					<ProgressList
						percentage={70}
						text="PAO"
						title="Design Graphique"
						content="UX, Mobile First, Responsive..."
					/>
					<ProgressList
						percentage={90}
						text="SEM"
						title="Digital Marketing"
						content="eReputation, SEO, Community management..."
					/>
					<ProgressList
						percentage={60}
						text="WEB"
						title="Développement"
						content="HTML, CSS, JS, MySQL..."
					/>
					<p>et bien plus encore!</p>
				</div>
				<div className="action-call">
					<h2>Envie d'en savoir plus?</h2>
					<div className="action-call-content">
						<strong>Mes compétences sont variées, toutes orientées vers le monde du digital:</strong>
						<Link to="/cv/">Consulter mon CV</Link>
					</div>
				</div>
				<div className="about">
					<h2>A propos de moi:</h2>
					<div className="about-content">
						<p><strong>J'aime m'extasier devant une expérience utilisateur bien pensée, me dire "whaoww" en surfant sur d'incroyables sites internet et décortiquer les clés d'une stratégie digitale bien menée.</strong></p>
						<p>Riche en expériences culturelles je reviens de trois années passées à travailler en Asie où j'ai eu la chance de découvrir de nouvelles façons d'agir et de penser.</p>
						<p>Fort d'un mental positif, je met mon empathie au service de mes clients comme de mes collaborateurs.</p>
						<p>Curieux et passionné par ce que j'entreprend, je reste en constant apprentissage sur les sujets qui m'interessent autant personnellement que professionnellement.</p>
					</div>
				</div>
			</div>
		);
	};
};

export default Home;
