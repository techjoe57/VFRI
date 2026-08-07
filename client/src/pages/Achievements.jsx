import { useReveal } from "../hooks/useReveal";
import { ACHIEVEMENTS } from "../data/content";

export default function Achievements() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="achievements"
			className="w-full bg-cream min-h-screen pb-16"
		>
			<div
				ref={headRef}
				className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat sm:pt-[110px] pt-32  pb-8 px-6 text-white"
				style={{ backgroundImage: `url('/images/services/training.avif')` }}
			>
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative z-10 mx-auto max-w-4xl text-center">
					<div className="mb-2 flex justify-center">
						<span className="section-label !text-gold border border-gold/30 bg-gold/10 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-widest">
							Impact
						</span>
					</div>

					<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-2 tracking-wide text-white">
						Achievements
					</h2>

					<p className="mx-auto max-w-2xl text-xs sm:text-sm font-light leading-relaxed text-white/90">
						From university keynotes in Zimbabwe to cross-border student
						competitions in Nairobi — VFRI turns its mission into
						measurable impact on the ground.
					</p>
				</div>
			</div>

			<div className="w-full px-6 md:px-12 pt-8"> 
				<div ref={gridRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6">
					{ACHIEVEMENTS.map(({ title, desc, image }) => (
						<div
							key={title}
							className="relative flex flex-col md:flex-row gap-5 bg-white border border-black/[0.06] rounded-sm p-6 overflow-hidden transition-all duration-200 hover:shadow-xl"
						>
							<div className="w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-sm flex-shrink-0">
								<img
									src={image}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
									loading="lazy"
									alt={title}
								/>
							</div>
							<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-crimson-mid" />
							<div className="flex-1">
								<h3 className="card-title text-crimson-deep mb-3 text-lg font-semibold">
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