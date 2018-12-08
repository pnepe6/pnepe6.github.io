import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Art from '../Pages/Art';
import Contact from '../Pages/Contact';
import Cv from '../Pages/Cv';
import Design from '../Pages/Design';
import Projects from '../Pages/Projects';
import Seo from '../Pages/Seo';
import Web from '../Pages/Web';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav className="header-hd">
              <div className="hd-logo">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <ul className="hd-menu">
                <li>
                  <Link to="/cv">Cv</Link>
                </li>
                <div className="dropdown">
                  <p>Graphic Design</p>
                  <div className="dropdown-content">
                    <Link to="/design">Design</Link>
                    <Link to="/art">Art</Link>
                  </div>
                </div>
                <div className="dropdown">
                  <p>Digital</p>
                  <div className="dropdown-content">
                    <Link to="/web">Web</Link>
                    <Link to="/digital-marketing">Digital Marketing</Link>
                  </div>
                </div>
                <div className="dropdown">
                  <Link to="/projects">Projets</Link>
                </div>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/cv/" component={Cv} />
            <Route path="/design/" component={Design} />
            <Route path="/art/" component={Art} />
            <Route path="/digital-marketing/" component={Seo} />
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
