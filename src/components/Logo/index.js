import React, { Component } from 'react';
import PropTypes from '../../../node_modules/prop-types';
import logoAgd from '../../static/logo-agd-colored.svg';
import './Logo.css';

class Logo extends Component {
	static propTypes = {
		isSticky: PropTypes.bool,
	};

	render() {
		const logo = (<div className="logo-lg">
			<img src={logoAgd} alt="logo Adrien Gadaud" />
			<div>
				<p className="logo-firstname">ADRIEN</p>
				<p className="logo-lastname">GADAUD</p>
				<h1 className="logo-title">Consultant Digital 360°</h1>
				<p className="logo-subtitle">Web Marketing & E-Communication</p>
			</div>
		</div>);

		const logoSticky = (<div className="logo-lg">
			<div>
				<p className="logo-firstname-sticky">ADRIEN</p>
				<p className="logo-lastname">GADAUD</p>
			</div>
		</div>);

		return this.props.isSticky ? logoSticky : logo;
	};
};

export default Logo;
