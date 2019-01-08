import React, { Component } from 'react';
import './MediaBoard.css';

class MediaBoard extends Component {
	render() {
		return (
			<div className="columns">
				{this.props.children}
			</div>
		);
	};
};

export default MediaBoard;
