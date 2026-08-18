import { ArrowRight } from "lucide-react";
import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";
import { ROOTS_FORWARD_INTEREST_FORM_URL } from "./rootsForwardConstants";

export default function RootsForwardClosing() {
	const bgRef = useRootsForwardReveal();
	const accentRef = useRootsForwardReveal();
	const headingRef = useRootsForwardReveal();
	const supportingRef = useRootsForwardReveal();
	const ctaRef = useRootsForwardReveal();
	const attributionRef = useRootsForwardReveal();

	return (
		<section id="your-roots" className="relative overflow-hidden bg-cream">
			{/* Decorative root motif — a low-opacity watermark, never interactive,
			    reveals once with the section and never animates afterwards. */}
			<div
				ref={bgRef}
				aria-hidden="true"
				className="rf-fade-up rf-delay-0 pointer-events-none absolute inset-0 flex items-center justify-center">
				<svg
					viewBox="0 0 800 480"
					preserveAspectRatio="xMidYMid slice"
					className="h-full w-full max-w-3xl text-gold opacity-[0.07]"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round">
					<path d="M400 480 L400 360" />
					<path d="M400 360 C400 320 360 310 320 280" />
					<path d="M400 360 C400 320 440 310 480 280" />
					<path d="M320 280 C295 255 285 230 255 195" />
					<path d="M320 280 C335 245 350 230 350 190" />
					<path d="M480 280 C505 255 515 230 545 195" />
					<path d="M480 280 C465 245 450 230 450 190" />
					<path d="M255 195 C238 168 228 150 208 120" />
					<path d="M545 195 C562 168 572 150 592 120" />
					<path d="M350 190 C342 160 348 140 335 108" />
					<path d="M450 190 C458 160 452 140 465 108" />
					<path d="M208 120 C196 98 198 82 182 58" />
					<path d="M592 120 C604 98 602 82 618 58" />
				</svg>
			</div>

			<div className="rf-section-py relative flex w-full flex-col items-center px-6 text-center md:px-12">
				<span
					ref={accentRef}
					aria-hidden="true"
					className="rf-fade-up rf-delay-0 mb-5 block h-px w-12 bg-gold"
				/>

				<h2
					ref={headingRef}
					className="rf-fade-up-lg rf-delay-1 font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
					Your roots have not gone anywhere.
				</h2>

				<p
					ref={supportingRef}
					className="rf-fade-up rf-delay-2 mt-5 text-base leading-relaxed text-ink-mid md:text-lg">
					Tell us you're interested. That's all this takes today.
				</p>

				<a
					ref={ctaRef}
					href={ROOTS_FORWARD_INTEREST_FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="rf-fade-up rf-delay-3 group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 md:mt-10">
					Register your interest
					<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
				</a>

				<span
					ref={attributionRef}
					className="rf-fade-up rf-delay-4 mt-6 text-xs font-medium uppercase tracking-[0.1em] text-ink-light md:mt-7">
					A project of the Victoria Falls Regional Institute.
				</span>
			</div>
		</section>
	);
}
