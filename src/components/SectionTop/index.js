import React, { Component } from 'react';
import './SectionTop.css';

class SectionTop extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="section-top">
				{children}
			</div>
		);
	};
};

export default SectionTop;
