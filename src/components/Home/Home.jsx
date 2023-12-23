/* eslint-disable */
import { motion } from "framer-motion";
import style from "./Home.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const Home = ({ t }) => {
	return (
		<motion.div
			animate={{ y: 20 }}
			transition={{ type: "spring", stiffness: 50 }}
			className={style.home}>
			<div className={style.title}>
				<h1>{t("about_me")} </h1>
			</div>
			<br />
			<h3 className={style.about} id="about">
				{t("aboutme_1")}
				<br />
				<br />
				{t("aboutme_2")}
				<br />
				<br />
				{t("aboutme_3")} 🗡️✨
			</h3>
			<br />
			<h4>{t("connect")}</h4>
			<br />
			<div className={style.contact}>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/danielor92/"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedIn style={{ color: "#3b76ee", fontSize: "25px" }} />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/codeludovic"
							target="_blank"
							rel="noopener noreferrer">
							<GitHub style={{ color: "white", fontSize: "25px" }} />
						</a>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};
