import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { CONTACT, ENQUIRY_TYPES } from "../../data/content";
import { Building2, Globe, Mail, MapPin } from "lucide-react";

function ContactItem({ label, children }) {
	return (
		<div className="flex gap-4 items-start">
			<div className="flex-shrink-0 border-gold/30 flex items-center justify-center text-gold">
				{label === "Harare" ? (
					<Building2 size={22} />
				) : label === "Nairobi" ? (
					<MapPin size={22} />
				) : label === "Email" ? (
					<Mail size={22} />
				) : (
					<Globe size={22} />
				)}
			</div>
			<div>{children}</div>
		</div>
	);
}

export default function Contact() {
	const leftRef = useReveal();
	const rightRef = useReveal();

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		organisation: "",
		enquiryType: "",
		message: "",
	});
	const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

	const handleChange = (e) =>
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const handleSubmit = async (e) => {
		e.preventDefault();

		setStatus("sending");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Something went wrong");
			}

			setStatus("success");

			setForm({
				firstName: "",
				lastName: "",
				email: "",
				organisation: "",
				enquiryType: "",
				message: "",
			});
		} catch (err) {
			console.error(err);
			setStatus("error");
		}

		setTimeout(() => setStatus(null), 4000);
	};

	const inputCls = `
	w-full bg-white/10 
	border border-white/20
	rounded-sm 
	px-4 
	py-3
    text-white 
	text-sm 
	placeholder:text-white/40
    focus:outline-none 
	focus:border-gold 
	focus:bg-white/15 
	transition-all
	duration-200
	`;

	return (
		<section
			id="contact"
			className="relative page-section bg-[#5E0A11] grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
			{/* Info */}
			<div ref={leftRef} className="reveal">
				<span
					className="section-label mb-4 block"
					style={{ color: "#c8a84b" }}>
					Get In Touch
				</span>
				<h2 className="section-title text-white mb-8">
					Let's Start the Conversation
				</h2>
				<p className="dark-section-copy mb-10">
					Whether you're seeking research collaboration, institutional
					partnerships, policy engagement, or simply want to learn more
					about our work, we'd love to hear from you.
				</p>

				<div className="flex flex-col gap-5">
					<ContactItem label="Harare">
						<p className="meta-label text-gold mb-2">
							{CONTACT.harare.label}
						</p>
						<p className="text-white/75 text-sm leading-relaxed">
							{CONTACT.harare.address}
						</p>
						<p className="text-white/55 text-xs mt-1">
							{CONTACT.harare.phone}
						</p>
					</ContactItem>
					<ContactItem label="Nairobi">
						<p className="meta-label text-gold mb-2">
							{CONTACT.nairobi.label}
						</p>
						<p className="text-white/75 text-sm leading-relaxed">
							{CONTACT.nairobi.address}
						</p>
						<p className="text-white/55 text-xs mt-1">
							{CONTACT.nairobi.phone}
						</p>
					</ContactItem>
					<ContactItem label="Email">
						<p className="meta-label text-gold mb-2">
							Email
						</p>
						<a
							href={`mailto:${CONTACT.email}`}
							className="text-white/75 text-sm hover:text-gold transition-colors">
							{CONTACT.email}
						</a>
					</ContactItem>
					
				</div>
			</div>

			{/* Form */}
			<div 
				ref={rightRef} 
				className="reveal bg-white/8 backdrop-blur-md border border-white/15 rounded-sm p-4 md:p-8 shadow-2xl">
				<h3 className="card-title font-light text-white mb-4">
					General Enquiries
				</h3>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div className="grid sm:grid-cols-2 gap-4">
						<div>
							<label className="meta-label block text-white/50 mb-1.5">
								First Name
							</label>
							<input
								name="firstName"
								value={form.firstName}
								onChange={handleChange}
								placeholder="First name"
								required
								className={inputCls}
							/>
						</div>
						<div>
							<label className="meta-label block text-white/50 mb-1.5">
								Last Name
							</label>
							<input
								name="lastName"
								value={form.lastName}
								onChange={handleChange}
								placeholder="Last name"
								required
								className={inputCls}
							/>
						</div>
					</div>

					<div>
						<label className="meta-label block text-white/50 mb-1.5">
							Email Address
						</label>
						<input
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							placeholder="your@email.com"
							required
							className={inputCls}
						/>
					</div>

					<div>
						<label className="meta-label block text-white/50 mb-1.5">
							Organisation
						</label>
						<input
							name="organisation"
							value={form.organisation}
							onChange={handleChange}
							placeholder="University, NGO, Government body..."
							className={inputCls}
						/>
					</div>

					<div>
						<label className="meta-label block text-white/50 mb-1.5">
							Nature of Enquiry
						</label>
						<select
							name="enquiryType"
							value={form.enquiryType}
							onChange={handleChange}
							required
							className={`${inputCls} [&>option]:bg-[#5E0A11]`}>
							<option value="">Select an option</option>
							{ENQUIRY_TYPES.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>

					<div>
						<label className="meta-label block text-white/50 mb-1.5">
							Message
						</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Tell us about your enquiry or interest in VFRI..."
							required
							rows={2} 
							className={`${inputCls} resize-none`}
						/>
					</div>

					<button
						type="submit"
						disabled={status === "sending"}
						className={`btn-primary w-full text-center mt-2 transition-all
						${status === "success" ? "!bg-crimson-mid !text-white" : ""}
						${status === "error" ? "!bg-rust !text-white" : ""}
						${status === "sending" ? "opacity-60 cursor-not-allowed" : ""}`}>
						{status === "sending"
							? "Sending…"
							: status === "success"
								? "Message Sent ✓"
								: status === "error"
									? "Error — Try Again"
									: "Send Enquiry"}
					</button>
				</form>
			</div>
			<div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-px bg-white/10" />
		</section>
	);
}
