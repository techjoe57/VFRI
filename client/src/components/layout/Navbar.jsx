import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ABOUT_DROPDOWN, NAV_LINKS } from "../../data/content";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState(""); // New state for active section
	const [menuOpen, setMenuOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);
	const navTextClass =
		"font-sans text-[0.82rem] font-semibold tracking-[0.12em] uppercase";

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", handler);

		// Watch sections on the page
		const sections = document.querySelectorAll("section[id]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 }
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			window.removeEventListener("scroll", handler);
			observer.disconnect();
		}
	}, [location.pathname]);

	// Reset active section when navigating to a new route
	useEffect(() => {
		setActiveSection("");
	}, [location.pathname]);

	// Check if the current route should use the green theme
	const isGreenPage =
	location.pathname.includes("/focus") ||
	location.pathname.includes("/environment") ||
	location.pathname.includes("/team") ||
	location.pathname.includes("/news") ||
	location.pathname.includes("/programs") ||
	location.pathname.includes("/achievements") ||
	(location.pathname === "/" && (
		activeSection === "focus" || 
		activeSection === "values" || 
		activeSection === "about" ||
	 	activeSection === "home"
	));

	//dynamic colour variables based on the route
	const titleTextColor = isGreenPage ? "text-green-deep" : "text-crimson-deep";
	const navTextColor = isGreenPage ? "text-green-deep" : "text-crimson-dark";
	const hoverTextColor = isGreenPage ? "hover:text-green-mid" : "hover:text-crimson-light";
	const hamburgerBgColor = isGreenPage ? "bg-green-deep" : "bg-crimson-mid";
	const mobileMenuBg = isGreenPage ? "bg-green-deep" : "bg-crimson-mid";

	const handleNav = (item) => {
		setMenuOpen(false);

		if (item.type === "route") {
			navigate(item.href);
			return;
		}

		if (location.pathname !== "/") {
			navigate("/");

			setTimeout(() => {
				document
					.querySelector(item.href)
					?.scrollIntoView({ behavior: "smooth" });
			}, 100);
			return;
		}

		document
			.querySelector(item.href)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
      ${scrolled ? "py-1 px-7 md:px-11" : "py-3 px-7 md:px-11"}
      bg-gold backdrop-blur-md border-b border-gold/20`}>
			<a
				href="#home"
				onClick={() =>
					handleNav({ label: "Home", href: "#home", type: "scroll" })
				}
				className="flex items-center gap-3 no-underline">
				<div className="w-16 h-16 relative flex-shrink-0">
					<img
						src="/logo2.png"
						alt="Logo"
						className="w-full h-full"
					/>
				</div>
				<div className="leading-tight font-sans">
					<strong className={`block font-display font-bold text-md ${titleTextColor} tracking-wide`}>
						Victoria Falls Regional Institute
					</strong>
					<span className={`text-[0.6rem] ${navTextColor} tracking-[0.12em] uppercase`}>
						Reimagining Africa Through Dialogue
					</span>
				</div>
			</a>

			<ul className="hidden md:flex items-center gap-8 list-none">
				<li className="relative group">
					<button className={`flex items-center gap-2 ${navTextColor} text-sm font-bold tracking-widest uppercase`}>
						About Us
						<ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
					</button>

					<div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
						{ABOUT_DROPDOWN.map((item) => (
							<button
								key={item.label}
								onClick={() => handleNav(item)}
								className={`w-full text-left px-5 py-4 text-md ${navTextColor} hover:bg-gold/10 transition-colors`}>
								{item.label}
							</button>
						))}
					</div>
				</li>

				{NAV_LINKS.map((item) => (
					<li key={item.label}>
						<button
							onClick={() => handleNav(item)}
							className={`${navTextColor} text-sm font-bold tracking-widest uppercase ${hoverTextColor} transition-colors duration-200`}>
							{item.label}
						</button>
					</li>
				))}
			</ul>

			{/* Desktop CTA Button */}
			
			<div className="hidden md:block">
				<button 
					onClick={() => navigate("/service-inquiry")}
					className="bg-crimson-dark hover:bg-crimson-mid text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
					Request Our Services
				</button>
			</div>

			{/* Hamburger */}
			<button
				className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu">
				<span
					className={`block w-6 h-0.5 ${hamburgerBgColor} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
				/>
				<span
					className={`block w-6 h-0.5 ${hamburgerBgColor} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
				/>
				<span
					className={`block w-6 h-0.5 ${hamburgerBgColor} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
				/>
			</button>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className={`absolute top-full left-0 right-0 ${mobileMenuBg} border-t border-gold/20 flex flex-col md:hidden shadow-2xl overflow-hidden`}>
					{/* Home */}
					<button
						onClick={() =>
							handleNav({
								label: "Home",
								href: "#home",
								type: "scroll",
							})
						}
						className={`px-8 py-5 text-gold text-left hover:bg-gold/10 transition-colors border-0 bg-transparent border-b border-white/5 ${navTextClass}`}>
						Home
					</button>

					<div className="border-b border-white/5">
						<button
							onClick={() => setAboutOpen(!aboutOpen)}
							className={`w-full px-8 py-5 flex items-center justify-between text-gold hover:bg-gold/10 transition-colors bg-transparent border-0 ${navTextClass}`}>
							<span>About Us</span>
							<ChevronDown
								className={`h-4 w-4 transition-transform duration-300 ${
									aboutOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						<div
							className={`overflow-hidden transition-all duration-300 ${
								aboutOpen
									? "max-h-96 opacity-100"
									: "max-h-0 opacity-0"
							}`}>
							{ABOUT_DROPDOWN.map((item) => (
								<button
									key={item.label}
									onClick={() => {
										handleNav(item);
										setAboutOpen(false);
									}}
									className={`w-full pl-14 pr-8 py-4 text-left text-gold/90 hover:bg-gold/10 hover:text-gold transition-colors bg-transparent border-0 border-t border-white/5 ${navTextClass}`}>
									{item.label}
								</button>
							))}
						</div>
					</div>

					{NAV_LINKS.map((item) => (
						<button
							key={item.label}
							onClick={() => handleNav(item)}
							className={`px-8 py-5 text-gold text-left hover:bg-gold/10 transition-colors border-0 bg-transparent border-b border-white/5 ${navTextClass}`}>
							{item.label}
						</button>
					))}

					<div className="p-6">
						<button
							onClick={() =>
								handleNav({
									label: "Contact",
									href: "#contact",
									type: "scroll",
								})
							}
							className="btn-primary w-full text-center">
							Contact Us
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
