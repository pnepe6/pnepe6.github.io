import React, { Component } from 'react';
import {
	Row,
	Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@bootstrap-styled/v4';
import pictoGithub from '../../static/picto-social-media-github.png';
import pictoLinkedin from '../../static/picto-social-media-ln.png';
import pictoTwitter from '../../static/picto-social-media-twitter.png';
import badgeBs from '../../static/bs_badge.png';

import './Footer.css';


class Footer extends Component {
	state = {
		isModalOpen: false,
		isMobileViewport: true,
	};
	componentDidMount() {
		this.setState({
			isMobileViewport: document.documentElement.clientWidth < 979,
		});
	};
	handleModalChange = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen })
		if(!this.state.isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	};

	render() {
		const FooterMobile = <Row>
			<Col xs={12}>
					<p>Made with <span className="red">♥</span> between Paris and Saigon!</p>
			</Col>
			<Col xs={12}>
				<a href="https://bootstrap-styled.github.io/bootstrap-styled/" alt="bootstrap-styled official git page." target="_blank" rel="noopener noreferrer">
					<img className="footer-el-middle" width={200} src={badgeBs} alt="badge bootstrap-styled" />
				</a>
			</Col>
			<Col xs={12}>
				<p
					className="footer-el-middle"
					onClick={() => this.handleModalChange()}
					style={{ cursor: "pointer" }}
				>
					<small>Crédits</small>
				</p>
			</Col>
			<Col xs={12}>
					<small>© Adrien Gadaud</small>
			</Col>
		</Row>;

		const FooterDesktop = <Row>
			<Col lg={3}>
				<p
					className="footer-el-middle"
					onClick={() => this.handleModalChange()}
					style={{ cursor: "pointer" }}
				>
					<small>Crédits</small>
				</p>
			</Col>
			<Col lg={6}>
					<p>Made with <span className="red">♥</span> between Paris and Saigon!</p>
					<small>© Adrien Gadaud</small>
			</Col>
			<Col lg={3}>
				<a href="https://bootstrap-styled.github.io/bootstrap-styled/" alt="bootstrap-styled official git page." target="_blank" rel="noopener noreferrer">
					<img className="footer-el-middle" width={200} src={badgeBs} alt="badge bootstrap-styled" />
				</a>
			</Col>
		</Row>;

		return (
			<div className="footer-ft">
				<h3>Restons connectés, suivez-moi sur:</h3>
				<a href="https://github.com/pnepe6" target="_blank" rel="noopener noreferrer"><img src={pictoGithub} alt="picto-github" /></a>
				<a href="https://fr.linkedin.com/in/adriengadaud" target="_blank" rel="noopener noreferrer"><img src={pictoLinkedin} alt="picto-linkedin" /></a>
				<a href="https://twitter.com/pnepe6" target="_blank" rel="noopener noreferrer"><img src={pictoTwitter} alt="picto-twitter" /></a>
				
				<div className="footer-bt">
					{this.state.isMobileViewport ? FooterMobile : FooterDesktop}
				</div>
				<Modal size="lg" isOpen={this.state.isModalOpen}>
    				<ModalHeader toggle={() => this.handleModalChange()}>Crédits</ModalHeader>
    		
					<ModalBody><h5><strong>Propriété intellectuelle</strong></h5></ModalBody>
					<ModalBody>
						<p>
							Les textes, images, graphismes, documents téléchargeables composant le site <strong>www.pnepe6.github.io</strong> sont la propriété exclusive d’Adrien GADAUD.
						</p>					
					</ModalBody>
					<ModalBody>
						<p>
							La structure de l'application et tout autre compossant la formant peuvent êtres réutilisés. Cette web application est hébergée sur <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">git hub</a> et accessible sur ce <a href="https://github.com/pnepe6/pnepe6.github.io" target="_blank" rel="noopener noreferrer">repository git</a>.
						</p>				
					</ModalBody>
					<ModalBody><h5><strong>Technologies utilisées</strong></h5></ModalBody>
					<ModalBody>
						<Row>
							<Col>
								<p>Languages :</p>
							</Col>
							<Col>
								<ul>
									<li>JS </li>
									<li>HTML5</li>
									<li>CSS3</li>
								</ul>
							</Col>
						</Row>
					</ModalBody>
					<ModalBody>
						<Row>
							<Col>
								<p>Frameworks & Environnements :</p>
							</Col>
							<Col>
								<ul>
									<li><a href="https://fr.reactjs.org/" target="_blank" rel="noopener noreferrer">react.js</a></li>
									<li><a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">facebook/create-react-app</a></li>
									<li><a href="https://bootstrap-styled.github.io/bootstrap-styled/" target="_blank" rel="noopener noreferrer">bootstrap-styled/v4</a></li>
									<li><a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">styled-components</a></li>
								</ul>
							</Col>
						</Row>
					</ModalBody>
					<ModalBody>
						<Row>
							<Col>
								<p>Modules et scripts :</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<p style={{ float: "right"}}>Animation :</p>
							</Col>
							<Col>
								<ul>
									<li><a href="https://matthew.wagerfield.com/parallax/" target="_blank" rel="noopener noreferrer">parallax-js</a></li>
								</ul>
							</Col>
						</Row>
					<ModalBody>
					</ModalBody>
						<Row>
							<Col>
								<p style={{ float: "right"}}>SEO Friendly :</p>
							</Col>
							<Col>
								<ul>
									<li><a href="https://github.com/geelen/react-snapshot" target="_blank" rel="noopener noreferrer">react-snapshot</a></li>
									<li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier</a></li>
									<li><a href="https://github.com/rafrex/spa-github-pages" target="_blank" rel="noopener noreferrer">Single Page Apps for GitHub Pages</a></li>
								</ul>
							</Col>
						</Row>
					</ModalBody>
    				<ModalFooter>
      					<Button
      						color="secondary"
      						onClick={() => this.handleModalChange()}
      					>
      						Close
      					</Button>
    				</ModalFooter>
				</Modal>
			</div>
		);
	};
};

export default Footer;
