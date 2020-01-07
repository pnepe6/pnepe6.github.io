import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import './SectionMedia.css';

const fromLeft = keyframes`
  from {
    left: -100%;
  }

  to {
    left: 0%;
  }
`;

const MotionContent = styled.div`
	height: 100%;
	position: relative;
	animation: ${fromLeft} 500ms ease-in;
`;

class SectionMedia extends Component {
	render() {
		return (
			<MotionContent>
				<div className="section-media">
					{this.props.children}
				</div>
			</MotionContent>
		);
	};
};

export default SectionMedia;
