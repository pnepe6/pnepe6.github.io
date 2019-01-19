import React, { Component } from 'react';
import PropTypes from '../../../node_modules/prop-types';
import './Collapse.css';

class Collapse extends Component {
	static propTypes = {
		clickable: PropTypes.string,
	};

	state = {
		isActive: false,
	};

	onChangeCollapse = () => {
		this.setState({
			isActive: !this.state.isActive,
		});
	};

	render() {
		const { isActive } = this.state;
		return (
			<div className="collapse-container">
				<div
				  onClick={() => this.onChangeCollapse()}
				  className={isActive ? "clickable unactive" : "clickable active"}
				>
					<span>{this.props.clickable}</span>
				</div>
	            <div
				    onClick={() => this.onChangeCollapse()}
	                className={isActive ? 'collapse-btn-cross collapse-btn is-active' : 'collapse-btn-cross collapse-btn'}
	            >
	                <span className="btn-line"></span>
	                <span className="btn-line"></span>
	                <span className="btn-line"></span>
	            </div>
				<div
				  className={isActive ? "collapse-content collapse-show" : "collapse-content collapse-hide"}
				 >
					{this.props.children}
				</div>
			</div>
		);
	};
};

export default Collapse;
