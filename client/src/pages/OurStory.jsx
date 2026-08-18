import About from "../components/sections/About";
import Team from "./Team";
import Values from "../components/sections/Values";

export default function OurStory() {
	return (
		<div
			className="flex min-h-[100dvh] w-full max-w-full flex-col bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage:
					"url('/images/about/victoria_falls.jpg')",
			}}
		>
			{/* Global overlay */}
			<div className="flex min-h-[100dvh] w-full max-w-full flex-1 flex-col bg-black/35">
				{/* Hero */}
				<section className="relative px-6 pb-3 pt-32 sm:pt-28">
					<div className="mx-auto max-w-4xl text-center text-white">
						<h1 className="mb-3 font-display text-5xl md:text-6xl">
							Our Story
						</h1>

						<p className="text-lg leading-relaxed text-white/90 md:text-xl">
							Learn about the vision behind the Victoria Falls Regional Institute, 
							our journey, and the people driving our mission to reimagine Africa through dialogue.
						</p>
					</div>
				</section>

				<About />
				<Values />
				<Team compact={true} />
			</div>
		</div>
	);
}
