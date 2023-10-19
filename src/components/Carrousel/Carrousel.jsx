import { Carousel } from "react-responsive-carousel";
import style from "./ProjectsCarrousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgRick from "../../assets/bgram.jpg";
export const Carrousel = () => {
	return (
		<div id="projects" className={style.container}>
			<h1 className={style.__text_projects}>Mis Projectos</h1>
			<Carousel showThumbs={false} showStatus={true} animationHandler="fade">
				<div>
					<img src={imgRick} />
					<p className={style.legend_mine}>Legend</p>
				</div>
				<div>
					<img src={imgRick} />
				</div>
				<div>
					<img src={imgRick} />
				</div>
			</Carousel>
		</div>
	);
};
