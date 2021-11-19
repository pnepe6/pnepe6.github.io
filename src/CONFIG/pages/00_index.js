/**********
 * HEADER *
 **********/
const meta: {
	title: "Accueil",
	description: "",
	url: "/",
	favicon: "static/img.jpg",
}

/********
 * BODY *
 ********/
const skillsSection = {
	title: "Mes compétences sont variées, toutes orientées vers le monde numérique :",
	skillsList: [
		{
			title: "SALES",
			subtitle: "Avant-Vente & Relation Cient",
			content: "Prospection, Analyse des Besoins, Cahier des Charges...",
			level: 95,
		}
		{
			title: "SEM",
			subtitle: "Communication & Marketing Digital",
			content: "Stratégies SEO, SEA, SMO, GDD, Community Management...",
			level: 80,
		}
		{
			title: "UX/UI",
			subtitle: "Graphisme & Web Design",
			content: "Mobile First, Attractive & Responsive design, Wireframe...",
			level: 50,
		}
		{
			title: "IT",
			subtitle: "Informatique & Multimédia",
			content: "Développement Front, Hardware, Cloud Computing...",
			level: 40,
		}
	],
}

const customersSection = {
	title: "Ils m'ont fait confiance, pourquoi pas vous ?",
	customersList: [
		{
			src: "static/img.jpg",
			alt: "Logo Achat dans ma Ville",
			href: "",
		}
		{
			src: "static/img.jpg",
			alt: "Logo Darty",
			href: "",

		}
		{
			src: "static/img.jpg",
			alt: "Logo The Bubble Day",
			href: "",

		}
		{
			src: "static/img.jpg",
			alt: "Logo Agence Symbol",
			href: "",

		}
	],
};

const storySection = {
	title: "Envie d'en savoir plus?",
	paragraphList: [
		"Diplômé d'un Master Marketing et Communication spécialisé en Marketing Digital, j'ai commencé en tant que conseillé vendeur sur des marchés BtoC puis BtoB.",
		"Devenu Chef de Publicité dans une agence de communication et responsable des recommandations clients, j'ai également créé et géré mes premiers projets web (CMS, SEO, SMO).",
		"Commercial dans l'âme je suis passionné de référencement et d'informatique. Je maîtrise le développement front-end et les fondamentaux du Cloud Computing.",
		"Fort de trois années passées au Viêtnam dans une start-up spécialisée dans le développement de technologies open source, j'ai découvert la gestion de projet AGILE et le travail en milieu anglophone.",
	],
	btn: "Consultez mon CV"
};

const aboutSection = {
	title: "À propos de moi",
	paragraphList: [
		"J'interviens en tant que Consultant Digital et Fonctionnel tout en maîtrisant la gestion et la direction artistique de projet web.",
		"Doté d'un fort relationnel et d'un mental positif, je mets mon expertise du numérique au service de mes clients comme de mes collaborateurs.",
		"Riche en expériences culturelles, j'ai eu la chance de découvrir de nouvelles façons de travailler et de penser aux États-Unis, en Europe et en Asie.",
		"Curieux et passionné par ce que j'entreprends, je reste en constant apprentissage sur les sujets qui m'intéressent, autant personnellement que professionnellement (marketing, communication, technique de vente, informatique et systèmes d'information).",
	],
	img: {
		src: "static/img.jpg",
		alt: "Logo Agence Symbol",
	},
};

// PAGES CONFIGURATIONS
const page = {
		title: "Accueil",
		description: "",
		url: "/",
		sectionList: [
			skillsSection,
			customersSection,
			storySection,
			aboutSection
		]
};