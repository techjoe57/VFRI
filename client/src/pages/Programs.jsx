import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { PROGRAMS } from "../data/content";

function RootsForwardCard({ program }) {
	const navigate = useNavigate();
	return (
		<div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-black/5 bg-white/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 md:flex-row">
			<div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

			<div className="relative flex-1 p-6 md:p-10">
				<p className="meta-label mb-2 text-gold">{program.category}</p>
				<h3 className="card-title mb-3 text-crimson-deep">{program.title}</h3>
				<p className="flex-grow text-sm leading-ink-ink-light text-justify">{program.description}</p>

				{/* keep Explore Roots Forward */}
				<button
					type="button"
					onClick={() => navigate(program.internalLink)}
					className="group mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-crimson-deep transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-crimson-deep hover:text-cream hover:shadow-lg hover:shadow-crimson-deep/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-deep cursor-pointer"
				>
					Explore Roots Forward
					<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
				</button>
			</div>

			<div className="relative min-h-[260px] md:flex-1">
				<img
					src={program.image}
					alt={program.title}
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</div>
		</div>
	);
}


export default function Programs() {
	const navigate = useNavigate();
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section id="programs" className="scroll-mt-28 relative overflow-hidden bg-cream pt-36 pb-6 sm:pt-28 lg:pt-16">
			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:py-2">
				{/* Heading */}
				<div ref={headRef} className="reveal mx-auto mb-10 max-w-4xl text-center">
					<div className="mt-10 mb-4 flex justify-center">
						<span className="section-label">
							What We Do
						</span>
					</div>

					<h2 className="section-title mt-3 mb-0.5">
						Programs & Initiatives
					</h2>

					<p className="section-copy mx-auto">
						Structured initiatives driving research,
						capacity building, and policy innovation across
						Africa.
					</p>
				</div>

				{/* Program Cards */}
				<div ref={gridRef} className="reveal grid grid-cols-1 gap-6 md:grid-cols-2">
					{PROGRAMS.map((p) => p.internalLink ? (<RootsForwardCard key={p.title} program={p} />
						) : (
						<div key={p.title} className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-black/5 bg-white/70 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
							<div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

							<div className="mb-5 overflow-hidden rounded-sm">
								<img
									src={p.image}
									alt={p.title}
									className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<p className="meta-label mb-2 text-gold">
								{p.category}
							</p>

							<h3 className="card-title mb-3 text-crimson-deep">
								{p.title}
							</h3>

							<p className="flex-grow text-sm leading- text-ink-light text-justify">
								{p.description}
							</p>
						</div>
					)
				)}
				</div>
			</div>
		</section>
	);
}
