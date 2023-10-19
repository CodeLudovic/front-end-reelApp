import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { UniqueView } from "./views/Home/UniqueView";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<UniqueView />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
