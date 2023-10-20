/* eslint-disable */
import style from "./ProjectsCarrousel.module.css";
import { Carrousel } from "./Carrousel";
import { Project } from "../Project/Project";

export const ProjectsCarrousel = ({ projects }) => {
	return (
		<div>
			<h1 className={style.__text_projects}>Mis Projectos</h1>
			<div id="projects" className={style.container_cards}>
				{/* <Carrousel projects={projects} /> */}
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</div>
	);
};
