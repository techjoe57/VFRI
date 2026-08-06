import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardLocation() {
	const textRef = useRootsForwardReveal();
	const imageRef = useRootsForwardReveal();

	return (
		<section id="victoria-falls" className="bg-cream">
			<div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
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
					{/* TODO: replace with real photography favouring young people together, conversation, community and everyday life connected to Victoria Falls / Zimbabwe. Avoid safari, wildlife, sunset/acacia or generic travel-brochure imagery — the visual language should be about people, not the destination. */}
					<div
						ref={imageRef}
						className="rf-reveal-scale rf-delay-1 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-mid/20 via-gold/20 to-[#C8763F]/20 md:aspect-[16/10] lg:aspect-[4/3]">
						<div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
						<div className="absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-green-mid/20 blur-3xl" />
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="rounded-full bg-cream/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/70">
								Photography coming soon
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
