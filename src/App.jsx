import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { UniqueView } from "./views/Home/UniqueView";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function App() {
	const { t, i18n } = useTranslation(["glob"]);
	const [projects, setProjects] = useState([]);

	const handlerLng = (lng) => {
		i18n.changeLanguage(lng);
	};

	const handlerProj = async () => {
		try {
			const response = await axios(
				"https://back-end-reelapp-production.up.railway.app/projects"
			);
			setProjects(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handlerProj();
	}, []);
	return (
		<>
			<Suspense fallback="Cargando traducciones">
				<NavBar t={t} handlerLng={handlerLng} />
				<Routes>
					<Route path="/" element={<UniqueView projects={projects} t={t} />} />
				</Routes>
				<Footer t={t} />
			</Suspense>
		</>
	);
}

export default App;
