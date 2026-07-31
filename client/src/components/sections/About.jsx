import { vms } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function About() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	return (
		<section
			id="about"
			className="page-section bg-cream/80 backdrop-blur-sm grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
			<div ref={leftRef} className="reveal">
				<span className="section-label mb-4 block">Who We Are</span>

				<h2 className="section-title mb-4">
					A Pan-African Voice
					<br />
					in Global Knowledge
				</h2>

				<p className="section-copy mb-5">
					Victoria Falls Regional Institute is an independent academic
					and research institute founded to localise the power of
					knowledge in International Law, International Relations,
					Peace & Security, Governance, Development, and Humanitarian
					Affairs.
				</p>

				{/* IMAGE */}
				<div className="relative overflow-hidden rounded-sm mb-6 group">
					<img
						src="/images/about/about.avif"
						alt="VFRI team discussion"
						className="w-full h-[250px] object-cover transition duration-700 group-hover:scale-105"
					/>

					{/* Optional overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
				</div>

				{/* Challenge quote */}
				<div className="bg-green-deep border-l-4 border-gold px-5 py-4 rounded-r-sm">
					<p className="font-display text-lg italic text-white/80 leading-relaxed">
						"Discussions, policy formulations, and conferences about
						Africa tend to be held without Africa. Those who possess
						African wisdom, knowledge and experiences are often
						denied access to such platforms — due to visa
						restrictions, financial barriers, and systemic
						exclusion."
					</p>
				</div>
			</div>
			<div ref={rightRef} className="reveal flex flex-col gap-5">
				{vms.map(({ label, title, body }) => (
					<div
						key={label}
						className="card relative overflow-hidden p-5">
						<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-crimson-mid" />
						<p className="meta-label text-gold mb-1.5">
							{label}
						</p>
						<h3 className="card-title text-crimson-deep mb-2">
							{title}
						</h3>
						<p className="text-ink-light text-sm leading-relaxed">
							{body}
						</p>
					</div>
				))}	
			</div>
		</section>
	);
}
