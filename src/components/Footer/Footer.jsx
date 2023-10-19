import style from "./Footer.module.css";
export const Footer = () => {
	return (
		<footer className={style.footer}>
			Todos los derechos reservados, Codeludovic &copy;{" "}
			{new Date().getFullYear()}
		</footer>
	);
};
