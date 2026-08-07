import { useReveal } from "../../hooks/useReveal";
import { SERVICES } from "../../data/content";
import { Link } from "react-router-dom";

export default function Services() {
	const headRef = useReveal();
	const gridRef = useReveal();

	const topRow = SERVICES.slice(0, 3);
	const bottomRow = SERVICES.slice(3);

	const ServiceCard = ({ num, title, desc, image }) => (
		<div
			className="
				group
				relative
				flex
				min-h-[360px]
				flex-col
				justify-end
				overflow-hidden
				rounded-sm
				border
				border-gold/20
				shadow-lg
				transition-all
				duration-300
				hover:-translate-y-2
				hover:shadow-2xl
			"
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
				style={{ backgroundImage: `url(${image})` }}
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20 transition-colors duration-300 group-hover:from-black/90" />

			{/* Accent Bar */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-crimson-mid to-gold" />

			{/* Content */}
			<div className="relative z-10 p-5">
				<p className="mb-3 text-5xl font-extralight tracking-tight text-gold/70">
					{num}
				</p>

				<h3 className="card-title mb-3 text-white">
					{title}
				</h3>

				<p className="text-sm leading-7 text-white/75">
					{desc}
				</p>
			</div>
		</div>
	);

	return (
		<section
			id="services"
			className="page-section bg-[#244F46] scroll-mt-28 relative overflow-hidden"
		>
			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-green-mid/10 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-[1500px]">

				{/* Heading */}
				<div
					ref={headRef}
					className="reveal max-w-4xl mx-auto text-center mb-8"
				>
					<div className="flex justify-center mb-3">
						<span
							className="section-label"
							style={{ color: "#c8a84b" }}
						>
							What We Offer
						</span>
					</div>

					<h2 className="section-title text-white mb-4">
						Services
					</h2>

					<p className="dark-section-copy mx-auto">
						Five interconnected services through which VFRI delivers
						its mission, from hosted dialogue and policy research to
						long-term consultancy and institutional partnerships.
					</p>
				</div>

				<div ref={gridRef} className="reveal">
					{/* Tablet and mobile grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:hidden">
					{SERVICES.map((service) => (
						<ServiceCard
							key={service.num}
							{...service}
						/>
					))}

					<div
						className="
							w-full
							min-h-[360px]
							flex
							flex-col
							justify-between
							rounded-sm
							border
							border-gold/20
							bg-white/5
							backdrop-blur-sm
							p-6
							shadow-lg
							transition-all
							duration-300
							hover:bg-white/10
							hover:-translate-y-2
							hover:shadow-2xl
						"
					>
						<div>
							<p className="mb-4 text-5xl font-extralight text-gold/60">
								→
							</p>

							<h3 className="card-title mb-4 text-white">
								Let's Work Together
							</h3>

							<p className="text-sm leading-7 text-white/70">
								Whether you're a university,
								development institution,
								NGO, think tank, or policy
								body, we welcome
								opportunities for research,
								training, strategic dialogue,
								and knowledge exchange.
							</p>
						</div>

						<Link
							to="/service-inquiry"
							className="btn-primary mt-8 w-fit"
						>
							Request Our Services
						</Link>
					</div>
				</div>

					<div className="hidden xl:block">
					{/* Top Row */}
					<div className="grid grid-cols-3 gap-6">
						{topRow.map((service) => (
							<ServiceCard
								key={service.num}
								{...service}
							/>
						))}
					</div>

					{/* Bottom Row */}
					<div className="mt-6 flex flex-wrap justify-center gap-6">

						{bottomRow.map((service) => (
							<div
								key={service.num}
								className="w-full max-w-[420px]"
							>
								<ServiceCard {...service} />
							</div>
						))}

						{/* CTA Card */}
						<div
							className="
								w-full
								max-w-[420px]
								min-h-[360px]
								flex
								flex-col
								justify-between
								rounded-sm
								border
								border-gold/20
								bg-white/5
								backdrop-blur-sm
								p-6
								shadow-lg
								transition-all
								duration-300
								hover:bg-white/10
								hover:-translate-y-2
								hover:shadow-2xl
							"
						>
							<div>
								<p className="mb-4 text-5xl font-extralight text-gold/60">
									â†’
								</p>

								<h3 className="card-title mb-4 text-white">
									Let's Work Together
								</h3>

								<p className="text-sm leading-7 text-white/70">
									Whether you're a university,
									development institution,
									NGO, think tank, or policy
									body, we welcome
									opportunities for research,
									training, strategic dialogue,
									and knowledge exchange.
								</p>
							</div>

							<Link
								to="/service-inquiry"
								className="btn-primary mt-8 w-fit"
							>
								Request Our Services
							</Link>
						</div>

					</div>
					</div>
				</div>

			</div>

			{/* Angled Divider overlapping the next section 
			<div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
				<svg
					className="relative block w-full h-12 md:h-20 text-[#5E0A11]"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					>
					<path
						d="M1200 0L0 120V120H1200V0Z"
						fill="currentColor"
					/>
				</svg> 
			</div> */}
			{/* Smooth transition into Contact section */}
<div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#244F46] to-[#5E0A11]" />
</div>

		</section>
	);
}
