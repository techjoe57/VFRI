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
		<section className="py-20 bg-white">

			<div className="max-w-7xl mx-auto px-8 md:px-16">

				<h2 className="font-display text-4xl text-green-dark text-center mb-5">
					Why Organisations Choose VFRI
				</h2>

				<p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
					Our multidisciplinary team works with governments,
					universities, civil society organisations and development
					partners throughout Africa.
				</p>

				<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

					{benefits.map(({ icon: Icon, title }) => (
						<div
							key={title}
							className="rounded-xl border border-gray-200 p-8 text-center hover:shadow-xl transition">

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