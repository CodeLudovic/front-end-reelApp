import style from "./Home.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const Home = () => {
	return (
		<div className={style.home}>
			<div className={style.title}>
				<h1>Acerca de mi: </h1>
			</div>
			<br />
			<h3 className={style.about} id="about">
				Hola! soy Daniel Ospina, tambien me hago conocer como CodeLudovic, soy
				Originario de Cali, Colombia. Mi pasión por los videojuegos, en especial
				sagas como Final Fantasy y los juegos de rol, ha sido una constante en
				mi vida. Mi viaje en el mundo del desarrollo me ha llevado a convertirme
				en un FullStack Developer.
				<br />
				<br />
				He adquirido conocimientos y experiencia en proyectos personales y
				colaborativos, utilizando tecnologías y frameworks como JavaScript,
				React.Js, Angular, Express, Redux, Node.Js, y más . También he explorado
				el mundo de PHP, he incursionado en el framework Laravel en su versión 6
				y he emprendido proyectos personales en el framework Ionic y TypeScript.
				<br />
				<br />
				Mi vida consiste en un constante tira y afloja con las llaves del
				teclado, donde mi cerebro es el DJ que mezcla HTML, CSS, JavaScript y
				otros lenguajes. Pero, como todo héroe, también necesito un descanso, y
				es ahí cuando me convierto en un Guerrero de la Luz en el reino de
				Eorzea. 🗡️✨
			</h3>
			<br />
			<h4>Conectate conmigo en:</h4>
			<br />
			<div className={style.contact}>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/danielor92/"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedIn style={{ color: "blue", fontSize: "25px" }} />
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
		</div>
	);
};
