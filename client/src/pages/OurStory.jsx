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
				<section className="relative min-h-[340px] flex items-center justify-center px-6 pt-32 sm:pt-24 md:pt-20">
					<div className="text-center text-white max-w-4xl">
						<h1 className="font-display text-5xl md:text-6xl mt-4 md:mt-8 mb-4">
							Our Story
						</h1>

						<p className="text-lg md:text-xl text-white/90 leading-relaxed">
							Learn about the vision behind the Victoria Falls Regional Institute, 
							our journey, and the people driving our mission to reimagine Africa through dialogue.
						</p>
					</div>
				</section>

				<About />
				<Values />
				<Team compact={true}/>
			</div>
		</div>
	);
}
