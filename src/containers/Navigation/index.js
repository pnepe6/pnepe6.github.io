import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Home from '../Pages/Home';
import Art from '../Pages/Art';
import Contact from '../Pages/Contact';
import Cv from '../Pages/Cv';
import Design from '../Pages/Design';
import Digital from '../Pages/Digital';
import Projects from '../Pages/Projects';
import Web from '../Pages/Web';
import './Navigation.css';

const bodyOverflowDelay = 1000; //1 second

class Navigation extends Component {
  state = {
    isMenuHidden: true,
    isMenuSticky: false,
    menuAction: "",
    scrollPos: 0,
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollingDirection, false);
    window.addEventListener('scroll', this.handleScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollingDirection);
    window.removeEventListener('scroll', this.handleScroll);
  };

  scrollingDirection = () => {
    if ((document.body.getBoundingClientRect()).top > this.state.scrollPos)
      this.setState({
        isMenuSticky: true,
      });
    else
      this.setState({
        isMenuSticky: false,
      });
    // saves the new position for iteration.
    this.setState({ scrollPos: document.body.getBoundingClientRect().top });
  };

  handleScroll = () => {
    // Navbar is 60px in height. Could also get height of DOM node here using
    // findDOMNode(this.refs.navRef) and subtract that.
    
    var heightToShow = 1;

    // if (window.pageYOffset > heightToShow) {
    //   this.setState({ isMenuSticky: true });
    // }
 
    if (window.pageYOffset < heightToShow) {
      this.setState({
        isMenuSticky: false,
      });
    }
  };

  onClickMenu = () => {
    if(window.innerWidth < 900) {
        const { isMenuHidden } = this.state;
        this.setState({
          isMenuHidden: !isMenuHidden,
        });
        if(isMenuHidden) {
          document.body.style.overflow = 'hidden';
        } else {
          setTimeout(function() {
            document.body.style.overflow = 'auto';
          }, bodyOverflowDelay);
        }
    }

  };

  onClickLogo = () => {
    if(!this.state.isMenuHidden) {
      this.onClickMenu();
    }
  };

  render() {
    const { isMenuHidden, isMenuSticky } = this.state;
    return (
      <div>
        <Router>
          <div>
            <header>
              <nav className={`${isMenuHidden ? 'hide' : 'show'} ${isMenuSticky ? 'fixed-menu' : 'top-menu'}`}>
                <div className="menu-logo">
                  <Link
                    onClick={() => this.onClickLogo()}
                    onTouchStart={() => this.onClickLogo()}
                    to="/"
                  >
                    <Logo />
                  </Link>
                </div>
                <div
                  onClick={() => this.onClickMenu()}
                  onTouchStart={() => this.onClickMenu()}
                  className={isMenuHidden ? 'hamburger' : 'hamburger is-active'}
                  id="hamburger-9"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>

                <ul className={isMenuHidden ? 'hide' : 'show'}>
                  <li>
                    <Link
                      onClick={() => this.onClickMenu()}
                      onTouchStart={() => this.onClickMenu()}
                      to="/projects"
                    >
                      Gestion de Projet
                    </Link>
                  </li>
                  <li className="menu-sub">
                    <p>Digital</p>
                    <ul className="menu-sub-content">
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/web"
                        >
                          Developpement Web
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/digital-marketing"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-sub">
                    <p>Graphisme</p>
                    <ul className="menu-sub-content">
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/design"
                        >
                          Design Graphique
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/art"
                        >
                          Art
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-sub">
                    <p>À propos</p>
                    <ul className="menu-sub-content">
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/cv"
                        >
                          CV
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => this.onClickMenu()}
                          onTouchStart={() => this.onClickMenu()}
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
              </nav>
            </header>

           
            <section className={isMenuHidden ? 'hide' : 'show'}>
              <Route path="/" exact component={Home} />
              <Route path="/cv/" component={Cv} />
              <Route path="/design/" component={Design} />
              <Route path="/art/" component={Art} />
              <Route path="/digital-marketing/" component={Digital} />
              <Route path="/web/" component={Web} />
              <Route path="/projects/" component={Projects} />
              <Route path="/contact/" component={Contact} />
            </section>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
