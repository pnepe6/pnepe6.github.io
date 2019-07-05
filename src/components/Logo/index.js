import React, { Component } from 'react';
import logoAgd from '../../static/logo-agd-colored.svg';
import './Logo.css';

class Logo extends Component {
	render() {
		return (
			<div className="logo-lg">
				<img src={logoAgd} alt="logo Adrien Gadaud" />
				<div>
					<p>ADRIEN</p>
					<p>GADAUD</p>
					<h1>
						<small>Consultant Fonctionnel et</small>
						<small>Chef de Projet polyvalent</small>
					</h1>
				</div>
			</div>
		);
	};
};

export default Logo;
