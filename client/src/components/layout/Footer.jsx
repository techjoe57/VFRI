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
			<div className="flex w-full flex-col items-center gap-3 text-xs text-gold-light sm:text-base xl:text-lg min-[2560px]:text-xl md:grid md:grid-cols-3 md:items-center md:gap-8">
				<div className="whitespace-nowrap font-display font-semibold md:justify-self-start">
					Victoria Falls Regional Institute
				</div>
				<div className="whitespace-nowrap text-white/50 md:text-center">
					{`© ${new Date().getFullYear()} VFRI · info@vfri.africa`}
				</div>
				<div className="whitespace-nowrap text-white/50 md:text-right">
					Developed by Momentum Labs CLG.
				</div>
			</div>
		</footer>
	);
}
