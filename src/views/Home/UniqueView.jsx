import style from "../../App.module.css";
import { ProjectsCarrousel } from "../../components/Carrousel/ProjectsCarrousel";
import { Home } from "../../components/Home/Home";
import { Skills } from "../../components/Skills/Skills";

export const UniqueView = () => {
	return (
		<div className={style.container}>
			<Home />
			<Skills />
			<ProjectsCarrousel />
		</div>
	);
};
