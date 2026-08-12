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
				min-h-[360px]
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
			<div className="relative z-10 mt-auto flex w-full flex-col p-5">
				<p className="mb-3 text-5xl font-extralight tracking-tight text-gold/70">
					{num}
				</p>

				{/* Reserve ~2 lines so titles align across the row */}
				<h3 className="card-title mb-3 min-h-[2.75rem] text-white">
					{title}
				</h3>

				{/* Reserve desc height so paragraphs start on the same line */}
				<p className="min-h-[7rem] text-sm leading-7 text-white/75">
					{desc}
				</p>
			</div>
		</div>
	);

	return (
		<section
			id="focus"
			className="page-section pb-6 md:pb-8 bg-[#FFF6DD]/80 scroll-mt-28"
		>
			{/* Slightly wider than section-inner to reduce side whitespace — matches Services */}
			<div className="mx-auto w-full max-w-[1500px]">

				{/* Heading */}
				<div
					ref={headRef}
					className="reveal max-w-4xl mx-auto text-center mb-8"
				>
					<div className="flex justify-center mb-3">
						<span className="section-label">
							What We Do
						</span>
					</div>

					<h2 className="section-title text-green-deep mb-4">
						Focus Areas
					</h2>

					<p className="section-copy mx-auto">
						VFRI's work is organised around five primary domains,
						each grounded in African realities while contributing
						to global knowledge and policy.
					</p>
				</div>

				{/*
					Responsive layout in a single grid — mirrors Services.jsx:
					- mobile (< md):  1 / 1 / 1 / 1 / 1  (one column, everything stacks)
					- md (< xl):      2 / 2 / 1          (last card spans full width, alone on its row)
					- xl and up:      3-top / 1+wide-bottom
					  A 6-col grid on xl: the first three cards each span 2 (2+2+2 = 6)
					  for the top row; the fourth card spans 2 and the fifth spans 4
					  (2+4 = 6) for the bottom row.
				*/}
				<div
					ref={gridRef}
					className="reveal grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6"
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

			</div>
		</section>
	);
}