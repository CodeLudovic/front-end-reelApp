/* eslint-disable */
import { useEffect, useState } from "react";
import imgLogo from "../../assets/Codeludovic2.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./NavBar.module.css";
import styleApp from "../../App.module.css";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

const Navbar = ({ t, handlerLng }) => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isOn, setIsOn] = useState(true);
	const toggleSwitch = (e) => {
		setIsOn(!isOn);
		handleClick(e);

		if (!isOn) {
			handlerLng("es");
		} else {
			handlerLng("en");
		}
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768 && open) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [open]);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section && sectionId === "projects") {
			const offset = section.offsetTop - 160;
			window.scrollTo({
				top: offset,
				behavior: "smooth",
			});
		} else if (section && sectionId === "about") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else if (section && sectionId === "skills") {
			const offset = section.offsetTop;
			window.scrollTo({
				top: offset,
				behavior: "smooth",
			});
		} else if (sectionId === "logo") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const handleClick = (e) => {
		if (window.innerWidth < 768) {
			setOpen(!open);
		}

		scrollToSection(e.target.name);
	};

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};

	return (
		<nav className={`${scrolled ? style.scrolled : ""}`}>
			<div className={styleApp.container + " " + style.navContainer}>
				<div className={style.navbarLogo}>
					<img
						src={imgLogo}
						width="200px"
						onClick={() => scrollToSection("logo")}
					/>
				</div>

				<div className={style.navbarAssets}>
					<div className={`${style.navbarLinks} ${open ? style.active : ""}`}>
						<div>
							<ul>
								<div className={style.toggleLng}>
									<Flag code="esp" height="21px" />
									<div
										className={style.switch}
										data-isOn={isOn}
										onClick={toggleSwitch}>
										<motion.div
											className={style.handle}
											layout
											transition={spring}
										/>
									</div>
									<Flag code="usa" height="21px" />
								</div>
								<li>
									<button
										className={style.outline_button}
										name="about"
										onClick={handleClick}>
										{t("about_me")}
									</button>
								</li>
								<li>
									<button
										className={style.outline_button}
										name="projects"
										onClick={handleClick}>
										{t("projects")}
									</button>
								</li>
								<li>
									<button
										className={style.outline_button}
										name="skills"
										onClick={handleClick}>
										{t("skills")}
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div className={style.navbarToggle} onClick={handleClick}>
						{open ? (
							<CloseIcon className={style.menuClose} />
						) : (
							<MenuIcon className={style.menuOpen} />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
