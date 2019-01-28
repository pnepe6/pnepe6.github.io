import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import SectionTop from '../../../components/SectionTop';
import cvImg from '../../../static/cv-agd.jpg';
import cvPdf from '../../../static/cv-adrien-gadaud-2018.pdf';
import './Cv.css';

class Cv extends Component {
	render() {
		return (
			<div>
		        <Helmet>
            		<title>CV chef de projet digital</title>
        	  		<meta name="description" content="Curriculum vitae d'Adrien Gadaud, Chef de projet Digital et Chef de projet Web en région parisienne." />
		        </Helmet>
				<SectionTop>
					<h1>CURRICULUM VITAE</h1>
					<a href={cvPdf} target="_blank">
						Téléchargez mon CV en pdf
					</a>
				</SectionTop>
				<img className="cv" src={cvImg} alt="Curriculum Vitae de Mr. Adrien Gadaud." />
			</div>
		);
	};
};

export default Cv;
