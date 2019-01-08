import React, { Component } from 'react';
import './SectionIntro.css';

class SectionIntro extends Component {
	render() {
		return (
			<div className="section-intro">
				{this.props.children}
			</div>
		);
	};
};

export default SectionIntro;
