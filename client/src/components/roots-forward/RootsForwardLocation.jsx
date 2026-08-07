import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardLocation() {
	const textRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section id="victoria-falls" className="bg-cream">
			<div className="rf-section-py mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					{/* TEXT */}
					<div ref={textRef} className="rf-fade-up rf-delay-0 max-w-xl">
						<h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
							Victoria Falls, Zimbabwe
						</h2>

						<p className="mt-6 font-sans text-2xl font-semibold leading-snug text-ink md:text-3xl">
							For some, this will be a return. For others, a
							first arrival. Both matter.
						</p>

						<p className="mt-6 text-base leading-relaxed text-ink-mid md:text-lg">
							Roots Forward takes place in Victoria Falls,
							Zimbabwe. For many people growing up in the
							diaspora, Zimbabwe or the region may be somewhere
							they've heard about their whole lives without
							having had the chance to really know for
							themselves.
						</p>

						<p className="mt-4 text-base leading-relaxed text-ink-mid md:text-lg">
							This isn't about coming as a tourist. It's about
							spending time in a place connected to your story,
							meeting people, listening, learning and
							experiencing it for yourself.
						</p>
					</div>

					{/* IMAGE TREATMENT */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-1 relative h-[270px] w-full overflow-hidden rounded-2xl bg-cream-dark md:h-auto md:aspect-[16/10] lg:aspect-[4/3]">
						<img
							src="/images/roots-forward/victoria-falls-location.png"
							alt="Young Roots Forward participants standing together overlooking Victoria Falls"
							className="block h-full w-full object-cover object-[42%_center]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
