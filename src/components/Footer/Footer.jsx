/* eslint-disable */
import style from "./Footer.module.css";
export const Footer = ({ t }) => {
	return (
		<footer className={style.footer}>
			{t("copyright")}
			{new Date().getFullYear()}.
		</footer>
	);
};
