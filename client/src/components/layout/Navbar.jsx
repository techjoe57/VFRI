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
		"font-sans text-sm font-medium tracking-wide normal-case";

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

	// Check if the current route should use the green theme
	const effectiveActiveSection =
		location.pathname === "/" ? activeSection : "";
	const isGreenPage =
	location.pathname.includes("/focus") ||
	location.pathname.includes("/environment") ||
	location.pathname.includes("/team") ||
	location.pathname.includes("/news") ||
	location.pathname.includes("/programs") ||
	location.pathname.includes("/achievements") ||
	location.pathname.includes("/our-story") ||
	location.pathname.includes("/service-inquiry") ||
	(location.pathname === "/" && (
		effectiveActiveSection === "focus" || 
		effectiveActiveSection === "values" || 
		effectiveActiveSection === "about" ||
	 	effectiveActiveSection === "home"
	));

	//dynamic colour variables based on the route
	const titleTextColor = isGreenPage ? "text-green-deep" : "text-crimson-deep";
	const navTextColor = isGreenPage ? "text-green-deep" : "text-crimson-dark";
	const hoverTextColor = isGreenPage ? "hover:text-green-mid" : "hover:text-crimson-light";
	const hamburgerBgColor = isGreenPage ? "bg-green-deep" : "bg-crimson-mid";
	const mobileMenuBg = isGreenPage ? "bg-green-deep" : "bg-crimson-mid";
	const ctaBgColor = isGreenPage 
    ? "bg-green-deep hover:bg-green-mid" 
    : "bg-crimson-dark hover:bg-crimson-mid";

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
			className={`fixed inset-x-0 top-0 z-50 flex w-full max-w-none items-center justify-between transition-all duration-300
      ${scrolled ? "py-1.5 px-6 md:px-12" : "py-2.5 px-6 md:px-12"}
      bg-gold backdrop-blur-md border-b border-gold/20`}>
			<div className="flex min-w-0 flex-1 items-center gap-2 no-underline pr-3 sm:gap-3">
				<div className="relative h-14 w-14 flex-shrink-0 transition-all duration-300 sm:h-[4rem] sm:w-[4rem]">
					<img
						src="/logo2.png"
						alt="Logo"
						className="h-full w-full"
					/>
				</div>
				<div className="min-w-0 leading-tight font-sans">
					<strong className={`block font-sans text-base font-semibold tracking-[0.06em] sm:whitespace-nowrap sm:text-xl lg:text-[min(1.3em,2.2vw)] ${titleTextColor}`}>
						Victoria Falls Regional Institute
					</strong>
					<span className={`block font-medium tracking-[0.06em] normal-case sm:whitespace-nowrap text-[calc(0.95em-4px)] sm:text-[0.95em] lg:text-[min(0.95em,1.65vw)] ${navTextColor}`}>
						Reimagining Africa Through Dialogue
					</span>
				</div>
			</div>

			<ul className="hidden xl:flex items-center gap-6 list-none">
				<li>
					<button
						onClick={() =>
							handleNav({ label: "Home", href: "#home", type: "scroll" })
						}
						className={`${navTextColor} ${navTextClass} ${hoverTextColor} transition-colors duration-200`}>
						Home
					</button>
				</li>

				<li className="relative group">
					<button className={`flex items-center gap-2 ${navTextColor} ${navTextClass}`}>
						About Us
						<ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
					</button>

					<div className="absolute top-full left-0 mt-3 w-60 bg-white shadow-2xl rounded-sm overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
						{ABOUT_DROPDOWN.map((item) => (
							<button
								key={item.label}
								onClick={() => handleNav(item)}
								className={`w-full px-4 py-3 text-left ${navTextColor} hover:bg-gold/10 transition-colors ${navTextClass}`}>
								{item.label}
							</button>
						))}
					</div>
				</li>

				{NAV_LINKS.map((item) => (
					<li key={item.label}>
						<button
							onClick={() => handleNav(item)}
							className={`${navTextColor} ${navTextClass} ${hoverTextColor} transition-colors duration-200`}>
							{item.label}
						</button>
					</li>
				))}
			</ul>

		

			{/* Hamburger */}
			<button
				className="xl:hidden flex flex-shrink-0 flex-col gap-1.5 border-0 bg-transparent p-1 cursor-pointer"
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
				<div className={`absolute top-full left-0 right-0 ${mobileMenuBg} border-t border-gold/20 flex flex-col xl:hidden shadow-2xl overflow-hidden`}>
					{/* Home */}
					<button
						onClick={() =>
							handleNav({
								label: "Home",
								href: "#home",
								type: "scroll",
							})
						}
						className={`px-6 py-4 text-gold text-left hover:bg-gold/10 transition-colors border-0 bg-transparent border-b border-white/5 ${navTextClass}`}>
						Home
					</button>

					<div className="border-b border-white/5">
						<button
							onClick={() => setAboutOpen(!aboutOpen)}
							className={`w-full px-6 py-4 flex items-center justify-between text-gold hover:bg-gold/10 transition-colors bg-transparent border-0 ${navTextClass}`}>
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
									className={`w-full pl-12 pr-6 py-3 text-left text-gold/90 hover:bg-gold/10 hover:text-gold transition-colors bg-transparent border-0 border-t border-white/5 ${navTextClass}`}>
									{item.label}
								</button>
							))}
						</div>
					</div>

					{NAV_LINKS.map((item) => (
						<button
							key={item.label}
							onClick={() => handleNav(item)}
							className={`px-6 py-4 text-gold text-left hover:bg-gold/10 transition-colors border-0 bg-transparent border-b border-white/5 ${navTextClass}`}>
							{item.label}
						</button>
					))}	
				</div>
			)}
		</nav>
	);
}
