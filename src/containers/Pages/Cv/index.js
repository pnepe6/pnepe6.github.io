import React, { Component } from 'react';
import SectionTop from '../../../components/SectionTop';
import cvImg from '../../../static/cv-agd.jpg';
import cvPdf from '../../../static/cv-adrien-gadaud-2018.pdf';
import './Cv.css';

class Cv extends Component {
	render() {
		return (
			<div className="page-pg">
				<SectionTop>
					<h1>CURRICULUM VITAE</h1>
					<a href={cvPdf} target="_blank">
						Téléchargez mon CV en pdf
					</a>
				</SectionTop>
				<img className="cv" src={cvImg} />
			</div>
		);
	};
};

export default Cv;
