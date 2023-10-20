/* eslint-disable */
import style from "../../App.module.css";
import { ProjectsCarrousel } from "../../components/Carrousel/ProjectsCarrousel";
import { Home } from "../../components/Home/Home";
import { Skills } from "../../components/Skills/Skills";

export const UniqueView = ({ projects, t }) => {
	return (
		<div className={style.container}>
			<Home t={t} />
			<ProjectsCarrousel projects={projects} t={t} />
			<Skills t={t} />
		</div>
	);
};
