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
    const { isMenuHidden } = this.state;
    return (
      <Router>
        <div>
          <header>
            <nav className={isMenuHidden ? 'hide' : 'show'}>
              <div className="menu-logo">
                <Link
                  onClick={() => this.onClickLogo()}
                  onTouchEnd={() => this.onClickLogo()}
                  to="/"
                >
                  <Logo />
                </Link>
              </div>
              <div
                onClick={() => this.onClickMenu()}
                onTouch={() => this.onClickMenu()}
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
                    onTouch={() => this.onClickMenu()}
                    to="/projects"
                  >
                    Gestion de Projets
                  </Link>
                </li>
                <li className="menu-sub">
                  <p>Digital</p>
                  <ul className="menu-sub-content">
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
                        to="/web"
                      >
                        Developpement Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
                        to="/digital-marketing"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-sub">
                  <p>Design Graphique</p>
                  <ul className="menu-sub-content">
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
                        to="/art"
                      >
                        Arts Graphiques
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
                        to="/design"
                      >
                        PAO
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-sub">
                  <p>A propos</p>
                  <ul className="menu-sub-content">
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
                        to="/cv"
                      >
                        Cv
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => this.onClickMenu()}
                        onTouch={() => this.onClickMenu()}
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
    );
  }
}

export default Navigation;
