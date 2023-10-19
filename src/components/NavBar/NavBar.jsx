import { useEffect, useState } from "react";
import imgLogo from "../../assets/CodeLudovic.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import style from "./Navbar.module.css";
import styleApp from "../../App.module.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

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
			const offset = section.offsetTop - 70;
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
			const offset = section.offsetTop - 120;
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
								<li>
									<a name="about" onClick={handleClick}>
										Acerca de
									</a>
								</li>
								<li>
									<a name="skills" onClick={handleClick}>
										Skills
									</a>
								</li>
								<li>
									<a name="projects" onClick={handleClick}>
										Projectos
									</a>
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
