import style from "./ProjectsCarrousel.module.css";
import { Carrousel } from "./Carrousel";

export const ProjectsCarrousel = () => {
	return (
		<div>
			<div className={style.container}>
				<Carrousel />
			</div>
		</div>
	);
};
