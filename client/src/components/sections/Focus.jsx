//Newer version with a premium touch
import { useReveal } from "../../hooks/useReveal";
import { FOCUS_AREAS } from "../../data/content";

function FocusCard({ num, title, desc, image }) {
	return (
		<div
			className="
				group
				bg-green-deep
				border border-gold/15
				rounded-xl
				overflow-hidden
				shadow-lg
				transition-all
				duration-300
				hover:-translate-y-1
				hover:shadow-2xl
				hover:border-gold/40
			"
		>
			<div className="flex flex-col sm:flex-row h-full">

				{/* Image */}
				<div className="sm:w-44 md:w-48 flex-shrink-0 overflow-hidden">
					<img
						src={image}
						alt={title}
						className="
							w-full
							h-52
							sm:h-full
							object-cover
							transition-transform
							duration-500
							group-hover:scale-105
						"
					/>
				</div>

				{/* Content */}
				<div className="flex flex-col justify-center p-5 md:p-6">

					<p className="text-4xl font-light text-gold/60 mb-2">
						{num}
					</p>

					<h3 className="font-display text-2xl text-white mb-3 leading-tight">
						{title}
					</h3>
					<div className="w-14 h-1 rounded-full bg-gold mb-4" />

					<p className="text-base leading-7 text-white/75">
						{desc}
					</p>

				</div>

			</div>
		</div>
	);
}

export default function Focus() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="focus"
			className="py-14 px-6 md:px-10 lg:px-16 bg-cream/80 scroll-mt-28"
		>
			<div className="max-w-7xl mx-auto">

				<div
					ref={headRef}
					className="reveal text-center max-w-3xl mx-auto mb-10"
				>
					<span className="section-label mb-3 inline-block">
						What We Do
					</span>

					<h2 className="font-display text-4xl md:text-5xl text-green-deep mb-4">
						Focus Areas
					</h2>

					<p className="text-lg leading-8 text-ink-light">
						VFRI's work is organised around five primary domains,
						grounded in African realities while contributing to
						global knowledge and policy.
					</p>
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-1 xl:grid-cols-2 gap-6"
				>
					{FOCUS_AREAS.map((area) => (
						<FocusCard
							key={area.num}
							{...area}
						/>
					))}
				</div>

			</div>
		</section>
	);
}