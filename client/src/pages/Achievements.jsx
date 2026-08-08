import { useReveal } from "../hooks/useReveal";
import { ACHIEVEMENTS } from "../data/content";

export default function Achievements() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="achievements"
			className="page-hero flex-1 relative overflow-hidden">
			<div
				className="absolute inset-0 z-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/images/about/victoria_falls.jpg')" }}
			/>
			<div className="absolute inset-0 z-[1] bg-white/70" />
			<div className="section-inner relative z-10">
				<div
					ref={headRef}
					className="section-heading mx-auto max-w-4xl text-center">
					<div className="mb-4 flex justify-center">
						<span className="section-label">Impact</span>
					</div>

					<div>
						<h2 className="section-title">
							Achievements
						</h2>
					</div>
					<p className="section-copy mx-auto">
						From university keynotes in Zimbabwe to cross-border student
						competitions in Nairobi — VFRI turns its mission into
						measurable impact on the ground.
					</p>
				</div>

				<div ref={gridRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-5">
					{ACHIEVEMENTS.map(({ title, desc, image }) => (
						<div
							key={title}
							className="relative flex flex-col md:flex-row gap-5 bg-white border border-black/[0.06] rounded-sm p-5 overflow-hidden
							transition-all duration-200 hover:shadow-xl">
							{/* IMAGE */}
							<div className="w-full md:w-40 h-40 md:h-auto overflow-hidden rounded-sm flex-shrink-0">
								<img
									src={image}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
									loading="lazy"
									alt={title}
								/>
							</div>
							{/* Left accent bar */}
							<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-crimson-mid" />
							<div>
								<h3 className="card-title text-crimson-deep mb-3">
									{title}
								</h3>
								<p className="text-ink-light text-sm leading-relaxed">
									{desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
