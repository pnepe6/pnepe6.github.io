import React, { Component } from 'react';
import './SectionContent.css';

class SectionContent extends Component {
	render() {
		return (
			<div className="section-content">
				{this.props.children}
			</div>
		);
	};
};

export default SectionContent;
