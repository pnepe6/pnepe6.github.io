import React, { Component } from 'react';
import './SectionActionCall.css';

class SectionActionCall extends Component {
	render() {
		return (
			<div className="action-call">
				<div className="action-call-content">
					{this.props.children}
				</div>
				<span> </span>
			</div>
		);
	};
};

export default SectionActionCall;
