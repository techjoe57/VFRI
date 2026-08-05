import { useReveal } from "../../hooks/useReveal";
import { SERVICES } from "../../data/content";
import { Link } from "react-router-dom";

export default function Services() {
	const headRef = useReveal();
	const gridRef = useReveal();

	const scrollTo = (id) =>
		document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="services"
			className="page-section bg-white">
			<div
				ref={headRef}
				className="section-heading md:grid-cols-1">
				<div>
					<span className="section-label mb-4 block">
						What We Offer
					</span>
					<h2 className="section-title">
						Primary Products
						<br />
						&amp; Services
					</h2>
				</div>
				<p className="section-copy">
					Five interconnected services through which VFRI delivers its
					mission — from hosted dialogues to long-term consultancy
					engagements.
				</p>
			</div>

			<div
				ref={gridRef}
				className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{SERVICES.map(({ num, title, desc, image }) => (
					<div
						key={num}
						className="relative group min-h-72 overflow-hidden rounded-sm border border-black/[0.06] p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
						{/* BACKGROUND IMAGE */}
						<div
							className="absolute inset-0 bg-center bg-cover scale-105 group-hover:scale-110 transition-transform duration-500"
							style={{ backgroundImage: `url(${image})` }}
						/>

						{/* DARK OVERLAY (VERY IMPORTANT FOR READABILITY) */}
						<div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />

						{/* CONTENT */}
						<div className="relative z-10">
							<p className="font-display text-3xl text-gold/70 font-light mb-4">
								{num}
							</p>

							<h3 className="card-title text-white mb-2">
								{title}
							</h3>

							<p className="text-white/70 text-sm leading-relaxed">
								{desc}
							</p>
						</div>

						{/* Animated bottom border */}
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-crimson-mid scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
					</div>
				))}

				{/* CTA card */}
				<div className="bg-crimson-deep border border-gold/20 rounded-sm p-6 flex flex-col justify-between">
					<div>
						<p className="font-display text-3xl text-gold/50 font-light mb-4">
							→
						</p>
						<h3 className="card-title text-white mb-2">
							Learn more about the Courses
						</h3>
						<p className="text-white/55 text-sm leading-relaxed mb-6">
							Whether you're a development institution,
							university, or policy body — we welcome
							collaboration on research, training, and knowledge
							exchange.
						</p>
					</div>
					<Link
						to="/service-inquiry"
						className="btn-primary self-start !px-5 !py-2.5 inline-block text-center">
						Request our services
					</Link>
				</div>
			</div>
		</section>
	);
}
