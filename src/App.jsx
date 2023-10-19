import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { UniqueView } from "./views/Home/UniqueView";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [projects, setProjects] = useState([]);

	const handlerProj = async () => {
		try {
			const response = await axios("http://localhost:3001/projects");
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
			<NavBar />
			<Routes>
				<Route path="/" element={<UniqueView projects={projects} />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
