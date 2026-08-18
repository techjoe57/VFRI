import { useLocation } from "react-router-dom";

export default function Footer() {
	const location = useLocation();
	const greenPages = [
		"/team",
		"/news",
		"/programs",
		"/achievements",
		"/our-story",
		"/service-inquiry",
	];
	const isGreenPage = greenPages.includes(location.pathname);

	return (
		<footer
			className={`${isGreenPage ? "bg-green-deep" : "bg-crimson-deep"} w-full border-t border-gold/15 px-4 py-6 sm:px-6 md:px-12 lg:px-20`}>
			<div className="flex w-full flex-col items-center gap-3 text-xs text-gold-light sm:text-base md:flex-row md:justify-between md:gap-8">
				<div className="whitespace-nowrap font-display font-semibold">
					Victoria Falls Regional Institute
				</div>
				<div className="whitespace-nowrap text-white/50">
					Reimagining Africa Through Dialogue
				</div>
				<div className="whitespace-nowrap text-white/50">
					{`© ${new Date().getFullYear()} VFRI · info@vfri.africa · www.vfri.africa`}
				</div>
			</div>
		</footer>
	);
}
