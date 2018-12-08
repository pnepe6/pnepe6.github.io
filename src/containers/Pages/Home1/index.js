import React, { Component } from 'react';
import digitalBackground from '../../../static/digitalnsw_hero.png';
import iconProject from '../../../static/icon-project.png';
import iconMarketing from '../../../static/icon-marketing.png';
import iconDesign from '../../../static/icon-design.png';
import iconDev from '../../../static/icon-dev.png';
import logoAgd from '../../../static/logo-agd-colored.svg';
import './Home1.css';

class Home1 extends Component {
	render() {
		return (
			<div className="home-pg">
                  <img src={logoAgd} />
			</div>
		);
	};
};

export default Home1;
