import RootsForwardHero from "../components/roots-forward/RootsForwardHero";
import RootsForwardConnection from "../components/roots-forward/RootsForwardConnection";
import RootsForwardPillars from "../components/roots-forward/RootsForwardPillars";
import RootsForwardOutcomes from "../components/roots-forward/RootsForwardOutcomes";
import RootsForwardLocation from "../components/roots-forward/RootsForwardLocation";
import RootsForwardHelpBuild from "../components/roots-forward/RootsForwardHelpBuild";
import RootsForwardClosing from "../components/roots-forward/RootsForwardClosing";

export default function RootsForward() {
	return (
		<div className="flex-1">
			<RootsForwardHero />
			<RootsForwardConnection />
			<RootsForwardPillars />
			<RootsForwardOutcomes />
			<RootsForwardLocation />
			<RootsForwardHelpBuild />
			<RootsForwardClosing />
		</div>
	);
}
