import React, { Component } from 'react';
import './SectionMedia.css';

class SectionMedia extends Component {
	render() {
		return (
			<div className="section-media">
				{this.props.children}
			</div>
		);
	};
};

export default SectionMedia;
