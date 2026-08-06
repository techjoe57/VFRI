export default function RootsForwardHeader() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 border-b border-gold/20 bg-cream/95 px-5 py-2.5 backdrop-blur-md md:px-10">
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

			<button
				type="button"
				// TODO: wire up the registration form link once it is provided
				className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 md:px-6 md:py-3 md:text-sm">
				Register your interest
			</button>
		</header>
	);
}
