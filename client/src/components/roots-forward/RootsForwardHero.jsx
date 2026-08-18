import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardHero() {
	const eyebrowRef = useRootsForwardReveal();
	const headingRef = useRootsForwardReveal();
	const bodyRef = useRootsForwardReveal();
	const accentRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section className="relative overflow-hidden bg-cream">
			<div className="flex w-full px-6 pt-28 pb-[25px] md:px-12 md:pt-32 lg:min-h-dvh lg:pt-24 lg:pb-[60px]">
				<div className="grid w-full gap-8 lg:grid-cols-[1fr_2fr] lg:gap-8">
					{/* TEXT */}
					<div className="relative z-10 order-1 flex flex-col items-start gap-4 lg:order-1 lg:justify-center lg:gap-[clamp(16px,min(9vw,calc(32dvh_-_168px),calc(55px_+_(100vw_-_1024px)_*_0.16)),120px)]">
						<div className="flex flex-col items-start gap-4">
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
						</div>

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

						<span
							ref={accentRef}
							aria-hidden="true"
							className="rf-fade-up rf-delay-3 hidden h-1 w-full bg-gold lg:block"
						/>
					</div>

					{/* IMAGE TREATMENT */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-0 relative order-2 h-[270px] w-full overflow-hidden rounded-3xl bg-cream-dark md:h-auto md:aspect-[16/10] lg:order-2 lg:h-full">
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
