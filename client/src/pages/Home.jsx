import Hero from "../components/layout/Hero";
import Contact from "../components/sections/Contact";
import Focus from "../components/sections/Focus";
import Services from "../components/sections/Services";

export default function Home() {
	return (
		<div className="flex min-h-[100dvh] w-full max-w-full flex-1 flex-col">
			<Hero />
			<Focus />
			<Services />
			<Contact />
		</div>
	);
}
