import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardConnection() {
	const bodyRef = useRootsForwardReveal();
	const finalLineRef = useRootsForwardReveal();

	return (
		<section id="growing-up-between" className="bg-cream-dark">
			<div className="mx-auto w-full max-w-2xl px-6 py-20 md:px-12 md:py-28 lg:py-32">
				<div ref={bodyRef} className="rf-fade-up rf-delay-0">
					<h2 className="font-sans text-2xl font-semibold leading-snug text-ink md:text-3xl">
						Growing up between two places
					</h2>

					<div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-ink-mid md:text-xl">
						<p>
							Maybe you know home through your family, the food,
							the music and the stories — but you haven't really
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
					className="rf-fade-up rf-delay-2 mt-10 md:mt-12">
					<span className="mb-5 block h-px w-12 bg-gold" />
					<p className="font-sans text-2xl font-medium leading-snug text-ink md:text-3xl">
						That doesn't make you any less connected. There's
						simply more to discover.
					</p>
				</div>
			</div>
		</section>
	);
}
