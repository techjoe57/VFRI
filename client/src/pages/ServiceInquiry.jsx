import { useState } from "react";

export const SERVICES = [
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

		alert(
			"Your service inquiry has been received. We'll contact you soon."
		);

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
		"w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none";

	return (
		<div className="bg-white min-h-screen">
			{/* Hero */}
			<section className="bg-green-dark text-white py-24 px-8">
				<div className="max-w-5xl mx-auto">
					<h1 className="font-display text-5xl mb-6">
						Request Our Services
					</h1>

					<p className="text-lg text-white/80 max-w-3xl leading-8">
						Thank you for your interest in working with the
						Victoria Falls Regional Institute. Please complete the
						form below and our team will contact you.
					</p>
				</div>
			</section>

			{/* Form */}
			<section className="py-20 px-8">
				<div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">

					<form
						onSubmit={handleSubmit}
						className="space-y-6">

						<div>
							<label>Full Name</label>

							<input
								name="fullName"
								value={form.fullName}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div>
							<label>Organisation</label>

							<input
								name="organisation"
								value={form.organisation}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-6">

							<div>
								<label>Email Address</label>

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
								<label>Phone Number</label>

								<input
									name="phone"
									value={form.phone}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

						</div>

						<div className="grid md:grid-cols-2 gap-6">

							<div>
								<label>Country</label>

								<input
									name="country"
									value={form.country}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label>Expected Timeline</label>

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

							<label>Service Required</label>

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
                                
{/* 
								<option>
									Research
								</option>

								<option>
									Policy Advisory
								</option>

								<option>
									Training
								</option>

								<option>
									Institutional Partnership
								</option>

								<option>
									Consultancy
								</option>

								<option>
									Other
								</option> */}

							</select>

						</div>

						<div>

							<label>
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
							className="btn-primary w-full">

							Submit Service Request

						</button>

					</form>

				</div>
			</section>
		</div>
	);
}