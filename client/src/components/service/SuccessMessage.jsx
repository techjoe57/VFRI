import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessMessage() {
	return (
		<div className="rounded-2xl bg-white shadow-xl p-12 text-center">

			<CheckCircle2
				size={70}
				className="mx-auto text-green-600 mb-6"
			/>

			<h2 className="font-display text-4xl text-green-dark mb-4">
				Thank You!
			</h2>

			<p className="text-gray-600 max-w-xl mx-auto mb-10">
				Your service inquiry has been received successfully.
				A member of our team will contact you shortly.
			</p>

			<Link
				to="/"
				className="btn-primary">

				Return Home

			</Link>

		</div>
	);
}