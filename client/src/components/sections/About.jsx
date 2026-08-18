import { vms } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function About() {
	const revealRef = useReveal();

	return (
		<section
			id="about"
			className="scroll-mt-28 relative w-full overflow-hidden bg-cream/70 pb-5 pt-4 backdrop-blur-sm"
		>
			{/* Background Accent */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute right-0 top-32 w-[650px] h-[650px] rounded-full bg-gold/5 blur-3xl" />
				<div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-green-mid/5 blur-3xl" />
			</div>

			<div
				ref={revealRef}
				className="relative z-10 w-full px-6 md:px-12"
			>
				{/* Heading */}
				<div className="max-w-5xl mx-auto text-center mb-4">
					<span className="section-label mb-1 block">Who We Are</span>

					<h2 className="section-title mb-6">
						An African Voice on Regional and Continental Knowledge
						and Policy.
					</h2>

					<p className="section-copy mx-auto max-w-5xl text-lg">
						Victoria Falls Regional Institute is an independent academic and
						research institute founded to localise the power of knowledge in
						International Law, International Relations, Peace & Security,
						Governance, Development, and Humanitarian Affairs.
					</p>
				</div>

				{/* Image + Floating Quote */}
				<div className="relative mx-auto mb-16 mt-8">
					<div className="overflow-hidden rounded-sm shadow-2xl group">
						<img
							src="/images/about/about.avif"
							alt="VFRI team discussion"
							className="w-full h-[25rem] object-cover transition-transform duration-700 group-hover:scale-105"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
					</div>

					{/* Floating Quote */}
					<div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[92%] max-w-4xl bg-green-deep border-l-4 border-gold rounded-sm px-6 py-4 shadow-2xl backdrop-blur-md">
						<p className="font-display text-lg xl:text-xl min-[2560px]:text-2xl italic leading-relaxed text-white/85 text-center">
							"Discussions, policy formulations, and conferences about Africa
							tend to be held without Africa. Those who possess African wisdom,
							knowledge and experiences are often denied access to such
							platforms due to visa restrictions, financial barriers, and
							systemic exclusion."
						</p>
					</div>
				</div>

				{/* Cards */}
				<div className="relative -mt-2">
					<div className="grid gap-6 md:grid-cols-3 md:items-stretch">
						{vms.map(({ label, title, body }) => (
							<div
								key={label}
								className="relative flex h-full flex-col rounded-sm border border-gold/15 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
							>
								<div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

								<p className="meta-label mb-2 text-gold">
									{label}
								</p>

								<h3 className="card-title mb-1 flex min-h-[2.75rem] items-end text-crimson-deep">
									{title}
								</h3>

<p className="flex-1 text-lg leading-7 text-ink-mid xl:text-xl min-[2560px]:text-2xl">
								{body}
							</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
