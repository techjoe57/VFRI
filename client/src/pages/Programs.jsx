import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { PROGRAMS } from "../data/content";

export default function Programs() {
	const navigate = useNavigate();
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="programs"
			className="page-hero bg-cream flex-1">
			<div className="section-inner"> 
				<div
					ref={headRef}
					className="section-heading">
					<div>
						<span className="section-label mb-4 block">What We Do</span>
						<h2 className="section-title">
							Programs & Initiatives
						</h2>
					</div>

					<p className="section-copy self-end">
						Structured initiatives driving research, capacity building,
						and policy innovation across Africa.
					</p>
				</div>

				<div ref={gridRef} className="reveal grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					{PROGRAMS.map(
						({
							title,
							category,
							description,
							image,
							internalLink,
						}) => (
							<div
								key={title}
								className="card p-5 relative overflow-hidden flex flex-col">
								{/* IMAGE */}
								<div className="h-40 w-full mb-4 overflow-hidden rounded-sm">
									<img
										src={image}
										alt={title}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
									/>
								</div>

								<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-crimson-mid" />

								<p className="meta-label text-gold mb-2">
									{category}
								</p>

								<h3 className="card-title text-crimson-deep mb-3">
									{title}
								</h3>

								<p className="text-ink-light text-sm leading-relaxed mb-4">
									{description}
								</p>

								{internalLink && (
									<button
										type="button"
										onClick={() => navigate(internalLink)}
										className="group mt-auto inline-flex w-fit items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-crimson-deep transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-crimson-deep hover:text-cream hover:shadow-lg hover:shadow-crimson-deep/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold cursor-pointer">
										Explore Roots Forward
										<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
									</button>
								)}
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
