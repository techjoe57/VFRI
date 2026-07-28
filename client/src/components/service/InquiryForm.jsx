import { SERVICES1 } from "../../data/content";
import { useState } from "react";
import {
	Building2,
	CalendarDays,
	FileText,
	Globe,
	Mail,
	Phone,
	User,
} from "lucide-react";

import SuccessMessage from "./SuccessMessage";

export default function InquiryForm() {
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

	const [status, setStatus] = useState("idle");
	// idle | submitting | success | error

	const [error, setError] = useState("");
	// Validaton for Form

	const validateForm = () => {

		if (!form.fullName.trim()) {
			return "Please enter your full name.";
		}

		if (!form.email.trim()) {
			return "Please enter your email address.";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(form.email)) {
			return "Please enter a valid email address.";
		}

		if (!form.organisation.trim()) {
			return "Please enter your organisation.";
		}

		if (!form.service) {
			return "Please select a service.";
		}

		if (!form.description.trim()) {
			return "Please describe your project.";
		}
		return null;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("Form submitted");

		setError("");

		const validationError = validateForm();

		if (validationError) {
			console.log(validationError);
			setError(validationError);
			return;
		}

		console.log("Setting status to submitting");
		setStatus("submitting");

		try {
			// Supabase will go here later
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log("Setting status to success");

			setStatus("success");

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
		} catch (err) {
			setStatus("error");

			setError("Unable to submit your request.");
			console.error(err);
		}
	};

	const handleChange = (e) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	if (status === "success") {
		return (
			<section
				id="inquiry-form"
				className="py-24 bg-cream">
				<div className="max-w-4xl mx-auto px-8">
					<SuccessMessage />
				</div>
			</section>
		);
	}
	const inputClass =
		"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:border-gold transition";

	return (
		<section
			id="inquiry-form"
			className="py-24 bg-cream">
			<div className="max-w-4xl mx-auto px-8">
				<div className="bg-white rounded-2xl shadow-xl p-10">
					<h2 className="font-display text-4xl text-center text-green-dark mb-3">
						Service Request Form
					</h2>
					<p className="text-center text-gray-600 mb-10">
						Tell us about your project and we'll get back to you.
					</p>

					<form onSubmit={handleSubmit} className="space-y-8">
						{/* PERSONAL DETAILS */}
						<div>
							<h3 className="font-semibold text-green-dark mb-5">
								Personal Details
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="mb-2 flex items-center gap-2">
										<User size={18} />
										Full Name
									</label>
									<input
										name="fullName"
										value={form.fullName}
										onChange={handleChange}
										className={inputClass}
									/>
								</div>
								<div>
									<label className="mb-2 flex items-center gap-2">
										<Mail size={18} />
										Email Address
									</label>
									<input
										type="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										className={inputClass}
									/>
								</div>
							</div>
						</div>
						{/* ORGANISATION */}
						<div>
							<h3 className="font-semibold text-green-dark mb-5">
								Organisation Details
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="mb-2 flex items-center gap-2">
										<Building2 size={18} />
										Organisation
									</label>
									<input
										name="organisation"
										value={form.organisation}
										onChange={handleChange}
										className={inputClass}
										required />
								</div>
								<div>
									<label className="mb-2 flex items-center gap-2">
										<Phone size={18} />
										Phone Number
									</label>
									<input
										name="phone"
										value={form.phone}
										onChange={handleChange}
										className={inputClass}
									/>
								</div>
							</div>
							<div className="mt-6">
								<label className="mb-2 flex items-center gap-2">
									<Globe size={18} />
									Country
								</label>
								<input
									name="country"
									value={form.country}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>
						</div>
						{/* PROJECT */}
						<div>
							<h3 className="font-semibold text-green-dark mb-5">
								Project Details
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="mb-2 flex items-center gap-2">
										<FileText size={18} />
										Service Required
									</label>
									<select
										name="service"
										value={form.service}
										onChange={handleChange}
										className={inputClass}
										required>
										<option value="">
											Choose a Service
										</option>
										{SERVICES1.map((service) => (
											<option key={service} value={service}>
												{service}
											</option>
										))}
									</select>
								</div>
								<div>
									<label className="mb-2 flex items-center gap-2">
										<CalendarDays size={18} />
										Expected Timeline
									</label>
									<input
										name="timeline"
										value={form.timeline}
										onChange={handleChange}
										placeholder="e.g. Q4 2026"
										className={inputClass}
									/>
								</div>
							</div>
							<div className="mt-6">
								<label className="mb-2 flex items-center gap-2">
									<FileText size={18} />
									Project Description
								</label>
								<textarea
									name="description"
									rows={6}
									value={form.description}
									onChange={handleChange}
									className={`${inputClass} resize-none`}
									placeholder="Tell us about your project..."
									required
								/>
							</div>
						</div>
						<div className="pt-6">
							{error && (
								<div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
									{error}
								</div>
							)}
							<button
								type="submit"
								disabled={status === "submitting"}
								className={`btn-primary w-full md:w-auto px-10 ${status === "submitting"
									? "opacity-70 cursor-not-allowed"
									: ""
									}`}
							>
								{status === "submitting"
									? "Submitting..."
									: "Submit Service Request"}
							</button>
						</div>

					</form>

				</div>

			</div>

		</section>
	)};
