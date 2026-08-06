import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardPillars() {
	const introRef = useRootsForwardReveal();
	const rootsTextRef = useRootsForwardReveal();
	const rootsImageRef = useRootsForwardReveal();
	const skillsTextRef = useRootsForwardReveal();
	const skillsImageRef = useRootsForwardReveal();
	const futureTextRef = useRootsForwardReveal();
	const futureImageRef = useRootsForwardReveal();

	return (
		<section id="whats-included" className="scroll-mt-24 bg-cream md:scroll-mt-28">
			<div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28 lg:px-20">
				{/* INTRO */}
				<div ref={introRef} className="rf-fade-up max-w-2xl">
					<h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
						Three weeks. Three things.
					</h2>
					<p className="mt-4 text-base leading-relaxed text-ink-mid md:text-lg">
						Roots Forward brings together heritage, practical
						skills and the things that help you move forward.
					</p>
				</div>

				{/* PILLARS */}
				<div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
					{/* ROOTS */}
					<div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
						<div
							ref={rootsImageRef}
							className="rf-reveal-left relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#C8763F]/30 via-gold/20 to-cream-dark lg:order-1">
							<div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
							<div className="absolute -bottom-10 -right-6 h-44 w-44 rounded-full bg-[#C8763F]/20 blur-3xl" />
							{/* TODO: replace with real photography of Roots Forward participants engaging with heritage/culture */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="rounded-full bg-cream/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/70">
									Photography coming soon
								</span>
							</div>
						</div>

						<div
							ref={rootsTextRef}
							className="rf-fade-up rf-delay-1 relative order-2 lg:order-2">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-10 -left-1 select-none text-[110px] font-bold leading-none text-gold/10 md:-top-14 md:text-[140px]">
								01
							</span>
							<div className="relative">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
									Part One
								</span>
								<h3 className="mt-3 font-sans text-3xl font-bold text-ink md:text-4xl">
									Roots
								</h3>
								<p className="mt-4 max-w-md text-base leading-relaxed text-ink-mid md:text-lg">
									Your history, languages, music and
									stories. Learn about Shona, Ndebele and
									Bemba culture, the kingdoms and
									independence movements, and hear from
									elders who still carry those stories.
								</p>
								<p className="mt-3 max-w-md text-base font-medium leading-relaxed text-gold md:text-lg">
									Not a museum tour. A homecoming.
								</p>
							</div>
						</div>
					</div>

					{/* SKILLS */}
					<div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
						<div
							ref={skillsImageRef}
							className="rf-reveal-right relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-mid/25 via-green-light/15 to-cream-dark lg:order-2">
							<div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-green-mid/20 blur-3xl" />
							<div className="absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-green-light/20 blur-3xl" />
							{/* TODO: replace with real photography of Roots Forward participants building skills/working with tech */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="rounded-full bg-cream/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/70">
									Photography coming soon
								</span>
							</div>
						</div>

						<div
							ref={skillsTextRef}
							className="rf-fade-up rf-delay-1 relative order-2 lg:order-1">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-10 -left-1 select-none text-[110px] font-bold leading-none text-green-mid/10 md:-top-14 md:text-[140px]">
								02
							</span>
							<div className="relative">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-green-mid">
									Part Two
								</span>
								<h3 className="mt-3 font-sans text-3xl font-bold text-ink md:text-4xl">
									Skills
								</h3>
								<p className="mt-4 max-w-md text-base leading-relaxed text-ink-mid md:text-lg">
									Get hands-on with AI tools, content
									creation, coding basics and online
									safety.
								</p>
								<p className="mt-3 max-w-md text-base font-medium leading-relaxed text-green-mid md:text-lg">
									See what people across Africa are already
									building — from M-Pesa to Flutterwave.
								</p>
							</div>
						</div>
					</div>

					{/* FUTURE */}
					<div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
						<div
							ref={futureImageRef}
							className="rf-reveal-left relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-crimson-mid/25 via-crimson-light/15 to-cream-dark lg:order-1">
							<div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-crimson-mid/20 blur-3xl" />
							<div className="absolute -bottom-10 -right-6 h-44 w-44 rounded-full bg-crimson-light/20 blur-3xl" />
							{/* TODO: replace with real photography of Roots Forward participants presenting/pitching projects */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="rounded-full bg-cream/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/70">
									Photography coming soon
								</span>
							</div>
						</div>

						<div
							ref={futureTextRef}
							className="rf-fade-up rf-delay-1 relative order-2 lg:order-2">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-10 -left-1 select-none text-[110px] font-bold leading-none text-crimson-mid/10 md:-top-14 md:text-[140px]">
								03
							</span>
							<div className="relative">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-crimson-mid">
									Part Three
								</span>
								<h3 className="mt-3 font-sans text-3xl font-bold text-ink md:text-4xl">
									Future
								</h3>
								<p className="mt-4 max-w-md text-base leading-relaxed text-ink-mid md:text-lg">
									Build confidence in leadership, public
									speaking, personal finance and wellbeing.
								</p>
								<p className="mt-3 max-w-md text-base font-medium leading-relaxed text-crimson-mid md:text-lg">
									Learn from diaspora professionals who have
									been where you are, then work with your
									team to build and pitch a real project.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
