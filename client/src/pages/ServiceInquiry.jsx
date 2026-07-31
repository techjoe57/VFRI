import { useState } from "react";

const SERVICES = [
	"Policy Research",
	"Policy Advisory",
	"Leadership Development",
	"Institutional Partnerships",
	"Capacity Building",
	"Consultancy",
	"Monitoring & Evaluation",
	"Strategic Dialogue",
	"Other",
];

export default function ServiceInquiry() {
	const [form, setForm] = useState({
		fullName: "",
		organisation: "",
		email: "",
		phone: "",
		country: "",
		service: "",
		timeline: "",
		description: "",
	});
    
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(form);

		setForm({
			fullName: "",
			organisation: "",
			email: "",
			phone: "",
			country: "",
			service: "",
			timeline: "",
			description: "",
		});
	};

	const inputClass =
		"w-full rounded-sm border border-black/10 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none";
	const labelClass = "meta-label mb-1.5 block text-ink-light";

	return (
		<div className="bg-cream min-h-screen">
			{/* Hero */}
			<section className="page-hero bg-green-deep text-white">
				<div className="max-w-5xl mx-auto">
					<h1 className="section-title text-white mb-5">
						Request Our Services
					</h1>

					<p className="dark-section-copy">
						Thank you for your interest in working with the
						Victoria Falls Regional Institute. Please complete the
						form below and our team will contact you.
					</p>
				</div>
			</section>

			{/* Form */}
			<section className="page-section">
				<div className="max-w-4xl mx-auto bg-white shadow-xl rounded-sm p-6 md:p-8">

					<form
						onSubmit={handleSubmit}
						className="space-y-5">

						<div>
							<label className={labelClass}>Full Name</label>

							<input
								name="fullName"
								value={form.fullName}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div>
							<label className={labelClass}>Organisation</label>

							<input
								name="organisation"
								value={form.organisation}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-5">

							<div>
								<label className={labelClass}>Email Address</label>

								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									className={inputClass}
									required
								/>
							</div>

							<div>
								<label className={labelClass}>Phone Number</label>

								<input
									name="phone"
									value={form.phone}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

						</div>

						<div className="grid md:grid-cols-2 gap-5">

							<div>
								<label className={labelClass}>Country</label>

								<input
									name="country"
									value={form.country}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Expected Timeline</label>

								<input
									name="timeline"
									value={form.timeline}
									onChange={handleChange}
									className={inputClass}
									placeholder="e.g. Next Month"
								/>
							</div>

						</div>

						<div>

							<label className={labelClass}>Service Required</label>

							<select
								name="service"
								value={form.service}
								onChange={handleChange}
								className={inputClass}
								required>

								<option value="">
									Select a service
								</option>
                                {SERVICES.map((service) => (
	<option
		key={service}
		value={service}>
		{service}
	</option>
))}

							</select>

						</div>

						<div>

							<label className={labelClass}>
								Project Description
							</label>

							<textarea
								name="description"
								rows="6"
								value={form.description}
								onChange={handleChange}
								className={inputClass}
								required
							/>

						</div>

						<button
							type="submit"
							className="btn-primary w-full text-green-deep">

							Submit Service Request

						</button>

					</form>

				</div>
			</section>
		</div>
	);
}
