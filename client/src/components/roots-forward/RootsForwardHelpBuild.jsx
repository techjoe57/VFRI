import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardHelpBuild() {
	const headingRef = useRootsForwardReveal();
	const openingRef = useRootsForwardReveal();
	const bodyRef = useRootsForwardReveal();
	const closingRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section id="help-us-build-this" className="relative overflow-hidden bg-crimson-deep">
			<div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

			<div className="rf-section-py relative w-full px-6 md:px-12">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
					{/* IMAGE — left */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-1 relative order-2 h-[270px] w-full overflow-hidden rounded-3xl bg-cream-dark md:h-auto md:aspect-[16/10] lg:order-1 lg:aspect-[3/2] lg:max-h-96 lg:justify-self-start">
						<img
							src="/images/roots-forward/roots-forward-hero.jpg"
							alt="Young people from the diaspora collaborating together during a Roots Forward session"
							className="block h-full w-full object-cover object-[center_30%]"
						/>
					</div>

					{/* TEXT — right */}
					<div className="order-1 lg:order-2 lg:max-w-xl lg:justify-self-end lg:text-right">
						<span
							aria-hidden="true"
							className="mb-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent lg:ml-auto"
						/>

						<h2
							ref={headingRef}
							className="rf-fade-up rf-delay-0 font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
							Help us build this
						</h2>

						<p
							ref={openingRef}
							className="rf-fade-up rf-delay-1 mt-6 font-sans text-xl font-medium leading-snug text-white md:text-2xl">
							We are designing Roots Forward around the people who
							actually want to be part of it.
						</p>

						<p
							ref={bodyRef}
							className="rf-fade-up rf-delay-2 mt-6 text-base leading-relaxed text-white/80 md:text-lg">
							That's why we're not asking you to apply yet. We want to
							hear what you'd want from these three weeks: what you'd
							like to learn, what would make it possible for you to
							come, and what might get in the way.
						</p>

						<div
							ref={closingRef}
							className="rf-fade-up rf-delay-3 mt-8 md:mt-10">
							<span
								aria-hidden="true"
								className="mb-4 block h-px w-12 bg-gold lg:ml-auto"
							/>
							<p className="text-lg font-medium leading-relaxed text-white md:text-xl">
								Your input will help shape the programme. You'll also
								be the first to hear when dates, costs and places are
								confirmed.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}