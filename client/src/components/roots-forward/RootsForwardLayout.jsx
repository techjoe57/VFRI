import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import RootsForwardHeader from "./RootsForwardHeader";

export default function RootsForwardLayout() {
	return (
		<div className="flex min-h-[100dvh] w-full max-w-full flex-col bg-cream">
			<RootsForwardHeader />
			<main className="flex w-full flex-1 flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
