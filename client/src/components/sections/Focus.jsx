import { useReveal } from "../../hooks/useReveal";
import { FOCUS_AREAS } from "../../data/content";

export default function Focus() {
	const headRef = useReveal();
	const gridRef = useReveal();

	const topRow = FOCUS_AREAS.slice(0, 3);
	const bottomRow = FOCUS_AREAS.slice(3);

	return (
		<section
			id="focus"
			className="page-section bg-cream/80 scroll-mt-28"
		>
			{/* Slightly wider than section-inner to reduce side whitespace */}
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

				<div ref={gridRef} className="reveal">
					{/* Tablet and mobile grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:hidden">
						{FOCUS_AREAS.map(({ num, title, desc, image }) => (
							<div
								key={num}
								className="group card bg-green-deep overflow-hidden flex flex-col h-full"
							>
								<div className="overflow-hidden">
									<img
										src={image}
										alt={title}
										className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="flex flex-col flex-grow p-5">
									<p className="mb-3 text-4xl font-light text-gold/50">
										{num}
									</p>

									<h3 className="card-title text-white mb-3">
										{title}
									</h3>

									<p className="flex-grow text-sm leading-7 text-white/65">
										{desc}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="hidden xl:block">
					{/* Top Row */}
					<div className="grid grid-cols-3 gap-6">
						{topRow.map(({ num, title, desc, image }) => (
							<div
								key={num}
								className="group card bg-green-deep overflow-hidden flex flex-col h-full"
							>
								<div className="overflow-hidden">
									<img
										src={image}
										alt={title}
										className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="flex flex-col flex-grow p-5">
									<p className="mb-3 text-4xl font-light text-gold/50">
										{num}
									</p>

									<h3 className="card-title text-white mb-3">
										{title}
									</h3>

									<p className="flex-grow text-sm leading-7 text-white/65">
										{desc}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Bottom Row (Centered) */}
					<div className="mt-6 flex flex-wrap justify-center gap-6">
						{bottomRow.map(({ num, title, desc, image }) => (
							<div
								key={num}
								className="group card bg-green-deep overflow-hidden flex flex-col w-full max-w-[420px]"
							>
								<div className="overflow-hidden">
									<img
										src={image}
										alt={title}
										className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="flex flex-col flex-grow p-5">
									<p className="mb-3 text-4xl font-light text-gold/50">
										{num}
									</p>

									<h3 className="card-title text-white mb-3">
										{title}
									</h3>

									<p className="flex-grow text-sm leading-7 text-white/65">
										{desc}
									</p>
								</div>
							</div>
						))}
					</div>
					</div>
				</div>

			</div>
		</section>
	);
}
