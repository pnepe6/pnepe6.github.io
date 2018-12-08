import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		const { children } = this.props;
		return (
			<div>
				{children}
			</div>
		);
	};
};

export default Header;
