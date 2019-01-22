import React, { Component } from 'react';
import './MotionList.css';

const TIME_WORD_TRANSITION = 2000;

class MotionList extends Component {
	state = {
		wordArray: [],
		currentWord: 0,
	};

	componentDidMount() {
		const words = document.getElementsByClassName('word');
		this.launchMotion(words);
	};
	componentWillUnmount() {
		const words = document.getElementsByClassName('word');
		this.stopMotion(words);
	};
	launchMotion = (words) => {
		const { currentWord } = this.state;
		words[currentWord].style.opacity = 1;

		for (let i = 0; i < words.length; i++) {
		  this.splitLetters(words[i]);
		}

		this.changeWord(words);
		setInterval(() => this.changeWord(words), TIME_WORD_TRANSITION);
	}

	stopMotion = (words) => {
		clearInterval(this.changeWord(words));
	};

	changeWord(wordList) {
	  const { wordArray, currentWord } = this.state;
	  let cw = wordArray[currentWord];
	  let nw = currentWord === wordList.length-1 ? wordArray[0] : wordArray[currentWord+1];
	  for (let i = 0; i < cw.length; i++) {
	    this.animateLetterOut(cw, i);
	  }
	  
	  for (let i = 0; i < nw.length; i++) {
	    nw[i].className = 'letter behind';
	    nw[0].parentElement.style.opacity = 1;
	    this.animateLetterIn(nw, i);
	  }
	  this.setState({
	  	currentWord: (currentWord === wordArray.length-1) ? 0 : currentWord+1,
	  })
	}

	animateLetterOut(cw, i) {
	  setTimeout(function() {
			cw[i].className = 'letter out';
	  }, i*80);
	}

	animateLetterIn(nw, i) {
	  setTimeout(function() {
			nw[i].className = 'letter in';
	  }, 340+(i*80));
	}

	splitLetters(word) {
	  const { wordArray } = this.state;
	  let content = word.innerHTML;
	  word.innerHTML = '';
	  let letters = [];
	  for (let i = 0; i < content.length; i++) {
	    let letter = document.createElement('span');
	    letter.className = 'letter';
	    letter.innerHTML = content.charAt(i);
	    word.appendChild(letter);
	    letters.push(letter);
	  }
	  return wordArray[wordArray.push(letters)];
	}

	render() {
		return (
			<div className="motion-list-text">
			  <p className="motion-list-title">Chef de projet</p>
			  <p>
			    <span ref="word" className="word wisteria">Digital</span>
			    <span ref="word" className="word belize">SEM</span>
			    <span ref="word" className="word pomegranate">SEO</span>
			    <span ref="word" className="word wisteria">SMO</span>
			    <span ref="word" className="word belize">Web</span>
			    <span ref="word" className="word pomegranate">eMarketing</span>
			  </p>
			</div>
		);
	};
};

export default MotionList;
