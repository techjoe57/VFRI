import About from "../components/sections/About";
import Team from "./Team";
import Values from "../components/sections/Values";

export default function OurStory() {
	return (
		<>
			<section className="pt-36 pb-24 bg-green-deep text-white text-center">
				<div className="max-w-4xl mx-auto px-6">
					<h1 className="font-display text-5xl mb-6">
						Our Story
					</h1>

					<p className="text-lg text-white/80 leading-relaxed">
						Learn about the vision behind the Victoria Falls Regional
						Institute, our journey, and the people driving our mission
						to reimagine Africa through dialogue.
					</p>
				</div>
			</section>

			<About />
			<Values/>

			<Team />
		</>
	);
}