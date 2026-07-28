import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
	return (
		
		<div className="flex flex-col min-h-screen bg-cream">
			<Navbar />
			<main className="flex-1 flex flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
