import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { PROGRAMS } from "../data/content";

function RootsForwardCard({ program }) {
	const navigate = useNavigate();
	return (
		<div className="group relative flex flex-col overflow-hidden rounded-sm border border-black/5 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 md:flex-row md:items-stretch">
			<div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

			<div className="relative flex flex-col justify-center px-6 pt-4 pb-4 md:w-1/2 md:px-8">
				<p className="meta-label mb-1 text-gold">{program.category}</p>
				<h3 className="card-title mb-1 text-crimson-deep">
					{program.title}
				</h3>
				<p className="text-left text-base leading-relaxed text-ink-mid">
					{program.description}
				</p>

				<button
					type="button"
					onClick={() => navigate(program.internalLink)}
					className="group mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-crimson-deep transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-crimson-deep hover:text-cream hover:shadow-lg hover:shadow-crimson-deep/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-deep">
					Explore Roots Forward
					<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
				</button>
			</div>

			<div className="relative h-56 md:h-auto md:w-1/2">
				<img
					src={program.image}
					alt={program.title}
					className="h-full w-full object-cover md:absolute md:inset-0"
				/>
			</div>
		</div>
	);
}

export default function Programs() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section
			id="programs"
			className="w-full bg-cream pb-16">
			<div
				ref={headRef}
				className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat px-6 pb-8 pt-32 text-white sm:pt-28"
				style={{
					backgroundImage: "url('/images/about/victoria_falls.jpg')",
				}}>
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative z-10 mx-auto max-w-4xl text-center">
					<div className="mb-2 flex justify-center">
						<span className="section-label !text-gold rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest">
							What We Do
						</span>
					</div>

					<h2 className="mb-2 font-serif text-2xl font-normal tracking-wide text-white sm:text-3xl md:text-4xl">
						Programs & Initiatives
					</h2>

					<p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-white/90 sm:text-base md:text-lg">
						Structured initiatives driving research, capacity building,
						and policy innovation across Africa.
					</p>
				</div>
			</div>

			<div className="w-full px-6 pt-8 md:px-12">
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
					{PROGRAMS.map((p) =>
						p.internalLink ? (
							<RootsForwardCard key={p.title} program={p} />
						) : (
							<div
								key={p.title}
								className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-black/5 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
								<div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

								<div className="mb-4 overflow-hidden rounded-sm">
									<img
										src={p.image}
										alt={p.title}
										className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="flex flex-1 flex-col justify-center">
									<p className="meta-label mb-1 text-gold">
										{p.category}
									</p>

									<h3 className="card-title mb-1 text-crimson-deep">
										{p.title}
									</h3>

<p className="text-left text-base leading-relaxed text-ink-mid">
										{p.description}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
