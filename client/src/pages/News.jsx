import { useReveal } from "../hooks/useReveal";
import { NEWS } from "../data/content";

export default function News() {
	const headRef = useReveal();
	const gridRef = useReveal();

	return (
		<section id="news" className="page-hero bg-white flex-1">
			<div className="section-inner"> 
				<div
					ref={headRef}
					className="section-heading mx-auto max-w-4xl text-center">
					<div className="mb-4 flex justify-center">
						<span className="section-label">Updates</span>
					</div>

					<div>
						<h2 className="section-title">
							News & Publications
						</h2>
					</div>

					<p className="section-copy mx-auto">
						Latest institutional updates, research outputs, and public
						engagement activities.
					</p>
				</div>

				<div ref={gridRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-5">
					{NEWS.map(({ title, date, summary, tag, image, link, linkLabel }) => (
						<div key={title} className="card p-5 group flex flex-col sm:flex-row gap-5 items-start">
							{/* IMAGE */}
							<div className="w-full sm:w-40 sm:h-40 h-48 flex-shrink-0 overflow-hidden rounded-sm">
								<img
									src={image}
									alt={title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="flex-1 flex flex-col">
								<div className="flex justify-between items-center mb-3">
									<span className="meta-label text-gold">
										{tag}
									</span>
									<span className="text-[0.6rem] text-ink-light">
										{date}
									</span>
								</div>

								<h3 className="card-title text-crimson-deep mb-3 group-hover:text-crimson-dark transition-colors">
									{title}
								</h3>

								<p className="text-sm text-ink-light leading-relaxed">
									{summary}
								</p>

								{link && (
									<a
										href={link}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-4 inline-flex self-start text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-crimson-deep">
										{linkLabel || "Read more"}
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
