import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";
import { ROOTS_FORWARD_INTEREST_FORM_URL } from "./rootsForwardConstants";

export default function RootsForwardHero() {
	const eyebrowRef = useRootsForwardReveal();
	const headingRef = useRootsForwardReveal();
	const bodyRef = useRootsForwardReveal();
	const ctaRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section className="relative overflow-hidden bg-cream">
			<div className="flex w-full px-6 pt-28 pb-5 md:px-12 md:pt-32">
				<div className="grid w-full gap-8 lg:grid-cols-2 lg:items-end lg:gap-8">
					{/* TEXT */}
					<div className="relative z-10 order-1 flex flex-col items-start gap-4 lg:order-1">
						<span
							ref={eyebrowRef}
							className="rf-fade-up rf-delay-0 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
							A Victoria Falls Regional Institute Programme
						</span>

						<h1
							ref={headingRef}
							className="rf-fade-up rf-delay-1 font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
							Roots Forward
						</h1>

						<div
							ref={bodyRef}
							className="rf-fade-up rf-delay-2 flex flex-col items-start gap-4">
							<p className="max-w-md font-sans text-xl font-medium leading-snug text-ink md:text-2xl">
								You carry a heritage you may have never stood
								inside.
							</p>

							<p className="max-w-md text-base leading-relaxed text-ink-mid">
								Three weeks in Victoria Falls for young people
								in the diaspora to reconnect with where they
								come from, learn practical skills and think
								about where they're going.
							</p>

							<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
								<span className="text-sm font-medium uppercase tracking-[0.1em] text-ink-light">
									Victoria Falls, Zimbabwe
								</span>
								<span
									aria-hidden="true"
									className="hidden h-3 w-px bg-ink-light/40 sm:block"
								/>
								<span className="text-sm font-medium uppercase tracking-[0.1em] text-ink-light">
									Ages 18–25
								</span>
							</div>
						</div>

						<div
							ref={ctaRef}
							className="rf-fade-up rf-delay-3 mt-3 flex flex-col items-start gap-3">
							<a
								href={ROOTS_FORWARD_INTEREST_FORM_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30">
								Register your interest
							</a>
							<span className="text-xs text-ink-light">
								Takes two minutes. No commitment.
							</span>
						</div>
					</div>

					{/* IMAGE TREATMENT */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-0 relative order-2 h-[270px] w-full overflow-hidden rounded-3xl bg-cream-dark md:h-auto md:aspect-[16/10] lg:order-2 lg:aspect-[4/5] lg:max-h-[26.75rem]">
						<img
							src="/images/roots-forward/roots-forward-hero.jpg"
							alt="Young people from the diaspora collaborating together during a Roots Forward session"
							className="block h-full w-full object-cover object-[center_30%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
