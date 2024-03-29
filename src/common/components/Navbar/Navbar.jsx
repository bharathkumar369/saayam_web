import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();
	const { t, i18n } = useTranslation();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img
				src='https://saayam.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75'
				alt='logo'
			/>

			<nav className='nav' ref={navRef}>
				<ul>
					<CustomLink to='/'>{t("navbar.home")}</CustomLink>
					<CustomLink to='/directors'>
						{t("navbar.directors")}
					</CustomLink>
					<CustomLink to='/donation'>
						{t("navbar.donation")}
					</CustomLink>
					<button
						className='nav-btn nav-close-btn'
						onClick={showNavbar}
					>
						<FaTimes />
					</button>
				</ul>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
			<select
				onChange={(e) => i18n.changeLanguage(e.target.value)}
				className='text-black'
			>
				<option value='en'>English</option>
				<option value='es'>Spanish</option>
				<option value='fr'>French</option>
				<option value='hi'>Hindi</option>
				<option value='te'>Telugu</option>
				<option value='zh'>Chineese</option>
				<option value='ja'>Japanese</option>
			</select>
		</header>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}

export default Navbar;
