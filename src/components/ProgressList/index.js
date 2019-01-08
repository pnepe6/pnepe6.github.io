import React, { Component } from 'react';
import PropTypes from '../../../node_modules/prop-types';
import CircularProgressbar from '../../../node_modules/react-circular-progressbar';
import './ProgressList.css';

class ProgressList extends Component {
	static propTypes = {
		isActive: PropTypes.bool,
	  	percentage: PropTypes.number,
	  	text: PropTypes.string,
	  	title: PropTypes.string,
	  	content: PropTypes.string,
	};

	static defaultProps = {
		isActive: false,
	}

	state = {
		count: 0,
	};

	componentWillReceiveProps(nextProps){
		if(nextProps.isActive) {
			this.count();
		};
		if(!nextProps.isActive) {
			this.resetCounter();
		}
	};	

	count = () => {
		let number = this.state.count
		for (var i = number; i < this.props.percentage; i++) {
			number++;
		    this.setState({ count: number});
		}
	};

	resetCounter = () => {
		this.setState({ count: 0});
	}

	render() {
		return (
			<div className="progress-container">
				<CircularProgressbar
				  percentage={this.state.count}
				  text={this.props.text}
				/>
				<h3>{this.props.title}</h3>
				<small>{this.props.content}</small>
			</div>
		);
	};
};

export default ProgressList;
