import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Link } from 'react-router-dom';
import Page from '../../../components/Page';
import Telemachus from '../../../static/404-monk_telemachus.jpg';
import './NotFound.css';

class NotFound extends Component {
	render() {
		return (
			<Page>
		        <Helmet>
            		<title>404 - Not Found Page</title>
        	  		<meta name="description" content="Page d'erreur 404 du site https://pnepe6.github.io." />
		        </Helmet>
		        <div className="notfound">
				    <img src={Telemachus} alt="Monk telemachus" />
					<Link to="/">Retour à l'accueil</Link>
		        </div>
			</Page>
		);
	};
};

export default NotFound;
