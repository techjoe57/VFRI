import { useReveal } from "../hooks/useReveal";
import { TEAM } from "../data/content";

export default function Team({ compact = false }) {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="team"
			className="pt-8 pb-24 px-6 md:px-10 lg:px-16 bg-green-deep relative"> 
			{/* Kente bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar" />
					<div ref={headRef} className="reveal mb-8">
					<span
						className="section-label mb-2 block"
						style={{ color: "#c8a84b" }}>
						Leadership
					</span>
					<h2 className="section-title text-white">
						Our Team
					</h2>
				</div>

				<div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-5">
					{TEAM.map(({ name, role, bio, image }) => (
						<div
							key={name}
							className="flex flex-col md:flex-row gap-5 bg-white/5 border border-gold/15 rounded-sm p-5 transition-all duration-200 hover:bg-white/8">
							<div className="w-full md:w-40 h-40 md:h-auto flex-shrink-0 border border-gold/30 rounded-sm bg-gold/8 overflow-hidden">
								<img
									alt= {name}
									src={image}
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<div>
								<p className="meta-label text-gold mb-1">
									{role}
								</p>
								<h3 className="card-title text-white mb-3">
									{name}
								</h3>
								<p className="text-white/55 text-sm leading-relaxed">
									{bio}
								</p>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
