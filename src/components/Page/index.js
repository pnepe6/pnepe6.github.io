import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";

const fromLeft = keyframes`
  from {
    left: -100%;
  }

  to {
    left: 0%;
  }
`;

const MotionPage = styled.div`
	height: 100%;
	position: relative;
	animation: ${fromLeft} 500ms ease-in;
`;

class Page extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<MotionPage>
				{this.props.children}
			</MotionPage>
		);
	};
};

export default Page;
