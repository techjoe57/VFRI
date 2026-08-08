import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";
import { ROOTS_FORWARD_INTEREST_FORM_URL } from "./rootsForwardConstants";

export default function RootsForwardHelpBuild() {
	const headingRef = useRootsForwardReveal();
	const openingRef = useRootsForwardReveal();
	const supportingRef = useRootsForwardReveal();
	const ctaRef = useRootsForwardReveal();

	return (
		<section id="help-us-build-this" className="relative overflow-hidden bg-crimson-deep">
			<div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

			<div className="rf-section-py relative mx-auto w-full max-w-3xl px-6 md:px-12">
				<span
					aria-hidden="true"
					className="mb-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
				/>

				<h2
					ref={headingRef}
					className="rf-fade-up rf-delay-0 font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
					Help us build this
				</h2>

				<p
					ref={openingRef}
					className="rf-fade-up rf-delay-1 mt-6 max-w-2xl font-sans text-xl font-medium leading-snug text-white md:text-2xl">
					We are designing Roots Forward around the people who
					actually want to be part of it.
				</p>

				<div
					ref={supportingRef}
					className="rf-fade-up rf-delay-2 mt-6 flex flex-col gap-4">
					<p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
						That's why we're not asking you to apply yet. We want
						to hear what you would want from these three weeks —
						what you'd like to learn, what would make it possible
						for you to come, and what might get in the way.
					</p>

					<p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
						Registering your interest helps us shape the
						programme around real people, rather than guessing
						what you need.
					</p>

					<p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
						You'll also be the first to hear when dates, costs
						and places are confirmed.
					</p>
				</div>

				<div
					ref={ctaRef}
					className="rf-fade-up rf-delay-3 mt-10 flex flex-col items-start gap-3 md:mt-12">
					<a
						href={ROOTS_FORWARD_INTEREST_FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30">
						Register your interest
					</a>
					<span className="text-sm text-white/60">
						Takes two minutes. No commitment.
					</span>
				</div>
			</div>
		</section>
	);
}
