import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

export default function RootsForwardClosing() {
	const headingRef = useRootsForwardReveal();
	const restRef = useRootsForwardReveal();

	return (
		<section id="your-roots" className="bg-cream">
			<div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-24 text-center md:px-12 md:py-32 lg:py-36">
				<h2
					ref={headingRef}
					className="rf-fade-up rf-delay-0 font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
					Your roots have not gone anywhere.
				</h2>

				<div
					ref={restRef}
					className="rf-fade-up rf-delay-1 mt-5 flex flex-col items-center">
					<p className="text-base leading-relaxed text-ink-mid md:text-lg">
						Tell us you're interested. That's all this takes
						today.
					</p>

					<button
						type="button"
						// TODO: wire up the registration form link once it is provided
						className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 md:mt-12">
						Register your interest
					</button>

					<span className="mt-6 text-xs font-medium uppercase tracking-[0.1em] text-ink-light md:mt-8">
						A project of the Victoria Falls Regional Institute.
					</span>
				</div>
			</div>
		</section>
	);
}
