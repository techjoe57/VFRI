import { useReveal } from "../hooks/useReveal";
import { NEWS } from "../data/content";

export default function News() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section id="news" className="w-full bg-cream pb-16">
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
							Updates
						</span>
					</div>

					<h2 className="mb-2 font-serif text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl">
						News & Publications
					</h2>

					<p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/90 sm:text-xl md:text-2xl">
						Latest institutional updates, research outputs, and public
						engagement activities.
					</p>
				</div>
			</div>

			<div className="w-full px-6 pt-8 md:px-12">
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
					{NEWS.map(
						({ title, date, summary, tag, image, link, linkLabel }) => (
							<div
								key={title}
								className="group relative flex flex-col gap-5 overflow-hidden rounded-sm border border-black/[0.06] bg-white p-6 transition-all duration-200 hover:shadow-xl md:flex-row md:items-stretch">
								<div className="relative h-40 w-full shrink-0 overflow-hidden rounded-sm md:h-auto md:w-1/3">
									<img
										src={image}
										alt={title}
										className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:absolute md:inset-0"
									/>
								</div>
								<div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-gold to-crimson-mid" />
								<div className="flex flex-1 flex-col justify-center">
									<div className="mb-3 flex items-start justify-between gap-3">
										<span className="meta-label text-gold">{tag}</span>
										<span className="flex-shrink-0 text-[0.8rem] text-ink-mid">
											{date}
										</span>
									</div>

									<h3 className="card-title mb-1 text-xl font-semibold text-crimson-deep transition-colors group-hover:text-crimson-dark">
										{title}
									</h3>

									<p className="text-left text-base leading-relaxed text-ink-mid">
										{summary}
									</p>

									{link && (
										<a
											href={link}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 inline-flex self-start text-sm font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-crimson-deep">
											{linkLabel || "Read more"}
										</a>
									)}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
