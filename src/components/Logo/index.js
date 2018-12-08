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
					<small>Chef de Projet Digital</small>
				</div>
			</div>
		);
	};
};

export default Logo;
