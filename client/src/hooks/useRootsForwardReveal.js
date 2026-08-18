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
 *
 * It is hardened so content can never get stuck invisible:
 * - Elements already in the viewport on mount reveal immediately so
 *   above-fold content (especially the hero) is never a blank band.
 * - If IntersectionObserver isn't available, reveal immediately.
 * - threshold: 0 means the callback fires the moment any part of the
 *   element touches the viewport.
 * - A generous fallback timer guarantees the element eventually becomes
 *   visible even if the observer callback never fires.
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

		// Above-fold / already-visible: reveal on mount so first paint is not blank.
		// The 48px cushion below the fold accounts for the translateY() in the
		// reveal classes — an element whose resting spot is the bottom edge of
		// the first screen is shifted below the fold pre-reveal, so without the
		// cushion it would stay invisible until the user scrolls.
		const rect = el.getBoundingClientRect();
		const inView =
			rect.bottom > 0 &&
			rect.top <
				(window.innerHeight || document.documentElement.clientHeight) + 48;
		if (inView) {
			reveal();
			return;
		}

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
		const fallback = setTimeout(reveal, 15000);

		return () => {
			observer.disconnect();
			clearTimeout(fallback);
		};
	}, []);

	return ref;
}
