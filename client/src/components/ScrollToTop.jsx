import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top whenever the route changes, since React
// Router (client-side navigation) preserves scroll position by default.
// Mounted once at the top of the app, inside the Router.
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// "instant" (not the default, which inherits the global smooth
		// scroll-behavior set in index.css) so the page is already at the
		// top on first paint, with no visible scroll animation on navigation.
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);

	return null;
}
