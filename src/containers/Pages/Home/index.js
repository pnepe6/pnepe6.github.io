import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Page from '../../../components/Page';
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
            		<title>Adrien Gadaud | Consultant Digital 360°</title>
        	  		<meta name="description" content="Consultant Digital disponible en région parisienne." />
		        </Helmet>
		        <div className="section-slider">
			        <div className="slider-motion">
						<ParallaxScene />
					</div>
					<div className="infographie-home">
						<img className="info-img-lg" alt="inforgraphie" src={infographieAgd} />
						<img className="info-img-sm" alt="inforgraphie" src={infographieAgdSM} />
					</div>
				</div>
				<div ref="progress-list" className="skills">
					<h2>Véritable Couteau Suisse, mes compétences sont toutes orientées vers le monde numérique :</h2>
					<div>
						<ProgressList
							isActive={this.state.isActive}
							percentage={90}
							text="DATA"
							title="Data management & Analytics"
							content="Plan de marquage & traceur Web/Mobile, analyses ROPO (R)..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={80}
							text="SEM"
							title="Marketing & Com' Digital"
							content="SEO/SEA/SMO, AdTech & MarTech (GA, FB CAPI)..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={65}
							text="AGILE"
							title="Gestion de projet & Formation"
							content="Cahier des charges, atelier technique, documentation..."
						/>
						<ProgressList
							isActive={this.state.isActive}
							percentage={75}
							text="DEV"
							title="Informatique & Web Design"
							break
							content="HTML, CSS, JS, server-side (pHp), Cloud & API..."
						/>
					</div>
				</div>
				<div>
					<Gallery />
				</div>
				<SectionActionCall
					btn={{
						content: "Consultez mon CV",
						href: "/cv"
					}}
				>
					<h2>Envie d'en savoir plus?</h2>
					<p>J'ai validé un <strong>Master Marketing et Communication (spé Digital)</strong> en Alternance. J'étais Chef de Publicité dans une agence de communication où j'ai conduit mes premiers projets web (CMS, SEO, SMO).</p>
					<p>J'ai ensuite développé mes <strong>compétences en informatique</strong> (Frontend, Cloud Computing & API) pendant trois ans au Viêtnam où j'étais responsable Communication/Marketing d'une start-up spécialisée dans le développement de technologies open source. J'y ai découvert la <strong>gestion de projet</strong> dans un contexte international.</p>
					<p>De retour en France et désireux de parfaire mon expèrience sur de nouveau projet mélant <strong>Marketing Digital et Programmation</strong>, j'ai  passé deux ans chez le leader européen spécialisé en Customer Data Platform : Commanders Act.</p>
				</SectionActionCall>
				<SectionContent>
					<h2>À propos de moi</h2>
					<p style={{textAlign: "center"}}><strong>Doté d'un fort relationnel et d'un mental positif, je mets mon expertise du numérique et mes capacités d'analyse au service des projets que je pilote.</strong></p>
					<p style={{margin: "0px", textAlign: "center"}}>Curieux et passionné, je reste en constant apprentissage sur les sujets d'avenir liés aux nouvelles technologies :</p>
					<p style={{fontStyle: "italic", color:"#9fbcc4", fontSize: "20px", textAlign: "center"}}>Ad & Marketing Technologies, Growth Hacking, Eyes Tracking, Virtual Reality, IA...</p>

					<img src={logoAgd} alt="logo Adrien Gadaud" />
				</SectionContent>
			</Page>
		);
	};
};

export default Home;
