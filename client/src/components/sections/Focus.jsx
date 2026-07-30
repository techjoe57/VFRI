import { useReveal } from "../../hooks/useReveal";
import { FOCUS_AREAS } from "../../data/content";

export default function Focus() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	return (
		<section
			id="focus"
			className="page-section bg-cream flex-1">
			<div
				ref={leftRef}
				className="section-heading md:grid-cols-1">
				<div>
					<span className="section-label mb-4 block">What We Do</span>
					<h2 className="section-title text-green-deep">
						Focus Areas
					</h2>
				</div>
				<p className="section-copy">
					VFRI's work is organised around five primary domains, each
					grounded in African realities and aimed at global relevance.
				</p>
			</div>

			<div
				ref={rightRef}
				className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{FOCUS_AREAS.map(({ num, title, desc, image }, i) => (
					<div
						key={num}
						className={`card overflow-hidden ${i === 0 ? "sm:col-span-2 bg-green-deep" : "bg-green-deep"}`}>
						<div className="h-48 overflow-hidden">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover transition duration-700 hover:scale-105"
							/>
						</div>

						{/* CONTENT */}
						<div className="p-4 flex-1 flex flex-col">
							<p
								className={`font-display text-4xl font-light opacity-40 leading-none mb-3 text-gold`}>
								{num}
							</p>

							<h3
								className={`font-display text-xl mb-2 ${
									i === 0 ? "text-white" : "text-white"
								} whitespace-pre-line`}>
								{title}
							</h3>

							<p
								className={`text-sm leading-relaxed ${
									i === 0 ? "text-white/60" : "text-white/60"
								} whitespace-pre-line mt-auto`}>
								{desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
