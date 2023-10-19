import style from "../../App.module.css";
import { ProjectsCarrousel } from "../../components/Carrousel/ProjectsCarrousel";
import { Home } from "../../components/Home/Home";

export const UniqueView = () => {
	return (
		<div className={style.container}>
			<Home />
			<div id="projects"></div>
			<ProjectsCarrousel />
		</div>
	);
};
