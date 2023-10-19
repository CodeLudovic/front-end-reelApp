import style from "./Home.module.css";

export const Home = () => {
	return (
		<div className={style.home}>
			<div className={style.title}>
				<h1>
					<span>
						Hola soy! Daniel Ospina, tambien me hago conocer por el nombre
						CodeLudovic
					</span>
				</h1>
				<p>{"About me"}</p>
				<div className={style.contact}>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/danielor92/"
								target="_blank"
								rel="noopener noreferrer">
								💎
							</a>
						</li>
						<li>
							<a
								href="https://github.com/codeludovic"
								target="_blank"
								rel="noopener noreferrer">
								💎
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
