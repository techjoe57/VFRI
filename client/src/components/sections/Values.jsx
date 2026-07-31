import { useReveal } from "../../hooks/useReveal";
import { VALUES } from "../../data/content";

export default function Values() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="values"
			className="page-section bg-green-deep/90 backdrop-blur-sm relative overflow-hidden">
			{/* Kente top */}
			<div className="absolute top-0 left-0 right-0 h-1.5 kente-bar" />

			<div
				ref={headRef}
				className="reveal grid lg:grid-cols-3 gap-6 mb-10 items-end">
				<div className="lg:col-span-1">
					<span
						className="section-label mb-4 block"
						style={{ color: "#c8a84b" }}>
						What We Stand For
					</span>
					<h2 className="section-title text-white">
						Our Core
						<br />
						Values
					</h2>
				</div>
				<p className="lg:col-span-2 dark-section-copy self-end">
					Seven principles guide every decision, dialogue, and
					deliverable at VFRI — from how we conduct research to how we
					engage partners and communities across Africa and beyond.
				</p>
			</div>

			<div
				ref={gridRef}
				className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{VALUES.map(({ title, desc, icon: Icon }, i) => (
					<div
						key={title}
						className={`bg-white/5 border border-gold/15 rounded-sm p-5 transition-all duration-200
						hover:bg-gold/8 hover:border-gold/35
						${i === VALUES.length - 1 ? "sm:col-span-2 lg:col-span-1 md:max-w-sm" : ""}`}>
						<Icon className="text-2xl mb-3 text-gold-light" />
						<h4 className="card-title text-white mb-2">
							{title}
						</h4>
						<p className="text-sm text-white/55 leading-relaxed">
							{desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
