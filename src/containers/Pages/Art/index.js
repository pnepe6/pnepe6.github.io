import React, { Component } from 'react';
import paintClown from '../../../static/00_paint_agd-clown-fish.jpg';
import paintComedia from '../../../static/00_paint_agd-comedia.jpg';
import paintFF from '../../../static/00_paint_agd-final-fantasy.jpg';
import paintGreekSea from '../../../static/00_paint_agd-greek-sea.jpg';
import paintCharente from '../../../static/00_paint_agd-la-charente.jpg';
import paintLightHouse from '../../../static/00_paint_agd-light-house.jpg';
import paintParis from '../../../static/00_paint_agd-paris.jpg';
import paintThahiti from '../../../static/00_paint_agd-thaiti.jpg';
import paintVenice from '../../../static/00_paint_agd-venice.jpg';
import paintVenise from '../../../static/00_paint_agd-venise.jpg';
import paintVivaChampagne from '../../../static/00_paint_agd-viva-champagne.jpg';
import paintZebra from '../../../static/00_paint_agd-zebra.jpg';
import paintSainteGenevieve from '../../../static/00_paint_catelin-sainte-genevieve.jpg';
import paintToscana from '../../../static/00_paint_catelin-toscana.jpg';
import paintVigud from '../../../static/00_paint_vigud-toscana.jpg';
import SectionTop from '../../../components/SectionTop';
import SectionIntro from '../../../components/SectionIntro';
import MediaBoard from '../../../components/MediaBoard';
import SectionMedia from '../../../components/SectionMedia';

class Art extends Component {
	render() {
		return (
			<div>
				<SectionTop>
					<h1>ARTS GRAPHIQUES</h1>
				</SectionTop>
				<SectionIntro>
					<p><strong>Dès l'âge de 11 ans j'ai commencé à suivre des cours de dessin.</strong></p>
					<p>Je me passionne pour l'art en général, depuis les oeuvres européenes jusqu'aux illustrations asiatiques en passant par le grand Salvador Dali!</p>
				</SectionIntro>
				<SectionMedia>
					<h2>Découvrez mes peintures</h2>
					<h3>Peinture à l'huile</h3>
					<MediaBoard>
					  	<figure>
							<img src={paintClown} alt="Plage de Tahiti, peinture à l'huile" />
							<figcaption>Poisson clown, peinture à l'huile.</figcaption>
						</figure>
						<figure>
							<img src={paintGreekSea} alt="Mer de Grèce, peinture à l'huile" />
							<figcaption>Mer de Grèce, peinture à l'huile.</figcaption>
						</figure>
					   	<figure>
							<img src={paintCharente} alt="La Charente, peinture à l'huile" />
							<figcaption>La Charente, peinture à l'huile.</figcaption>
						</figure>
					   	<figure>
							<img src={paintLightHouse} alt="Phare Breton, peinture à l'huile" />
							<figcaption>Phare Breton, peinture à l'huile.</figcaption>
						</figure>
					    <figure>
							<img src={paintSainteGenevieve} alt="Montagne Sainte Geneviève, peinture à l'huile" />
						    <figcaption>Montagne Sainte Geneviève (Catelin), peinture à l'huile.</figcaption>
						</figure>
					    <figure>
							<img src={paintToscana} alt="La Toscagne, peinture à l'huile" />
						    <figcaption>La Toscagne (Catelin), peinture à l'huile.</figcaption>
						</figure>
					    <figure>
							<img src={paintVigud}  alt="Toscana, peinture à l'huile" />
						    <figcaption>Toscana (Vigud), peinture à l'huile.</figcaption>
						</figure>
					</MediaBoard>
					<h3>Aquarelle</h3>
					<MediaBoard>
						<figure>
							<img src={paintThahiti} alt="Plage de Tahiti, peinture aquarelle" />
							<figcaption>Plage de Tahiti, aquarelle.</figcaption>
						</figure>
						<figure>
							<img src={paintComedia} alt="Comedia del Arte, peinture aquarelle" />
							<figcaption>Comedia del Arte, aquarelle.</figcaption>
						</figure>
						<figure>
							<img src={paintFF} alt="Final Fantasy, peinture aquarelle" />
							<figcaption>Final Fantasy, aquarelle.</figcaption>
						</figure>
						<figure>
							<img src={paintParis} alt="La Seine, peinture aquarelle" />
							<figcaption>La Seine, aquarelle.</figcaption>
						</figure>
					    <figure>
							<img src={paintVenice} alt="Canaux de Venise, peinture aquarelle" />
						    <figcaption>Canaux de Venise, aquarelle.</figcaption>
						</figure>
					    <figure>
							<img src={paintVenise} alt="Venise, peinture aquarelle" />
						    <figcaption>Venise, aquarelle.</figcaption>
						</figure>
					</MediaBoard>
					<h3>Pastel et encre de chine</h3>
					<MediaBoard>
					    <figure>
							<img src={paintVivaChampagne} alt="Viva Champagne, pastelle" />
						    <figcaption>Viva Champagne, pastelle.</figcaption>
						</figure>
					    <figure>
							<img src={paintZebra} alt="Zèbre, peinture à l'encre de chine" />
						    <figcaption>El Zebra, encre de chine.</figcaption>
						</figure>
					</MediaBoard>
				</SectionMedia>
			</div>
		);
	};
};

export default Art;
