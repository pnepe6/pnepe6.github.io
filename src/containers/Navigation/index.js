import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Logo from '../../components/Logo';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Cv from '../Pages/Cv';
import Design from '../Pages/Design';
import Digital from '../Pages/Digital';
import Projects from '../Pages/Projects';
import NotFoundPage from '../Pages/NotFound';
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
    const classMenuHidden = isMenuHidden ? 'hide' : 'show';
    const classMenuSticky = isMenuSticky ? 'fixed-menu' : 'top-menu';
    return (
      <div>
        <Router>
          <div>
            <header>
              <nav className={classMenuHidden, classMenuSticky}>
                <div className="menu-logo">
                  <Link
                    onClick={() => this.onClickLogo()}
                    to="/"
                  >
                    <Logo isSticky={isMenuSticky} />
                  </Link>
                </div>
                <div
                  onClick={() => this.onClickMenu()}
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
                      className="menu-link-main"
                      onClick={() => this.onClickMenu()}
                      to="/digital-marketing"
                    >
                      Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-link-main"
                      onClick={() => this.onClickMenu()}
                      to="/design"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-link-main"
                      onClick={() => this.onClickMenu()}
                      to="/chef-de-projet-digital"
                    >
                      Gestion de Projet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-link-main"
                      onClick={() => this.onClickMenu()}
                      to="/cv"
                    >
                      CV
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-link-main"
                      onClick={() => this.onClickMenu()}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
            <section className={isMenuHidden ? 'hide' : 'show'}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cv/" component={Cv} />
                <Route path="/design/" component={Design} />
                <Route path="/digital-marketing/" component={Digital} />
                <Route path="/chef-de-projet-digital/" component={Projects} />
                <Route path="/contact/" component={Contact} />
                <Route path="/404/" component={NotFoundPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </section>

            
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
