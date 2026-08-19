import { useReveal } from "../../hooks/useReveal";
import { VALUES } from "../../data/content";

export default function Values() {
	const headRef = useReveal();
	const gridRef = useReveal();
	const topRow = VALUES.slice(0, 4);
	const bottomRow = VALUES.slice(4);

	const renderCard = ({ title, desc, icon: Icon }) => (
		<div
			key={title}
			className="
			group
			h-full
			rounded-sm
			border
			border-gold/15
			bg-white/5
			p-5
			backdrop-blur-sm
			transition-all
			duration-300
			hover:-translate-y-2
			hover:border-gold/40
			hover:bg-white/10
		"
		>
			<Icon className="mb-3 text-3xl text-gold-light transition-transform duration-300 group-hover:scale-110" />

			<h4 className="card-title mb-1 text-white">
				{title}
			</h4>

			<p className="text-lg leading-6 text-white/70 xl:text-xl min-[2560px]:text-2xl">
				{desc}
			</p>
		</div>
	);

	return (
		<section
			id="values"
			className="relative w-full overflow-hidden bg-green-deep/90 pb-3 pt-5 backdrop-blur-sm"
		>
			{/* Kente */}
			<div className="absolute top-0 left-0 right-0 h-1.5 kente-bar" />

			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
			</div>

			<div className="relative z-10 w-full px-6 md:px-12">
				{/* Heading */}
				<div
					ref={headRef}
					className="reveal mx-auto mb-6 max-w-4xl text-center"
				>
					<span
						className="section-label mb-2 block"
						style={{ color: "#c8a84b" }}
					>
						What We Stand For
					</span>

					<h2 className="section-title text-white mb-2">Our Core Values</h2>

					<p className="dark-section-copy max-w-3xl mx-auto">
						Seven principles guide every decision, dialogue, and deliverable at
						VFRI, from how we conduct research to how we engage partners and
						communities across Africa and beyond.
					</p>
				</div>

				{/* Cards */}
				<div ref={gridRef} className="reveal">
					{/* Top Row */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{topRow.map(renderCard)}
					</div>

					{/* Bottom Row — full-width 3 cols, no side gutters */}
					<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{bottomRow.map(renderCard)}
					</div>
				</div>
			</div>
		</section>
	);
}
