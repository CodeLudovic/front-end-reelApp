/* eslint-disable */
import style from "./ProjectsCarrousel.module.css";
import { Carrousel } from "./Carrousel";

export const ProjectsCarrousel = ({ projects }) => {
	return (
		<div>
			<div className={style.container}>
				<Carrousel projects={projects} />
			</div>
		</div>
	);
};
