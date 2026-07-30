import About from "../components/sections/About";
import Team from "./Team";
import Values from "../components/sections/Values";

export default function OurStory() {
	return (
		<>
			<section className="page-hero bg-green-deep text-white text-center">
				<div className="max-w-4xl mx-auto px-6">
					<h1 className="section-title text-white mb-5">
						Our Story
					</h1>

					<p className="dark-section-copy mx-auto">
						Learn about the vision behind the Victoria Falls Regional
						Institute, our journey, and the people driving our mission
						to reimagine Africa through dialogue.
					</p>
				</div>
			</section>

			<About />
			<Values />

			<Team compact />
		</>
	);
}
