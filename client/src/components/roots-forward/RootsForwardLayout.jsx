import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import RootsForwardHeader from "./RootsForwardHeader";

export default function RootsForwardLayout() {
	return (
		<div className="flex flex-col min-h-screen bg-cream">
			<RootsForwardHeader />
			<main className="flex-1 flex flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
