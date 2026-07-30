import { useLocation } from "react-router-dom";
export default function Footer() {

	const location = useLocation();
	const greenPages = ["/team", "/news", "/programs", "/achievements", "/our-story", "/service-inquiry"];
	const isGreenPage = greenPages.includes(location.pathname);

	return (
		<footer
			className={`${isGreenPage ? "bg-green-deep" : "bg-crimson-deep"} px-6 py-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gold/15`}>
			<div className="font-sans text-sm text-white/50 text-center md:text-left">
				<span className="font-display text-gold-light font-semibold">
					Victoria Falls Regional Institute
				</span>
				<span className="hidden md:inline text-white/30 mx-2">·</span>
				<br className="md:hidden" />
				Reimagining Africa Through Dialogue
			</div>
			<div className="text-sm text-white/50 text-center">
				© {new Date().getFullYear()} VFRI &nbsp;·&nbsp; info@vfri.africa
				&nbsp;·&nbsp; www.vfri.africa
			</div>
		</footer>
	);
}
