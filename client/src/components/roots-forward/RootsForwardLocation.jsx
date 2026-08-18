import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardLocation() {
	const textRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section id="victoria-falls" className="scroll-mt-28 bg-cream md:scroll-mt-32">
			<div aria-hidden="true" className="kente-bar h-1.5 w-full" />

			<div className="rf-section-py w-full px-6 md:px-12">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
					{/* TEXT */}
					<div ref={textRef} className="rf-fade-up rf-delay-0">
<h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink xl:text-4xl min-[2560px]:text-5xl">
						Victoria Falls, Zimbabwe
					</h2>

					<p className="mt-6 font-sans text-2xl font-semibold leading-snug text-ink xl:text-3xl min-[2560px]:text-4xl">
						For some, this will be a return. For others, a
						first arrival. Both matter.
					</p>

					<p className="mt-6 text-lg leading-relaxed text-ink-mid xl:text-xl min-[2560px]:text-2xl">
						Roots Forward takes place in Victoria Falls,
						Zimbabwe. It is a place many in the diaspora have
						heard about, but may never have had the chance
						to know for themselves.
					</p>

					<p className="mt-4 text-lg leading-relaxed text-ink-mid xl:text-xl min-[2560px]:text-2xl">
							This isn't about coming as a tourist. It's about
							spending time somewhere connected to your story:
							meeting people, listening, learning and
							experiencing it for yourself.
						</p>
					</div>

					{/* IMAGE TREATMENT */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-1 relative h-[270px] w-full overflow-hidden rounded-3xl bg-cream-dark md:h-auto md:aspect-[16/10] lg:aspect-[3/2] lg:max-h-96 lg:w-auto lg:justify-self-start">
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
