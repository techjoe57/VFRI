import Hero from "../components/layout/Hero";
import Contact from "../components/sections/Contact";
import Focus from "../components/sections/Focus";
import Services from "../components/sections/Services";

export default function Home() {
	return (
		<>
			<Hero />
			<Focus />
			<Services />
			<Contact />
		</>
	);
}
