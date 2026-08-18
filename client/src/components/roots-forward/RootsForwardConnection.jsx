import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardConnection() {
	const bodyRef = useRootsForwardReveal();
	const finalLineRef = useRootsForwardReveal();

	return (
		<section
			id="growing-up-between"
			className="relative scroll-mt-28 overflow-hidden bg-cream-dark md:scroll-mt-32">
			{/* Decorative motif — faint contour lines (place/landscape) joined
			    by a dashed route between two waypoints (journey/connection).
			    Abstract only, not a reproduction of any specific cultural
			    pattern. */}
			<svg
				aria-hidden="true"
				viewBox="0 0 800 400"
				preserveAspectRatio="xMidYMid slice"
				className="pointer-events-none absolute inset-0 h-full w-full text-gold opacity-[0.06]"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path d="M-20 90 C 120 60, 220 130, 340 90 S 560 40, 680 100 S 860 130, 900 90" />
				<path d="M-20 320 C 140 350, 260 290, 400 320 S 620 360, 760 310 S 900 300, 940 330" />
				<path
					d="M80 360 C 220 300, 380 200, 560 120 S 700 60, 760 40"
					strokeDasharray="2 10"
					strokeLinecap="round"
				/>
				<circle cx="80" cy="360" r="5" fill="currentColor" stroke="none" />
				<circle cx="760" cy="40" r="5" fill="currentColor" stroke="none" />
			</svg>

			{/* Side motifs — wide-desktop only. Fill the otherwise-empty side
			    gutters (the reading column stays narrow for legibility) with a
			    minimal vertical route + waypoint dots, echoing the horizontal
			    journey line above. Hidden below lg so mobile/tablet keep full
			    width for content. */}
			<svg
				aria-hidden="true"
				viewBox="0 0 20 640"
				preserveAspectRatio="none"
				className="pointer-events-none absolute inset-y-0 left-6 hidden w-5 text-gold opacity-[0.08] lg:block xl:left-16 2xl:left-24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path
					d="M10 0 C 4 140, 16 260, 10 340 S 2 500, 10 640"
					strokeDasharray="2 10"
					strokeLinecap="round"
				/>
				<circle cx="10" cy="110" r="4" fill="currentColor" stroke="none" />
				<circle cx="10" cy="340" r="4" fill="currentColor" stroke="none" />
				<circle cx="10" cy="560" r="4" fill="currentColor" stroke="none" />
			</svg>
			<svg
				aria-hidden="true"
				viewBox="0 0 20 640"
				preserveAspectRatio="none"
				className="pointer-events-none absolute inset-y-0 right-6 hidden w-5 text-gold opacity-[0.08] lg:block xl:right-16 2xl:right-24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path
					d="M10 640 C 16 500, 4 380, 10 300 S 18 140, 10 0"
					strokeDasharray="2 10"
					strokeLinecap="round"
				/>
				<circle cx="10" cy="530" r="4" fill="currentColor" stroke="none" />
				<circle cx="10" cy="300" r="4" fill="currentColor" stroke="none" />
				<circle cx="10" cy="80" r="4" fill="currentColor" stroke="none" />
			</svg>

			<div className="rf-section-py relative w-full px-6 md:px-12">
				<div ref={bodyRef} className="rf-fade-up rf-delay-0">
					<h2 className="font-sans text-2xl font-semibold leading-snug text-ink xl:text-3xl min-[1440px]:text-4xl">
						Growing up between two places
					</h2>

					<div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-ink-mid xl:text-xl min-[1440px]:text-2xl">
						<p>
							Maybe you know home through your family, the food,
							the music and the stories, but you haven't really
							had the chance to know it for yourself.
						</p>
						<p>
							Maybe you understand the language but don't speak
							it. Maybe you've visited before, or maybe you've
							never been at all.
						</p>
					</div>
				</div>

				<div
					ref={finalLineRef}
					className="rf-fade-up rf-delay-2 mt-12 md:mt-16">
					<span
						aria-hidden="true"
						className="kente-bar mb-6 block h-1.5 w-16 rounded-sm"
					/>
					<p className="font-sans text-2xl font-medium leading-snug text-ink xl:text-3xl min-[1440px]:text-4xl">
						That doesn't make you any less connected. There's
						simply more to discover.
					</p>
				</div>
			</div>
		</section>
	);
}
