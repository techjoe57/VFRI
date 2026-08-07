import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ABOUT_DROPDOWN } from "../../data/content";
import { ROOTS_FORWARD_INTEREST_FORM_URL } from "./rootsForwardConstants";

const navLinkClass =
	"relative inline-flex items-center gap-1 py-2 font-sans text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:text-crimson-deep after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-crimson-mid after:to-gold after:transition-all after:duration-300 after:content-[''] hover:after:w-full";

export default function RootsForwardHeader() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);

	const goTo = (href) => {
		setMenuOpen(false);
		setAboutOpen(false);
		navigate(href);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur-md">
			<div className="flex items-center justify-between gap-4 px-5 py-2.5 md:px-10">
				{/* Brand */}
				<div className="flex min-w-0 items-center gap-3">
					<div className="h-12 w-12 flex-shrink-0 md:h-14 md:w-14">
						<img
							src="/logo2.png"
							alt="Logo"
							className="h-full w-full"
						/>
					</div>
					<div className="min-w-0 leading-tight font-sans">
						<strong className="block truncate font-sans text-base font-semibold tracking-[0.06em] text-crimson-deep sm:hidden">
							VFRI
						</strong>
						<strong className="hidden truncate font-sans text-base font-semibold tracking-[0.06em] text-crimson-deep sm:block md:text-xl">
							Victoria Falls Regional Institute
						</strong>
						<span className="hidden font-medium text-[0.78em] tracking-[0.06em] text-crimson-dark normal-case sm:block">
							Reimagining Africa Through Dialogue
						</span>
					</div>
				</div>

				{/* Right cluster: desktop nav + CTA + hamburger */}
				<div className="flex flex-shrink-0 items-center gap-6 lg:gap-10">
					<ul className="hidden list-none items-center gap-8 lg:flex">
						<li>
							<button
								type="button"
								onClick={() => goTo("/")}
								className={navLinkClass}>
								Home
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => goTo("/programs")}
								className={navLinkClass}>
								Programs
							</button>
						</li>
						<li className="group relative">
							<button type="button" className={navLinkClass}>
								About Us
								<ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
							</button>

							<div className="invisible absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-ink/5 bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
								{ABOUT_DROPDOWN.map((item) => (
									<button
										key={item.label}
										type="button"
										onClick={() => goTo(item.href)}
										className="w-full px-4 py-3 text-left font-sans text-sm font-medium text-ink transition-colors hover:bg-gold/10 hover:text-crimson-deep">
										{item.label}
									</button>
								))}
							</div>
						</li>
					</ul>

					<a
						href={ROOTS_FORWARD_INTEREST_FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 md:px-6 md:py-3 md:text-sm">
						Register your interest
					</a>

					{/* Hamburger — mobile/tablet only */}
					<button
						type="button"
						onClick={() => setMenuOpen((open) => !open)}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						className="flex flex-col gap-1.5 border-0 bg-transparent p-1 lg:hidden">
						<span
							className={`block h-0.5 w-6 bg-crimson-deep transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-crimson-deep transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-crimson-deep transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`overflow-hidden bg-cream/98 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${
					menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
				}`}>
				<nav className="flex flex-col px-5 py-2 md:px-10">
					<button
						type="button"
						onClick={() => goTo("/")}
						className="border-b border-ink/5 py-3 text-left font-sans text-sm font-medium text-ink transition-colors hover:text-crimson-deep">
						Home
					</button>
					<button
						type="button"
						onClick={() => goTo("/programs")}
						className="border-b border-ink/5 py-3 text-left font-sans text-sm font-medium text-ink transition-colors hover:text-crimson-deep">
						Programs
					</button>

					<button
						type="button"
						onClick={() => setAboutOpen((open) => !open)}
						className="flex items-center justify-between py-3 text-left font-sans text-sm font-medium text-ink transition-colors hover:text-crimson-deep">
						About Us
						<ChevronDown
							className={`h-3.5 w-3.5 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
						/>
					</button>
					<div
						className={`overflow-hidden transition-all duration-300 ${
							aboutOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
						}`}>
						{ABOUT_DROPDOWN.map((item) => (
							<button
								key={item.label}
								type="button"
								onClick={() => goTo(item.href)}
								className="w-full py-3 pl-4 text-left font-sans text-sm text-ink-mid transition-colors hover:text-crimson-deep">
								{item.label}
							</button>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
