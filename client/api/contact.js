import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export default async function handler(req, res) {
	if (req.method !== "POST") return res.status(405).end();

	const form = req.body;

	try {
		// 1. Save to Supabase
		const { error } = await supabase
			.from("contact_messages")
			.insert([form]);

		if (error) throw error;

		// 2. Gmail SMTP transporter
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_APP_PASSWORD,
			},
		});

		// 3. Send email
		await transporter.sendMail({
			from: `"VFRI Contact" <${process.env.EMAIL_USER}>`,
			to: process.env.RECEIVER_EMAIL,
			subject: `New Contact Form: ${form.enquiryType}`,
			html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${form.firstName} ${form.lastName}</p>
        <p><b>Email:</b> ${form.email}</p>
        <p><b>Organisation:</b> ${form.organisation}</p>
        <p><b>Message:</b> ${form.message}</p>
      `,
		});

		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
}
