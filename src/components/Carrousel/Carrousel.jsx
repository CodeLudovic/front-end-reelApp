/* eslint-disable */
import { Carousel } from "react-responsive-carousel";
import style from "./ProjectsCarrousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

export const Carrousel = ({ projects }) => {
	const [lenguages, setLenguages] = useState("");

	const handlerLeng = (element) => {
		setLenguages(element);
		if (lenguages.split("").length > 0) {
			setLenguages(element.concat(", " + lenguages));
		} else {
			setLenguages(element);
		}
	};
	// let elem = "";
	// for (let i = 0; i < projects.lenguages.length; i++) {
	// 	elem += projects.lenguages[i];
	// }

	useEffect(() => {
		//handlerLeng();
	}, []);
	let prop = [];
	console.log(projects);
	return (
		<div id="projects" className={style.container}>
			<h1 className={style.__text_projects}>Mis Projectos</h1>
			<Carousel
				showStatus={true}
				animationHandler="fade"
				showIndicators={false}>
				{projects?.map((project, index) => (
					<div key={index}>
						<img src={project.image} />
						<p className={style.legend_mine}>{project.lenguages.join(", ")}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
};
