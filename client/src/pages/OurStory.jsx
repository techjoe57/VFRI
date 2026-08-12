import About from "../components/sections/About";
import Team from "./Team";
import Values from "../components/sections/Values";

export default function OurStory() {
	return (
		<div
			className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage:
					"url('/images/about/victoria_falls.jpg')",
			}}
		>
			{/* Global overlay */}
			<div className="bg-black/35 min-h-screen">
				{/* Hero */}
				<section className="relative px-6 pb-3 pt-24 sm:pt-[100px]">
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
