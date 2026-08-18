import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
	return (
		
		<div className="flex min-h-[100dvh] w-full max-w-full flex-col bg-cream">
			<Navbar />
			<main className="flex w-full flex-1 flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
