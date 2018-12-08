import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="tabs-tb">
				{children}
			</div>
		);
	};
};

export default Tabs;
