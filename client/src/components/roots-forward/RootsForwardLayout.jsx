import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import RootsForwardHeader from "./RootsForwardHeader";

export default function RootsForwardLayout() {
	return (
		<div className="flex min-h-screen flex-col overflow-x-hidden bg-cream">
			<RootsForwardHeader />
			<main className="flex-1 flex flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
