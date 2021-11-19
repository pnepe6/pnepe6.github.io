import React, { Component } from 'react';
import admv from '../../static/slider-admv.png';
import axenergie from '../../static/slider-axenergie.png';
import darty from '../../static/slider-darty.png';
import invitation from '../../static/slider-invitation.png';
import neib from '../../static/slider-neib.png';
import sg from '../../static/slider-sg.png';
import symbol from '../../static/slider-symbol.png';
import tbd from '../../static/slider-tbd.png';
import yeutech from '../../static/slider-yeutech.png';
import bforbank from '../../static/slider-bforbank.png';
import camaieu from '../../static/slider-camaieu.jpg';
import cofidis from '../../static/slider-cofidis.jpg';
import conforama from '../../static/slider-conforama.jpg';
import croquetteland from '../../static/slider-croquetteland.jpg';
import fortuneo from '../../static/slider-fortuneo.jpg';
import sephora from '../../static/slider-sephora.png';
import somfy from '../../static/slider-somfy.jpg';
import arte from '../../static/slider-arte.jpg';

import './Gallery.css';

class Gallery extends Component {
	render() {
		return (
			<div className="slider-gallery">
				<p>Ils m'ont fait confiance, pourquoi pas vous ?</p>
				<div>
					<img height="100px" src={sephora} alt="Sephora" />
					<img height="100px" src={camaieu} alt="Camaieu" />
					<img height="100px" src={conforama} alt="Conforama" />
					<img height="100px" src={darty} alt="Darty" />
					<img height="100px" src={somfy} alt="Somfy" />
					<img height="100px" src={croquetteland} alt="Croquetteland" />
					<img height="100px" src={arte} alt="Arte" />
					<img height="100px" src={cofidis} alt="Cofidis" />
					<img height="100px" src={sg} alt="Société Générale" />
					<img height="100px" src={bforbank} alt="BforBank" />
					<img height="100px" src={fortuneo} alt="Fortuneo" />
					<img height="100px" src={symbol} alt="Agence de Communication Symbol" />
					<img height="100px" src={tbd} alt="Event The Bubble Day" />
					<img height="100px" src={admv} alt="AchatDansMaVille.com" />
					<img height="100px" src={axenergie} alt="Axenergie" />
					<img height="100px" src={invitation} alt="L\'Invitation" />
					<img height="100px" src={yeutech} alt="Yeutech" />
					<img height="100px" src={neib} alt="Neib" />
				</div>
			</div>
		);
	};
};

export default Gallery;
