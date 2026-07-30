import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InquiryHero() {
	const navigate = useNavigate();

	return (
		<section className="relative overflow-hidden bg-green-deep text-white">
			<div className="absolute inset-0 bg-gradient-to-r from-green-deep via-green-deep/95 to-green-deep/80" />

			<div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

			<div className="page-hero section-inner">

				<p className="section-label mb-5">
					Service Enquiry
				</p>

				<h1 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight text-white">
					Request Our
					<span className="text-gold">
						{" "}Professional Services
					</span>
				</h1>

				<p className="dark-section-copy mt-6">
					Partner with the Victoria Falls Regional Institute to
					deliver impactful research, policy development,
					capacity building and institutional transformation
					across Africa.
				</p>

				<div className="flex flex-wrap gap-4 mt-8">

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
