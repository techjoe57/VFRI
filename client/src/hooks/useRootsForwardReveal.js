import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal hook for the Roots Forward page.
 *
 * This is intentionally a separate hook from the site-wide `useReveal`
 * (used elsewhere, e.g. Achievements.jsx) so this pilot animation stays
 * scoped to Roots Forward and never touches other pages.
 *
 * Every element goes through the exact same single mechanism —
 * IntersectionObserver — so each block's reveal fires at the same kind of
 * moment (its own entry into the viewport) with the same strength.
 * IntersectionObserver already handles the "element is already on screen"
 * case correctly on its own (its first callback reports the current
 * intersection state), so there is no separate manual check that could
 * fire early and rob a block of its transition.
 *
 * It is still hardened so content can never get stuck invisible:
 * - If IntersectionObserver isn't available, reveal immediately.
 * - threshold: 0 means the callback fires the moment any part of the
 *   element touches the viewport, rather than waiting for a fixed
 *   percentage — this makes it far less likely for a fast scroll to
 *   carry an element past its trigger point between frames.
 * - A generous fallback timer guarantees the element eventually becomes
 *   visible even if the observer callback never fires for some reason,
 *   without interfering with normal scroll-triggered reveals.
 */
export function useRootsForwardReveal() {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let revealed = false;
		const reveal = () => {
			if (revealed) return;
			revealed = true;
			el.classList.add("visible");
		};

		// Fail-safe: no IntersectionObserver support.
		if (typeof IntersectionObserver === "undefined") {
			reveal();
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					reveal();
					observer.unobserve(el);
				}
			},
			{ threshold: 0 }
		);
		observer.observe(el);

		// Fail-safe: if the observer never fires at all, reveal anyway.
		// Long enough that it never preempts a genuine scroll-triggered
		// reveal, but still guarantees recovery from a broken observer.
		const fallback = setTimeout(reveal, 15000);

		return () => {
			observer.disconnect();
			clearTimeout(fallback);
		};
	}, []);

	return ref;
}
