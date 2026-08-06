import { useReveal } from "../hooks/useReveal";
import { PROGRAMS } from "../data/content";

export default function Programs() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="programs"
			className="scroll-mt-28 relative overflow-hidden bg-cream pt-36 pb-6 sm:pt-28 lg:pt-16"
		>
			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:py-2">
				{/* Heading */}
				<div
					ref={headRef}
					className="reveal mx-auto mb-10 max-w-4xl text-center"
				>
					<div className="mb-4 flex justify-center">
						<span className="section-label">
							What We Do
						</span>
					</div>

					<h2 className="section-title mt-10 mb-5">
						Programs & Initiatives
					</h2>

					<p className="section-copy mx-auto">
						Structured initiatives driving research,
						capacity building, and policy innovation across
						Africa.
					</p>
				</div>

				{/* Program Cards */}
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 gap-6 md:grid-cols-2"
				>
					{PROGRAMS.map(
						({
							title,
							category,
							description,
							image,
						}) => (
							<div
								key={title}
								className="
									group
									relative
									flex
									h-full
									flex-col
									overflow-hidden
									rounded-sm
									border
									border-black/5
									bg-white/70
									p-6
									backdrop-blur-sm
									shadow-lg
									transition-all
									duration-300
									hover:-translate-y-2
									hover:shadow-2xl
								"
							>
								{/* Accent Bar */}
								<div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

								{/* Image */}
								<div className="mb-5 overflow-hidden rounded-sm">
									<img
										src={image}
										alt={title}
										className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<p className="meta-label mb-2 text-gold">
									{category}
								</p>

								<h3 className="card-title mb-3 text-crimson-deep">
									{title}
								</h3>

								<p className="flex-grow text-sm leading-7 text-ink-light">
									{description}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
