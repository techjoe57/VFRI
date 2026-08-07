import { useRootsForwardReveal } from "../../hooks/useRootsForwardReveal";

const OUTCOMES = [
	{
		text: "A capstone project, built by you and pitched publicly",
		accent: "text-gold",
	},
	{
		text: "Practical skills you can put on your CV",
		accent: "text-green-mid",
	},
	{
		text: "Mentors who know your name and who you can stay connected with",
		accent: "text-crimson-mid",
	},
	{
		text: "A network of people who understand what it means to grow up between two places",
		accent: "text-gold",
	},
	{
		text: "A relationship with a country that no longer feels abstract",
		accent: "text-green-mid",
	},
];

export default function RootsForwardOutcomes() {
	const introRef = useRootsForwardReveal();
	const outcomeRefs = [
		useRootsForwardReveal(),
		useRootsForwardReveal(),
		useRootsForwardReveal(),
		useRootsForwardReveal(),
		useRootsForwardReveal(),
	];

	return (
		<section
			id="what-you-leave-with"
			className="relative overflow-hidden bg-[#F2E8D3]">
			{/* Right-side motif — an oversized, very low-opacity vertical
			    word fills the wide-desktop side gutter (the numbered list
			    keeps its comfortable reading width) and reinforces the
			    section's forward/progress idea. Hidden below lg so
			    tablet/mobile keep full width for content. */}
			<span
				aria-hidden="true"
				className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-90 select-none whitespace-nowrap font-sans text-[6.5rem] font-bold uppercase leading-none tracking-[0.22em] text-ink/[0.05] lg:block xl:-right-8 xl:text-[8rem] 2xl:-right-12 2xl:text-[9rem]">
				Forward
			</span>

			<div className="rf-section-py relative mx-auto w-full max-w-3xl px-6 md:px-12">
				<span
					aria-hidden="true"
					className="mb-8 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent md:mb-10"
				/>

				<div ref={introRef} className="rf-fade-up rf-delay-0">
					<h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
						What you leave with
					</h2>

					<p className="mt-6 max-w-2xl font-sans text-2xl font-semibold leading-snug text-ink md:mt-8 md:text-3xl">
						Not a certificate you file away. Something you made,
						presented, and can point to.
					</p>
				</div>

				<div className="mt-12 border-y border-ink/10 divide-y divide-ink/10 md:mt-16">
					{OUTCOMES.map((item, index) => (
						<div
							key={item.text}
							ref={outcomeRefs[index]}
							className={`rf-fade-up rf-delay-${Math.min(index, 4)} flex items-start gap-4 py-6 md:gap-6 md:py-7`}>
							<span
								className={`mt-0.5 flex-shrink-0 font-sans text-sm font-semibold tracking-[0.1em] ${item.accent} md:text-base`}>
								0{index + 1}
							</span>
							<p className="text-lg leading-relaxed text-ink md:text-xl">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
