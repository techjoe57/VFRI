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
			p-7
			backdrop-blur-sm
			transition-all
			duration-300
			hover:-translate-y-2
			hover:border-gold/40
			hover:bg-white/10
		"
	>
		<Icon className="mb-5 text-3xl text-gold-light transition-transform duration-300 group-hover:scale-110" />

		<h4 className="card-title mb-3 text-white">
			{title}
		</h4>

		<p className="text-sm leading-7 text-white/65">
			{desc}
		</p>
	</div>
);

	return (
		<section
			id="values"
			className="relative overflow-hidden bg-green-deep/90 backdrop-blur-sm pt-16 pb-8"
		>
			{/* Kente */}
			<div className="absolute top-0 left-0 right-0 h-1.5 kente-bar" />

			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6">

				{/* Heading */}
				<div
					ref={headRef}
					className="reveal max-w-4xl mx-auto text-center mb-10"
				>
					<span
						className="section-label mb-2 block"
						style={{ color: "#c8a84b" }}
					>
						What We Stand For
					</span>

					<h2 className="section-title text-white mb-5">
						Our Core Values
					</h2>

					<p className="dark-section-copy max-w-3xl mx-auto">
						Seven principles guide every decision, dialogue, and
						deliverable at VFRI, from how we conduct research to
						how we engage partners and communities across Africa
						and beyond.
					</p>
				</div>

				{/* Cards */}

				-<div ref={gridRef} className="reveal">

	{/* Top Row */}
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		{topRow.map(renderCard)}
	</div>

	{/* Bottom Row */}
	<div className="mt-4 flex flex-wrap justify-center gap-4">
		{bottomRow.map((value) => (
			<div
				key={value.title}
				className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-3rem)/4)]"
			>
				{renderCard(value)}
			</div>
		))}
	</div>

</div>

			</div>
		</section>
	);
}