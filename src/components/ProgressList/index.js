import React, { Component } from 'react';
import PropTypes from '../../../node_modules/prop-types';
import CircularProgressbar from '../../../node_modules/react-circular-progressbar';
import './ProgressList.css';

class ProgressList extends Component {
	static propTypes = {
	  percentage: PropTypes.number,
	  text: PropTypes.string,
	  title: PropTypes.string,
	  content: PropTypes.string,
	};
	state = {
		count: 0,
		isCounted: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', () => this.handleScroll());
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.handleScroll());
	};

  	handleScroll = () => {
  		if(this.refs[`progress-${this.props.text}`]) {
  			let progress1 = this.refs[`progress-${this.props.text}`];
			if(this.isElementInViewport(progress1) && !this.state.isCounted) {
				this.launchMotion(this.startMotion(this.count), this.stopMotion);
			} else {
			   this.setState({
				count: 0,
			   	isCounted: false,
			   });
			}
  		}
	};

	launchMotion = (fn, cb) => {
		if(fn) {
			fn();
		}
		if(cb) {
			cb();
		}
	};

	startMotion = (fn) => {
	   var intervalId = setInterval(fn(), 15);
	   this.setState({
	   		intervalId: intervalId,
	   });
	};

	stopMotion = () => {
	   clearInterval(this.state.intervalId);
	   this.setState({
	   	isCounted: true,
	   });
	};

	count = () => {
		while(this.state.count < this.props.percentage) {
			this.setState({ count: this.state.count + 1 });
		}
	};

	isElementInViewport = (el) => {
	  const rect = el.getBoundingClientRect();
	  return (
	    rect.top >= 0 &&
	    rect.left >= 0 &&
	    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	};

	render() {
		return (
			<div ref={`progress-${this.props.text}`} className="progress-container">
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
