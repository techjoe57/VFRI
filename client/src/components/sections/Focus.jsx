import { useReveal } from "../../hooks/useReveal";
import { FOCUS_AREAS } from "../../data/content";

export default function Focus() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	return (
		<section
			id="focus"
			className="py-24 px-8 md:px-16 lg:px-20 bg-cream flex-1">
			<div
				ref={leftRef}
				className="reveal grid md:grid-cols-2 gap-8 mb-14 items-end">
				<div>
					<span className="section-label mb-4 block">What We Do</span>
					<h2 className="section-title text-4xl md:text-5xl mb-6 text-green-deep">
						Focus Areas
					</h2>
				</div>
				<p className="text-ink-light text-md leading-[1.85] self-end">
					VFRI's work is organised around five primary domains, each
					grounded in African realities and aimed at global relevance.
				</p>
			</div>

			<div
				ref={rightRef}
				className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{FOCUS_AREAS.map(({ num, title, desc, image }, i) => (
					<div
						key={num}
						className={`card p-6 ${i === 0 ? "sm:col-span-2 bg-green-deep" : "bg-green-deep"}`}>
						{/* IMAGE */}
						<div className="h-52 overflow-hidden">
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
