/* eslint-disable */
import icons from "../../utils/icons";
import style from "./Project.module.css";

export const Project = ({ project }) => {
	const languageIcons = project.lenguages.map((language) => {
		const icon = icons.find((icon) => icon.name === language);
		return icon ? icon : null;
	});
	return (
		<div className={style.project_card}>
			<a href={project.url} target="_blank">
				<div className={style.project_icon}>
					{languageIcons.map((icon, index) => (
						<img
							key={index}
							src={icon.urlPath}
							alt="JavaScript Icon"
							width="24px"
							height="24px"
						/>
					))}
				</div>
				<div className={style.project_name}>{project.name}</div>
				<div
					className={style.project_image}
					style={{ backgroundImage: `url(${project.image})` }}></div>
			</a>
		</div>
	);
};
