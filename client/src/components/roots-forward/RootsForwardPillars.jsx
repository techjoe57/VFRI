import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardPillars() {
	const introRef = useRootsForwardReveal();
	const rootsTextRef = useRootsForwardReveal();
	const rootsImageRef = useRootsForwardReveal();
	const skillsTextRef = useRootsForwardReveal();
	const skillsImageRef = useRootsForwardReveal();
	const futureTextRef = useRootsForwardReveal();
	const futureImageRef = useRootsForwardReveal();
	const rootsLineRef = useRootsForwardReveal();
	const skillsLineRef = useRootsForwardReveal();
	const futureLineRef = useRootsForwardReveal();

	return (
		<section id="whats-included" className="scroll-mt-28 bg-cream md:scroll-mt-32">
			<div className="rf-section-py w-full px-6 md:px-12">
				{/* INTRO */}
				<div ref={introRef} className="rf-fade-up w-full text-left">
					<h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink xl:text-4xl min-[1440px]:text-5xl">
						Three weeks. Three things.
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-ink-mid xl:text-xl min-[1440px]:text-2xl">
						Roots Forward brings together heritage, practical
						skills and the things that help you move forward.
					</p>
				</div>

				{/* PILLARS */}
				<div className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12">
					{/* ROOTS */}
					<div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-12">
						{/* Journey line — desktop only. Roots is the first
						    node, so its track/fill only extend downward,
						    toward Skills. */}
						<div className="pointer-events-none absolute left-1/2 top-0 -bottom-10 hidden w-px -translate-x-1/2 bg-ink/10 lg:block" />
						<div
							ref={rootsLineRef}
							className="rf-line-fill-wrap pointer-events-none absolute left-1/2 top-0 -bottom-10 hidden w-px -translate-x-1/2 lg:block">
							<span className="rf-line-bar absolute inset-0 bg-gold" />
							<span className="rf-line-dot absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
						</div>

						<div
							ref={rootsImageRef}
							className="rf-reveal-left relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-dark lg:order-1">
							<img
								src="/images/roots-forward/roots-heritage.png"
								alt="Elders and young adults from a Roots Forward cohort sitting together in conversation"
								className="block h-full w-full object-cover"
							/>
						</div>

						<div
							ref={rootsTextRef}
							className="rf-fade-up rf-delay-1 relative order-1 pt-2 lg:order-2">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-6 -left-1 select-none text-[5rem] font-bold leading-none text-gold/10 md:-top-8 xl:text-[6.25rem] min-[1440px]:text-[7rem]">
								01
							</span>
							<div className="relative">
								<span className="text-sm font-semibold uppercase tracking-[0.14em] text-gold min-[1440px]:text-base">
									Part One
								</span>
								<h3 className="mt-3 font-sans text-4xl font-bold text-ink xl:text-5xl min-[1440px]:text-6xl">
									Roots
								</h3>
								<p className="mt-4 max-w-md text-xl leading-relaxed text-ink-mid xl:text-2xl min-[1440px]:text-3xl">
									Your history, languages, music and
									stories. Learn about Shona, Ndebele and
									Bemba culture, the kingdoms and
									independence movements, and hear from
									elders who still carry those stories.
								</p>
								<p className="mt-3 max-w-md text-xl font-medium leading-relaxed text-gold xl:text-2xl min-[1440px]:text-3xl">
									Not a museum tour. A homecoming.
								</p>
							</div>
						</div>
					</div>

					{/* SKILLS */}
					<div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-12">
						{/* Journey line — the middle node, so its track/fill
						    extend both up (toward Roots) and down (toward
						    Future) to keep the line visually continuous. */}
						<div className="pointer-events-none absolute -top-10 -bottom-10 left-1/2 hidden w-px -translate-x-1/2 bg-ink/10 lg:block" />
						<div
							ref={skillsLineRef}
							className="rf-line-fill-wrap pointer-events-none absolute -top-10 -bottom-10 left-1/2 hidden w-px -translate-x-1/2 lg:block">
							<span className="rf-line-bar absolute inset-0 bg-gold" />
							<span className="rf-line-dot absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
						</div>

						<div
							ref={skillsImageRef}
							className="rf-reveal-right relative order-2 h-[270px] w-full overflow-hidden rounded-2xl bg-cream-dark md:h-auto md:aspect-[4/3] lg:order-2">
							<img
								src="/images/roots-forward/skills-workshop.png"
								alt="Roots Forward participants collaborating on laptops during a skills workshop"
								className="block h-full w-full object-cover"
							/>
						</div>

						<div
							ref={skillsTextRef}
							className="rf-fade-up rf-delay-1 relative order-1 pt-2 lg:order-1">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-6 -left-1 select-none text-[5rem] font-bold leading-none text-green-mid/10 md:-top-8 xl:text-[6.25rem] min-[1440px]:text-[7rem]">
								02
							</span>
							<div className="relative">
								<span className="text-sm font-semibold uppercase tracking-[0.14em] text-green-mid min-[1440px]:text-base">
									Part Two
								</span>
							<h3 className="mt-3 font-sans text-4xl font-bold text-ink xl:text-5xl min-[1440px]:text-6xl">
									Skills
								</h3>
								<p className="mt-4 max-w-md text-xl leading-relaxed text-ink-mid xl:text-2xl min-[1440px]:text-3xl">
									Get hands-on with AI tools, content
									creation, coding basics and online
									safety.
								</p>
								<p className="mt-3 max-w-md text-xl font-medium leading-relaxed text-green-mid xl:text-2xl min-[1440px]:text-3xl">
									See what people across Africa are already
									building, from M-Pesa to Flutterwave.
								</p>
							</div>
						</div>
					</div>

					{/* FUTURE */}
					<div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-12">
						{/* Journey line — the final node, so its track/fill
						    only extend upward, toward Skills. */}
						<div className="pointer-events-none absolute -top-10 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-ink/10 lg:block" />
						<div
							ref={futureLineRef}
							className="rf-line-fill-wrap pointer-events-none absolute -top-10 bottom-0 left-1/2 hidden w-px -translate-x-1/2 lg:block">
							<span className="rf-line-bar absolute inset-0 bg-gold" />
							<span className="rf-line-dot absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
						</div>

						<div
							ref={futureImageRef}
							className="rf-reveal-left relative order-2 h-[270px] w-full overflow-hidden rounded-2xl bg-cream-dark md:h-auto md:aspect-[4/3] lg:order-1">
							<img
								src="/images/roots-forward/future-presentation.png"
								alt="A young Roots Forward participant presenting a project to the rest of her team"
								className="block h-full w-full object-cover object-[55%_center]"
							/>
						</div>

						<div
							ref={futureTextRef}
							className="rf-fade-up rf-delay-1 relative order-1 pt-2 lg:order-2">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -top-6 -left-1 select-none text-[5rem] font-bold leading-none text-crimson-mid/10 md:-top-8 xl:text-[6.25rem] min-[1440px]:text-[7rem]">
								03
							</span>
							<div className="relative">
								<span className="text-sm font-semibold uppercase tracking-[0.14em] text-crimson-mid min-[1440px]:text-base">
									Part Three
								</span>
								<h3 className="mt-3 font-sans text-4xl font-bold text-ink xl:text-5xl min-[1440px]:text-6xl">
									Future
								</h3>
								<p className="mt-4 max-w-md text-xl leading-relaxed text-ink-mid xl:text-2xl min-[1440px]:text-3xl">
									Build confidence in leadership, public
									speaking, personal finance and wellbeing.
								</p>
								<p className="mt-3 max-w-md text-xl font-medium leading-relaxed text-crimson-mid xl:text-2xl min-[1440px]:text-3xl">
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
