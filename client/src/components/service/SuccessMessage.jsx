import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessMessage() {
	return (
		<div className="rounded-sm bg-white shadow-xl p-8 md:p-10 text-center">

			<CheckCircle2
				size={70}
				className="mx-auto text-green-600 mb-6"
			/>

			<h2 className="section-title text-green-deep mb-4">
				Thank You!
			</h2>

			<p className="section-copy mx-auto mb-8">
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
