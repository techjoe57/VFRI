import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InquiryHero() {
	const navigate = useNavigate();

	return (
		<section className="relative overflow-hidden bg-green-dark text-white">
			<div className="absolute inset-0 bg-gradient-to-r from-green-dark via-green-dark/95 to-green-dark/80" />

			<div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

			<div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-28">

				<p className="section-label mb-5">
					Service Enquiry
				</p>

				<h1 className="font-display text-5xl md:text-6xl max-w-3xl leading-tight text-white">
					Request Our
					<span className="text-gold">
						{" "}Professional Services
					</span>
				</h1>

				<p className="mt-8 max-w-2xl text-white/80 leading-8 text-lg">
					Partner with the Victoria Falls Regional Institute to
					deliver impactful research, policy development,
					capacity building and institutional transformation
					across Africa.
				</p>

				<div className="flex flex-wrap gap-5 mt-10">

					<button
						className="btn-primary"
						onClick={() =>
							document
								.getElementById("inquiry-form")
								?.scrollIntoView({
									behavior: "smooth",
								})
						}>
						Request Consultation
					</button>

					<button
						className="btn-outline flex items-center gap-2"
						onClick={() => navigate("/programs")}>

						Explore Programmes

						<ArrowRight size={18} />

					</button>

				</div>

			</div>
		</section>
	);
}