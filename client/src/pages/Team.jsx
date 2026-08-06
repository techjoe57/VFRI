import { useReveal } from "../hooks/useReveal";
import { TEAM } from "../data/content";

export default function Team({ compact = false }) {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="team"
			className={`relative overflow-hidden bg-green-deep/90 backdrop-blur-sm ${compact ? "py-6" : "pt-36 pb-6 sm:pt-28"}`}
		>
			{/* Kente bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-1.5 kente-bar" />

			<div className="relative z-10 max-w-7xl mx-auto px-6">

				{/* Heading */}
				<div
					ref={headRef}
					className="reveal max-w-3xl mx-auto text-center mb-10"
				>
					<span
						className="section-label mb-3 block"
						style={{ color: "#c8a84b" }}
					>
						Leadership
					</span>

					<h2 className="section-title text-white mb-4">
						Our Team
					</h2>

					<p className="dark-section-copy">
						A multidisciplinary team of researchers, policy experts,
						and practitioners committed to advancing African-led
						knowledge, dialogue, and sustainable development.
					</p>
				</div>

				{/* Team Grid */}
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6"
				>
					{TEAM.map(({ name, role, bio, image }, index) => (
						<div
							key={name}
							className="
								group
								flex
								flex-col
								md:flex-row
								gap-6
								rounded-sm
								border
								border-gold/15
								bg-white/5
								p-6
								backdrop-blur-sm
								transition-all
								duration-300
								hover:-translate-y-1
								hover:bg-white/10
								hover:border-gold/35
							"
						>
							{/* Image */}
							<div className={`${index === 0 ? "h-64 sm:h-72 md:h-auto md:min-h-72 lg:min-h-80 xl:min-h-72" : "h-52 md:h-auto"} w-full md:w-44 flex-shrink-0 overflow-hidden rounded-sm border border-gold/25 bg-gold/10`}>
								<img
									src={image}
									alt={name}
									loading="lazy"
									className={`${index === 0 ? "object-[center_28%] md:object-[center_24%] lg:object-center" : "object-center"} h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`}
								/>
							</div>

							{/* Content */}
							<div className="flex flex-col justify-center">
								<p className="meta-label text-gold mb-2">
									{role}
								</p>

								<h3 className="card-title text-white mb-3">
									{name}
								</h3>

								<p className="text-sm leading-7 text-white/65">
									{bio}
								</p>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
