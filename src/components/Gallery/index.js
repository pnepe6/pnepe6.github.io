import React, { Component } from 'react';
import admv from '../../static/slider-admv.png';
import axenergie from '../../static/slider-axenergie.png';
import darty from '../../static/slider-darty.png';
import invitation from '../../static/slider-invitation.png';
import kpx from '../../static/slider-kpx.png';
import neib from '../../static/slider-neib.png';
import sg from '../../static/slider-sg.png';
import symbol from '../../static/slider-symbol.png';
import tbd from '../../static/slider-tbd.png';
import tickner from '../../static/slider-tickner.png';
import yeutech from '../../static/slider-yeutech.png';

import './Gallery.css';

class Gallery extends Component {
	render() {
		return (
			<div className="slider-gallery">
				<p>Ils m'ont fait confiance, pourquoi pas vous ?</p>
				<div>
					<img height="100px" src={admv} alt="logo Adrien Gadaud" />
					<img height="100px" src={axenergie} alt="logo Adrien Gadaud" />
					<img height="100px" src={darty} alt="logo Adrien Gadaud" />
					<img height="100px" src={invitation} alt="logo Adrien Gadaud" />
					<img height="100px" src={yeutech} alt="logo Adrien Gadaud" />
					<img height="100px" src={neib} alt="logo Adrien Gadaud" />
					<img height="100px" src={sg} alt="logo Adrien Gadaud" />
					<img height="100px" src={symbol} alt="logo Adrien Gadaud" />
					<img height="100px" src={tbd} alt="logo Adrien Gadaud" />
					<img height="100px" src={tickner} alt="logo Adrien Gadaud" />
				</div>
			</div>
		);
	};
};

export default Gallery;
