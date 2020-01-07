import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './SectionActionCall.css';
import { device } from '../../utils/deviceSize.js';

const CallLink = styled(Link)`
		line-height: 30px !important;
		text-align: center !important;
		font-size: 26px !important;
		background-color: #FFF !important;
		border: 1px solid #265d63 !important;
		border-radius: 50px !important;
		padding: 25px 40px !important;
		text-decoration: none !important;
		color: #265d63 !important;
		display: block !important;
		width: 50% !important;
		margin: 50px auto 0 auto !important;
		transition: color 500ms, background-color 1s;
		z-index: 0 !important;

		&:hover {
			position: relative !important;
			background-color: #265d63 !important;
			color: #FFF !important;
			transition: color 500ms, background-color 1s; 
	    }
	    @media ${device.xxs} {
		    max-width: 50% !important;
		}
		@media ${device.l} {
		    max-width: 35% !important;
  		}
		@media ${device.xl} {
		    max-width: 20% !important;
  		}
`;


class SectionActionCall extends Component {
	render() {
		return (
			<div className="action-call">
				<div className="action-call-content">
					{this.props.children}
				</div>
				<CallLink to={this.props.btn.href}>
					{this.props.btn.content}
				</CallLink>
				<span></span>
			</div>
		);
	};
};

export default SectionActionCall;