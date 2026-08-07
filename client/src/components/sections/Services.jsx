import { useReveal } from "../../hooks/useReveal";
import { SERVICES } from "../../data/content";
import { Link } from "react-router-dom";

export default function Services() {
	const headRef = useReveal();
	const gridRef = useReveal();

	const ServiceCard = ({ num, title, desc, image }) => (
		<div
			className="
				group
				relative
				flex
				h-full
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

	const AUDIENCES = [
		"Universities",
		"Development Institutions",
		"NGOs",
		"Think Tanks",
		"Policy Bodies",
	];

	const CTACard = ({ num }) => (
		<div
    className="
        group
        relative
        flex
        h-full
        min-h-[360px]
        flex-col
        overflow-hidden
        rounded-sm
        border
        border-gold/50
        bg-white/[0.07]
        backdrop-blur-sm
        p-6
        shadow-2xl
        transition-colors
        duration-300
        xl:flex-row
        xl:gap-10
        xl:p-8
		hover:border-gold
hover:bg-white/[0.09]
    "
>
			{/* Ambient glow that blooms in on hover */}
			<div
    className="
        pointer-events-none
        absolute
        -right-16
        -top-16
        h-56
        w-56
        rounded-full
        bg-gold/20
        opacity-80
        blur-3xl
    "
/>

			{/* Accent bar, hidden until hover — mirrors the ServiceCard bar but arrives as a reveal */}
			<div
    className="
        absolute
        top-0
        left-0
        h-1
        w-full
        bg-gradient-to-r
        from-gold
        via-crimson-mid
        to-gold
    "
/>

			{/* Left: identity + primary action */}
			<div className="relative z-10 flex flex-col xl:w-[38%] xl:shrink-0">
				<p
					className="
						mb-4
						text-5xl
						font-extralight
						text-gold/80
						transition-colors
						duration-300
						group-hover:text-gold
					"
				>
					{num}
				</p>

				<h3 className="card-title mb-4 text-white">
					Let's Work Together
				</h3>

				<p className="text-sm leading-7 text-white/70">
					We partner with institutions across
					Africa and beyond on research,
					training, strategic dialogue, and
					long-term knowledge exchange.
				</p>

				<Link
					to="/service-inquiry"
					className="btn-primary relative z-10 mt-8 inline-flex w-fit items-center gap-2"
				>
					<span>Request Our Services</span>
					<span
						className="transition-transform duration-300 group-hover:translate-x-1"
						aria-hidden="true"
					>
						→
					</span>
				</Link>
			</div>

			{/* Divider — visible only once the layout goes side-by-side */}
			<div className="hidden xl:block xl:w-px xl:self-stretch xl:bg-gold/20" />

			{/* Right: who we work with */}
			<div className="relative z-10 mt-6 flex flex-1 flex-col justify-center xl:mt-0">
				<span
					className="section-label mb-4"
					style={{ color: "#c8a84b" }}
				>
					Who We Work With
				</span>

				<ul className="flex flex-wrap gap-2.5">
					{AUDIENCES.map((audience) => (
						<li
							key={audience}
							className="
								rounded-full
								border
								border-gold/30
								px-4
								py-1.5
								text-xs
								uppercase
								tracking-wide
								text-white/80
								transition-colors
								duration-300
								group-hover:border-gold/50
							"
						>
							{audience}
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	return (
		<section
			id="services"
			className="page-section bg-green-deep/90 scroll-mt-28 relative overflow-hidden"
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

				{/*
					Responsive layout in a single grid:
					- mobile (< md):  1 / 1 / 1 / 1 / 1  (one column, everything stacks)
					- md (< xl):      2 / 2 / 1          (CTA spans both columns, alone on its row)
					- xl and up:      3-top / 1+wide-bottom
					  A 6-col grid on xl: cards 1-3 each span 2 (2+2+2=6) for the top row,
					  card 4 spans 2 and the CTA spans 4 (2+4=6) for the bottom row.
				*/}
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6"
				>
					{SERVICES.map((service) => (
						<div key={service.num} className="xl:col-span-2">
							<ServiceCard {...service} />
						</div>
					))}

					<div className="md:col-span-2 xl:col-span-4">
						<CTACard num="05" />
					</div>
				</div>

			</div>
		</section>
	);
}