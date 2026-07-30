import {
	Briefcase,
	BookOpen,
	GraduationCap,
	Handshake,
	LineChart,
} from "lucide-react";

const benefits = [
	{
		icon: Briefcase,
		title: "Policy Advisory",
	},
	{
		icon: BookOpen,
		title: "Research",
	},
	{
		icon: GraduationCap,
		title: "Leadership Development",
	},
	{
		icon: Handshake,
		title: "Institutional Partnerships",
	},
	{
		icon: LineChart,
		title: "Monitoring & Evaluation",
	},
];

export default function InquiryBenefits() {
	return (
		<section className="page-section bg-white">

			<div className="section-inner">

				<h2 className="section-title text-green-deep text-center mb-5">
					Why Organisations Choose VFRI
				</h2>

				<p className="section-copy text-center mx-auto mb-10">
					Our multidisciplinary team works with governments,
					universities, civil society organisations and development
					partners throughout Africa.
				</p>

				<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">

					{benefits.map(({ icon: Icon, title }) => (
						<div
							key={title}
							className="rounded-sm border border-black/[0.06] p-5 text-center hover:shadow-xl transition">

							<Icon
								size={34}
								className="mx-auto text-gold mb-5"
							/>

							<h3 className="font-semibold">
								{title}
							</h3>

						</div>
					))}

				</div>

			</div>

		</section>
	);
}
