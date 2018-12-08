import React, { Component } from 'react';
import pictoGoogle from '../../static/picto-social-media-g+.png';
import pictoGithub from '../../static/picto-social-media-github.png';
import pictoLinkedin from '../../static/picto-social-media-ln.png';
import pictoTwitter from '../../static/picto-social-media-twitter.png';

import './Footer.css';


class Footer extends Component {
	render() {
		return (
			<div className="footer-ft">
				<h3>Restons connecté, suivez moi sur:</h3>
				<a href="https://plus.google.com/+adriengadaud" target="_blank" rel="noopener noreferrer"><img src={pictoGoogle} alt="picto-google+" /></a>
				<a href="https://github.com/pnepe6" target="_blank" rel="noopener noreferrer"><img src={pictoGithub} alt="picto-github" /></a>
				<a href="https://fr.linkedin.com/in/adriengadaud" target="_blank" rel="noopener noreferrer"><img src={pictoLinkedin} alt="picto-linkedin" /></a>
				<a href="https://twitter.com/pnepe6" target="_blank" rel="noopener noreferrer"><img src={pictoTwitter} alt="picto-twitter" /></a>
				<div className="footer-bt">
					<p>Made with <span className="red">♥</span> between Paris and Saigon!</p>
					<small>© Adrien Gadaud</small>
				</div>
			</div>
		);
	};
};

export default Footer;
