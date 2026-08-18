import { useEffect, useState } from "react";

export default function FloatingPoster() {
	const [isOpen, setIsOpen] = useState(false);

	// Close modal with Escape
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			{/* =====================================================
			    FLOATING EVENT BUTTON
			    ===================================================== */}
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				aria-label="View event announcement"
				className="
					group
					fixed
					bottom-7
					right-6
					sm:bottom-8
					sm:right-8
					z-[60]
					flex
					h-16
					w-16
					sm:h-20
					sm:w-20
					items-center
					justify-center
					rounded-full
					border
					border-gold/60
					bg-green-deep
					shadow-[0_8px_35px_rgba(0,0,0,0.35)]
					transition-all
					duration-300
					hover:scale-105
					hover:border-gold
					focus:outline-none
					focus:ring-2
					focus:ring-gold/70
					focus:ring-offset-2
					focus:ring-offset-green-deep
				"
			>
				{/* Outer glow */}
				<span
					className="
						pointer-events-none
						absolute
						inset-[-7px]
						rounded-full
						bg-gradient-to-br
						from-green-mid/50
						via-gold/50
						to-crimson-mid/50
						opacity-60
						blur-md
						transition-opacity
						duration-300
						group-hover:opacity-100
					"
				/>

				{/* Gradient ring */}
				<span
					className="
						pointer-events-none
						absolute
						inset-0
						rounded-full
						bg-gradient-to-br
						from-green-mid
						via-gold
						to-crimson-mid
						p-[2px]
					"
				>
					<span
						className="
							flex
							h-full
							w-full
							items-center
							justify-center
							rounded-full
							bg-green-deep
						"
					>
						<span
							className="
								flex
								flex-col
								items-center
								justify-center
								text-center
								leading-none
							"
						>
							<span
								className="
								mb-1
								text-[0.55rem]
								font-semibold
									uppercase
									tracking-[0.28em]
									text-gold-light
								"
							>
								Event
							</span>

							<span
								className="
									h-1
									w-7
									rounded-full
									bg-gradient-to-r
									from-green-mid
									via-gold
									to-crimson-mid
								"
							/>
						</span>
					</span>
				</span>

				{/* Tiny notification dot */}
				<span
					className="
						absolute
						right-0
						top-0
						h-3
						w-3
						rounded-full
						border-2
						border-green-deep
						bg-crimson-mid
						shadow-[0_0_12px_rgba(180,45,45,0.8)]
					"
				/>
			</button>

			{/* =====================================================
			    POSTER MODAL
			    ===================================================== */}
			{isOpen && (
				<div
					className="
						fixed
						inset-0
						z-[100]
						flex
						items-center
						justify-center
						bg-black/75
						p-4
						backdrop-blur-md
						sm:p-8
					"
					onClick={() => setIsOpen(false)}
					role="dialog"
					aria-modal="true"
					aria-label="Event announcement"
				>
					{/* Modal content */}
<div
						className="
							relative
							flex
							max-h-[92vh]
							max-w-[92vw]
							items-center
							justify-center
						"
						onClick={(event) => event.stopPropagation()}
					>
						{/* Poster */}
						<img
							src="/images/pop-up/student-essay-competition.png"
							alt="Student Essay Competition: Re-imagining Southern Africa"
							className="
								relative
								z-10
								h-[80vh]
								w-[80vw]
								max-h-[88vh]
								rounded-sm
								object-contain
							"
						/>

						{/* Close button */}
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close event announcement"
							className="
								absolute
								right-3
								top-3
								z-20
								flex
								h-10
								w-10
								sm:h-12
								sm:w-12
								items-center
								justify-center
								rounded-full
								border
								border-white/20
								bg-black/60
								text-2xl
								sm:text-3xl
								text-white
								backdrop-blur-sm
								transition-all
								duration-200
								hover:border-gold/70
								hover:bg-black/80
								hover:text-gold-light
								focus:outline-none
								focus:ring-2
								focus:ring-gold
							"
						>
							×
						</button>
					</div>
				</div>
			)}
		</>
	);
}