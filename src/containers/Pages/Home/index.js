import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Page from '../../../components/Page';
import MotionList from '../../../components/MotionList';
import ProgressList from '../../../components/ProgressList';
import SectionActionCall from '../../../components/SectionActionCall';
import SectionContent from '../../../components/SectionContent';
import logoAgd from '../../../static/logo-agd-colored.svg';
import infographieAgd from '../../../static/infographie-agd_lg.png';
import infographieAgdSM from '../../../static/infographie-agd_sm.png';
import ParallaxScene from '../../../components/ParallaxScene';
import Gallery from '../../../components/Gallery';

import './Home.css';

const TOP_VALUE_MOBILE = {
	start: 0,
	end: 500,
};
const BOTTOM_VALUE_MOBILE = {
	start: 650,
	end: 1600,
};

const TOP_VALUE_DESKTOP = {
	start: 0,
	end: -400,
};
const BOTTOM_VALUE_DESKTOP = {
	start: 650,
	end: 1600,
};

class Home extends Component {
	state = {
		isActive: false,
		isMobileViewport: true,
		topVal: {},
		bottomVal: {},
	};
	componentDidMount() {
		window.addEventListener('scroll', () => this.handleScroll());
		window.scrollTo(0, 0);
		this.setState({
			isMobileViewport: document.documentElement.clientWidth < 979,
		}, this.defineActiveValue());
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.handleScroll());
	};

	defineActiveValue = () => {
	    var heightToShow = 1;

	    if (this.state.isMobileViewport) {
	    	this.setState({
				topVal: TOP_VALUE_MOBILE,
				bottomVal: BOTTOM_VALUE_MOBILE,
	    	})
	    } else {
	    	this.setState({
				topVal: TOP_VALUE_DESKTOP,
				bottomVal: BOTTOM_VALUE_DESKTOP,
	    	})
	    }
	};
  	handleScroll = () => {
  		const { topVal, bottomVal } = this.state;

  		if(this.refs["progress-list"]) {
  		  	let topValue = this.refs["progress-list"].getBoundingClientRect().top;
	  		let bottomValue = this.refs["progress-list"].getBoundingClientRect().bottom;
	  		if(!this.state.isActive && (topValue <= topVal.start || topValue <= topVal.end )) {
				this.setState({
				   	isActive: true,
			  	});
	  		};
	  		if(this.state.isActive && (bottomValue <= bottomVal.start || bottomValue >= bottomVal.end)) {
				this.setState({
				   	isActive: false,
			  	});
	  		}	
  		}
	};
	render() {
		return (
			<Page>
		        <Helmet>
            		<title>Adrien Gadaud | Chef de projet Digital</title>
        	  		<meta name="description" content="Chef de projet digital et chef de projet web en région parisienne." />
		        </Helmet>
		        <div className="section-slider">
			        <div className="slider-motion">
						<ParallaxScene />
					</div>
					<div className="infographie-home">
						<img className="info-img-lg" src={infographieAgd} />
						<img className="info-img-sm" src={infographieAgdSM} />
					</div>
					{/*
					<div className="intro">
						<div className="motion">
							<MotionList />
							<p>disponible en région parisienne</p>
						</div>
					</div>
				    */}
				</div>
				<div ref="progress-list" className="skills">
					<h2>Mes compétences sont variées, toutes orientées vers le monde numérique :</h2>
					<div>
						<ProgressList
							isActive={this.state.isActive}
							percentage={95}
							text="SALES"
							title="Avant-Vente & Relation Cient"
							content="Prospection, Analyse des Besoins, Cahier des Charges..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={85}
							text="SEM"
							title="Communication & Marketing Digital"
							content="Stratégies SEO, SEA, SMO, GDD, Community Management..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={50}
							text="UX/UI"
							title="Graphisme & Web Design"
							content="Mobile First, Attractive & Responsive design, Wireframe..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={40}
							text="IT"
							title="Informatique & Multimédia"
							break
							content="Développement Front, Hardware, Cloud Computing..."
						/>
						{/*
						<p><strong>Mes compétences sont variées, toutes orientées vers le monde numérique.</strong></p> 
						<h5
							style={{ 
								padding: "50px 20vw"
							}}
						>
							Maîtrisant l'ensemble de la chaine de production numérique, j'apporte un regard technique et artistique en respectant les enjeux marketing et commerciaux.</h5>
					    */}
					</div>
				</div>
				<div>
					<Gallery />
				</div>
				<SectionActionCall
					btn={{
						content: "Consultez mon CV",
						href: "/cv",
					}}
				>
					<h2>Envie d'en savoir plus?</h2>
					<p><strong>Diplômé d'un Master Marketing et Communication spécialisé en Marketing Digital,</strong> j'ai commencé en tant que conseillé vendeur sur des marchés BtoC puis BtoB. </p>
					<p>Devenu Chef de Publicité dans une agence de communication et responsable des recommandations clients, j'ai également créé et géré mes premiers projets web (CMS, SEO, SMO).</p>
					<p>Commercial dans l'âme je suis passionné de référencement et d'informatique. Je maîtrise le <strong>développement front-end</strong> et les fondamentaux du <strong>Cloud Computing</strong>.</p>
					<p>Fort de trois années passées au Viêtnam dans une start-up spécialisée dans le développement de <strong>technologies open source</strong>, j'ai découvert la gestion de projet <strong>AGILE</strong> et le travail en milieu anglophone.</p>
				</SectionActionCall>
				<SectionContent>
					<h2>À propos de moi</h2>
					<p><strong>J'interviens en tant que Consultant Digital et Fonctionnel tout en maîtrisant la gestion et la direction artistique de projet web.</strong></p>
					<p>Doté d'un fort relationnel et d'un mental positif, je mets mon <strong>expertise du numérique</strong> au service de mes clients comme de mes collaborateurs.</p>
					<p>Riche en <strong>expériences culturelles</strong>, j'ai eu la chance de découvrir de nouvelles façons de travailler et de penser aux États-Unis, en Europe et en Asie.</p>
					<p style={{ fontStyle: "italic", color:"#9fbcc4", fontSize: "20px"}}>Curieux et passionné par ce que j'entreprends, je reste en constant apprentissage sur les sujets qui m'intéressent, autant personnellement que professionnellement (marketing, communication, technique de vente, informatique et systèmes d'information).</p>

					<img src={logoAgd} alt="logo Adrien Gadaud" />
				</SectionContent>
			</Page>
		);
	};
};

export default Home;
