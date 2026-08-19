import { useReveal } from "../../hooks/useReveal";
import { FOCUS_AREAS } from "../../data/content";

export default function Focus() {
	const headRef = useReveal();
	const gridRef = useReveal();

	const FocusCard = ({ num, title, desc, image }) => (
		<div
			className="
				group
				relative
				flex
				h-full
				min-h-[22.5rem]
				flex-col
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
			{/* Card Image */}
			<div
				className="
					absolute
					inset-0
					bg-cover
					bg-center
					transition-transform
					duration-700
					group-hover:scale-110
				"
				style={{
					backgroundImage: `url(${image})`,
				}}
			/>

			{/* Card Overlay */}
			<div
				className="
					absolute
					inset-0
					bg-gradient-to-t
					from-black
					via-black/65
					to-black/20
					transition-all
					duration-300
					group-hover:from-black/90
				"
			/>

			{/* Accent Bar */}
			<div
				className="
					absolute
					left-0
					right-0
					top-0
					h-1
					bg-gradient-to-r
					from-gold
					via-crimson-mid
					to-gold
				"
			/>

			{/* Card Content */}
			<div
				className="
					relative
					z-10
					mt-auto
					flex
					w-full
					flex-col
					p-5
				"
			>
				<p
					className="
						mb-3
						text-5xl
						font-extralight
						tracking-tight
						text-gold/70
					"
				>
					{num}
				</p>

				<h3
					className="
						card-title
						mb-1
						min-h-[2.75rem]
						text-white
					"
				>
					{title}
				</h3>

				<p
					className="
						min-h-[6rem]
						text-base
						leading-7
						text-white/75
					"
				>
					{desc}
				</p>
			</div>
		</div>
	);

	return (
		<section
			id="focus"
			className="
				relative
				w-full
				overflow-hidden
				scroll-mt-28
				bg-[#FFF6DD]
				pb-6
				md:pb-8
			"
		>
			{/* =====================================================
			    BACKGROUND IMAGE — image + fade baked into ONE layer
			    so there's nothing else that can silently fail to
			    render on top of it.
			    ===================================================== */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					inset-x-0
					top-0
					z-0
					h-[24rem]
					md:h-[27rem]
					lg:h-[29rem]
				"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 35%, rgba(255,246,221,0.55) 70%, #FFF6DD 100%), url('/images/focus/focus-header.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			{/* =====================================================
			    READABILITY GLOW
			    A soft cream haze centred behind the heading/description
			    only, independent of the decorative top→bottom fade.
			    Keeps the photo visible at the edges while giving the
			    text a calm, consistent surface regardless of which
			    image sits behind it.
			    ===================================================== */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					inset-x-0
					top-0
					z-[5]
					h-[22rem]
					md:h-[25rem]
					lg:h-[27rem]
				"
				style={{
					background:
						"radial-gradient(ellipse 70% 100% at 50% 40%, rgba(255,246,221,0.92) 0%, rgba(255,246,221,0.75) 35%, rgba(255,246,221,0.35) 60%, rgba(255,246,221,0) 80%)",
				}}
			/>

			{/* =====================================================
			    HEADER
			    ===================================================== */}

			<div
				ref={headRef}
				className="
					reveal
					relative
					z-10
					mx-auto
					mb-8
					max-w-5xl
					px-6
					pt-10
					text-center
					md:mb-9
					md:px-10
					md:pt-12
				"
			>
				{/* What We Do */}
				<div className="focus-label-enter mb-2">
					<span className="section-label">
						What We Do
					</span>
				</div>

				{/* Main Heading */}
				<h2
					className="
						focus-heading-enter
						section-title
						mb-3
						text-green-deep
					"
				>
					Focus Areas
				</h2>

				{/* Accent */}
				<div
					className="
						focus-line-enter
						mx-auto
						mb-4
						h-[2px]
						w-16
						bg-gradient-to-r
						from-gold
						via-crimson-mid
						to-gold
					"
				/>

				{/* Description */}
				<p
					className="
						focus-description-enter
						section-copy
						mx-auto
						max-w-3xl
					"
				>
					VFRI&apos;s work is organised around five primary
					domains, each grounded in African realities while
					contributing to global knowledge and policy.
				</p>
			</div>

			{/* =====================================================
			    FOCUS CARDS
			    ===================================================== */}

			<div
				ref={gridRef}
				className="
					reveal
					relative
					z-10
					grid
					grid-cols-1
					gap-6
					px-5
					md:grid-cols-2
					md:px-10
					xl:grid-cols-6
					lg:px-16
				"
			>
				{FOCUS_AREAS.map((area, index) => (
					<div
						key={area.num}
						className={
							index === FOCUS_AREAS.length - 1
								? "md:col-span-2 xl:col-span-4"
								: "xl:col-span-2"
						}
					>
						<FocusCard {...area} />
					</div>
				))}
			</div>
		</section>
	);
}